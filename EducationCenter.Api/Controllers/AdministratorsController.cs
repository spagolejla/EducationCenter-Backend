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
    public class AdministratorsController : ControllerBase
    {
        private readonly IAdministratorRepository _administratorRepository;

        public AdministratorsController(IAdministratorRepository administratorRepository)
        {
            _administratorRepository = administratorRepository;
        }

        [Route("api/administrators")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdministratorDTO>>> GetAllAdministrators()
        {
            IEnumerable<Administrator> administrators = await _administratorRepository.GetAllAdministrators();
            return Ok(administrators.ToDTOList());

        }

        [Route("api/administrator/{id}")]
        [HttpGet]
        public async Task<ActionResult<AdministratorDTO>> GetById(int id)
        {
            Administrator administrator = await _administratorRepository.GetById(id);
            return Ok(administrator.ToDTO());

        }





    }
}
