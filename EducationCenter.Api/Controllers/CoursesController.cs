using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EducationCenter.Core.Entities;
using EducationCenter.Infrastructure.Data;
using EducationCenter.Core.Interfaces;
using EducationCenter.Api.Contracts;

namespace EducationCenter.Api.Controllers
{

    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly ICourseRepository _courseRepository;
        private readonly ICompetitionRepository _competitionRepository;
        private readonly IStudentRepository _studentRepository;



        public CoursesController(ICourseRepository courseRepository, ICompetitionRepository competitionRepository, IStudentRepository studentRepository)
        {
            _courseRepository = courseRepository;
            _competitionRepository = competitionRepository;
            _studentRepository = studentRepository;
        }

        [Route("api/courses")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDTO>>> GetAllCourses()
        {
            IEnumerable<Course> courses = await _courseRepository.GetAllCourses();
            return Ok(courses.ToDTOList());

        }

        [Route("api/course/{id}")]
        [HttpGet]
        public async Task<ActionResult<CourseDTO>> GetById(int id)
        {
            Course course = await _courseRepository.GetById(id);
            CourseDTO courseDTO = course.ToDTO();
            IEnumerable<CourseRate> rates = await _courseRepository.GetAllCourseRates(courseDTO.ID);
            courseDTO.Rates = rates.ToDTOList();

            courseDTO.AvgRate = rates.Count() > 0 ? rates.Average(x => x.Rate) : 0.0;
            return Ok(courseDTO);
        }

        [Route("api/course/manage/{id}")]
        [HttpGet]
        public async Task<ActionResult<CourseManageDTO>> GetCourseManageById(int id)
        {
            Course course = await _courseRepository.GetById(id);
            CourseManageDTO cmDTO = new CourseManageDTO()
            {
                Id = course.Id,
                Name = course.Name,
                MaxNumberOfClasses = course.NumberOfLectures
            };

            List<Student> students = await _studentRepository.GetByCourseId(id);
            List<StudentCourseAttendanceDTO> studentCourseAttendanceDTOs = new List<StudentCourseAttendanceDTO>();
            foreach (var item in students)
            {
                var studentDTO = item.ToDTO();
                var attdendance = _courseRepository.GetStudentAttendance(id, item.Id);
                StudentCourseAttendanceDTO scaDTO = new StudentCourseAttendanceDTO()
                {
                    StudentId = item.Id,
                    Student = item.FirstName + ' ' + item.LastName,
                    CourseId = id,
                    AttendanceAvg = attdendance,
                    AvatarUrl = studentDTO.AvatarUrl

                };

                studentCourseAttendanceDTOs.Add(scaDTO);

            }
            cmDTO.Students = studentCourseAttendanceDTOs;


            IEnumerable<CourseClass> classes = await _courseRepository.GetAllCourseClasses(id);

            cmDTO.Classes = classes.ToDTOList();
            int increment = 1;
            foreach (var item in cmDTO.Classes)
            {
                item.Number = increment++;
            }
            cmDTO.CurrentNumberOfClasses = classes.Count();
            return Ok(cmDTO);
        }

        [Route("api/educator/{educatorId}/courses")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDTO>>> GetCoursesByEducatorId(int educatorId)
        {
            IEnumerable<Course> courses = await _courseRepository.GetByEducatorId(educatorId);
            return Ok(courses.ToDTOList());

        }


        [Route("api/educator/{educatorId}/courses/forCompetition")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDTO>>> GetCoursesForCompetiton(int educatorId)
        {
            IEnumerable<Course> courses = await _courseRepository.GetCoursesWithoutCompetition(educatorId);
            return Ok(courses.ToDTOList());

        }

        [Route("api/educator/{educatorId}/courses/active")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDTO>>> GetActiveCoursesByEducatorId(int educatorId)
        {
            IEnumerable<Course> courses = await _courseRepository.GetActiveCoursesByEducatorId(educatorId);
            return Ok(courses.ToDTOList());

        }

        [Route("api/student/{studentId}/courses/active")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDTO>>> GetActiveCoursesByStudentId(int studentId)
        {
            IEnumerable<Course> courses = await _courseRepository.GetActiveCoursesByStudentId(studentId);
            return Ok(courses.ToDTOList());

        }

        [Route("api/student/{studentId}/courses")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDTO>>> GetCoursesByStudentId(int studentId)
        {
            IEnumerable<Course> courses = await _courseRepository.GetByStudentId(studentId);
            return Ok(courses.ToDTOList());

        }

        [HttpPost]
        [Route("api/course")]
        public async Task<ActionResult> PostCourse(CourseInsertDTO course)
        {
            var courseId = await _courseRepository.AddCourse(course.ToEntity());
            return Ok();
        }

        [HttpPost]
        [Route("api/course/addRate")]
        public async Task<ActionResult> PostRate(CourseRateInsertDTO rate)
        {
            CourseRate newRate = new CourseRate()
            {
                CourseId = rate.CourseId,
                StudentId = rate.StudentId,
                Rate = rate.Rate,
                Comment = rate.Comment
            };

           var rateId =  _courseRepository.AddCourseRate(newRate);
           return Ok();
        }

        [HttpPost]
        [Route("api/course/addClass")]
        public async Task<ActionResult> AddClass(CourseClassInsertDTO courseClass)
        {
            CourseClass newClass = new CourseClass()
            {
                CourseId = courseClass.CourseId,
                Description = courseClass.Description,
                Date = DateTime.Now

            };
            var classId = await _courseRepository.AddClass(newClass);

            if (classId != 0)
            {
                List<StudentCourse> stdCourses = await _courseRepository.GetStudentCoursesByCourseid(courseClass.CourseId);
                List<StudentAttendance> studentAttendances = new List<StudentAttendance>();
                foreach (var item in stdCourses)
                {
                    bool attended = false;
                    foreach (var id in courseClass.StudentIds)
                    {
                        if (item.StudentId == id)
                        {
                            StudentAttendance sa = new StudentAttendance()
                            {
                                CourseClassId = classId,
                                StudentCourseId = item.Id,
                                Present = true
                            };
                            studentAttendances.Add(sa);
                            attended = true;
                        }

                    }
                    if (attended == false)
                    {
                        StudentAttendance sa = new StudentAttendance()
                        {
                            CourseClassId = classId,
                            StudentCourseId = item.Id,
                            Present = false
                        };
                        studentAttendances.Add(sa);

                    }
                }

                _studentRepository.AddStudentAttendance(studentAttendances);

                return Ok();


            }



            return BadRequest();

         
          
        }

        [HttpPost]
        [Route("api/course/addStudents")]
        public async Task<ActionResult> AddStudents(List<CompetitionApplicationDTO> applications)
        {
            List<StudentCourse> students = new List<StudentCourse>();
            int competitionId = 0;

            foreach (var item in applications)
            {
                StudentCourse student = new StudentCourse()
                {
                    CourseId = item.CourseId,
                    StudentId = item.StudentId,
                    Mark = 0,

                };
                competitionId = item.CompetitionId;
                students.Add(student);
            }
            var succes = await _courseRepository.AddStudents(students);
            if (succes == 1)
            {
                Competition competition = await _competitionRepository.GetById(competitionId);
                if (competition != null)
                {
                    competition.Active = false;
                }

                _competitionRepository.UpdateCompetition(competition);

                return Ok();
            }
            return BadRequest();
        }



        [HttpPut]
        [Route("api/course")]
        public async Task<ActionResult> PutCourse(CourseUpdateDTO cour)
        {
            var _cour = await _courseRepository.GetById(cour.Id);


            if (_cour == null)
            {
                return NotFound();
            }

            _cour.Name = cour.Name;
            _cour.Description = cour.Description;
            _cour.NumberOfLectures = cour.NumberOfLectures;
            _cour.Price = cour.Price;
            _cour.StartDate = cour.StartDate;
            _cour.ClassStartTime = cour.ClassStartTime;
            _cour.DaysOfWeek = cour.DaysOfWeek;


            _courseRepository.UpdateCourse(_cour);

            return NoContent();
        }

    }
}
