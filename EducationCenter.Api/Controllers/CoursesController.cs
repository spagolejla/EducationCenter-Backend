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

        public CoursesController(ICourseRepository courseRepository)
        {
            _courseRepository = courseRepository;
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
            Course courses = await _courseRepository.GetById(id);
            return Ok(courses.ToDTO());

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

    }
}
