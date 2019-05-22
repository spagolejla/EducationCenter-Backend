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
    public class EducatorsController : ControllerBase
    {
        private readonly IEducatorRepository _educatorRepository;

        public EducatorsController(IEducatorRepository educatorRepository)
        {
            _educatorRepository = educatorRepository;
        }

        [Route("api/educators")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EducatorDTO>>> GetAllEducators()
        {
            IEnumerable<Educator> educators = await _educatorRepository.GetAllEducators();
            return Ok(educators.ToDTOList());

        }

        [Route("api/educator/{id}")]
        [HttpGet]
        public async Task<ActionResult<EducatorDTO>> GetById(int id)
        {
            Educator educator = await _educatorRepository.GetById(id);
            return Ok(educator.ToDTO());

        }


    }
}
