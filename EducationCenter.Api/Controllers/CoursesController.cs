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


        public CoursesController(ICourseRepository courseRepository, ICompetitionRepository competitionRepository)
        {
            _courseRepository = courseRepository;
            _competitionRepository = competitionRepository;
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

        [Route("api/educator/{educatorId}/courses")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDTO>>> GetCoursesByEducatorId(int educatorId)
        {
            IEnumerable<Course> courses = await _courseRepository.GetByEducatorId(educatorId);
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
         

            if (_cour == null )
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
