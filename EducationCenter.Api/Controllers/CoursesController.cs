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

    }
}
