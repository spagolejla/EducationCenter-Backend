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

namespace EducationCenter.Api.Controllers
{
   
    [ApiController]
    public class CourseFieldsController : ControllerBase
    {
        private readonly ICourseFieldRepository _courseFieldsRepository;

        public CourseFieldsController(ICourseFieldRepository courseFieldsRepository)
        {
            _courseFieldsRepository = courseFieldsRepository;
        }

        [HttpGet]
        [Route("api/courseFields")]
        public async Task<ActionResult<IEnumerable<CourseField>>> GetAll()
        {
            IEnumerable<CourseField> courseFields = await _courseFieldsRepository.GetAll();

            return Ok(courseFields);
        }
    }
}
