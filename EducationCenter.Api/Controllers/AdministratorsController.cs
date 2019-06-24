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
            return Ok(administrator.ToUpdateDTO());

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

        [HttpPut]
        [Route("api/administrator")]
        public async Task<ActionResult> PutAdministrator(AdminUpdateDTO admin)
        {
            var _admin = await _administratorRepository.GetById(admin.Id);
            var _userAccount = await _userAccountRepository.GetById(admin.UserAccountId);

            if (_admin == null || _userAccount == null)
            {
                return NotFound();
            }

            _admin.FirstName = admin.FirstName;
            _admin.LastName = admin.LastName;
            _admin.Email = admin.Email;
            _admin.Phone = admin.Phone;

            _userAccount.Username = admin.Username;
            _userAccount.Password = admin.Password;
            _userAccount.AvatarUrl = admin.AvatarUrl;
            _userAccount.Active = admin.Active;

            _administratorRepository.UpdateAdmin(_admin);
            _userAccountRepository.UpdateUserAccount(_userAccount);

            return NoContent();
        }



    }
}
