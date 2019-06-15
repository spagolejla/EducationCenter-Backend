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
        private readonly IUserAccountRepository _userAccountRepository;


        public AdministratorsController(IAdministratorRepository administratorRepository, IUserAccountRepository userAccountRepository)
        {
            _administratorRepository = administratorRepository;
            _userAccountRepository = userAccountRepository;
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


        [HttpPost]
        [Route("api/administrator")]
        public async Task<ActionResult> PostEducator(AdminInsertDTO admin)
        {
            try
            {
                UserAccount newAccount = new UserAccount(admin.Username, admin.Password, 1, admin.AvatarUrl);

                int newAccountId = await _userAccountRepository.AddUserAccount(newAccount);

                if (newAccountId != 0)
                {
                    Administrator newAdmin = new Administrator(admin.FirstName, admin.LastName,
                   admin.Email, admin.Phone, newAccountId);


                    var admId = await _administratorRepository.AddAdmin(newAdmin);
                    return Ok();
                }

                return BadRequest();
            }
            catch (Exception ex)
            {

                throw ex;
            }




        }



    }
}
