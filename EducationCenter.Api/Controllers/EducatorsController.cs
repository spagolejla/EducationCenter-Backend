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
        private readonly IUserAccountRepository _userAccountRepository;


        public EducatorsController(IEducatorRepository educatorRepository, IUserAccountRepository userAccountRepository)
        {
            _educatorRepository = educatorRepository;
            _userAccountRepository = userAccountRepository;
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

        //[HttpPost]
        //[Route("api/educator")]
        //public async Task<ActionResult> PostEducator(EducatorInsertDTO educator)
        //{
        //    UserAccount newAccount = new UserAccount(educator.Username, educator.Password, 2, educator.AvatarUrl);

        //    var newAccountId = await _userAccountRepository.AddUserAccount(newAccount);

        //    Educator newEducator = new Educator()
        //    {
        //        FirstName = educator.FirstName,
        //        LastName = educator.LastName,
        //        Email = educator.Email,
        //        Phone = educator.Phone,
        //        Title = educator.Title,
        //        CourseFieldId = educator.CourseFieldId,
        //        UserAccountId = newAccountId,
        //    };

        //    var edcId = await _educatorRepository.AddEducator(newEducator);

        //    return Ok();
        //}


        [HttpPost]
        [Route("api/educator")]
        public async Task<ActionResult> PostEducator(EducatorInsertDTO educator)
        {
            try
            {
                UserAccount newAccount = new UserAccount(educator.Username, educator.Password, 2, educator.AvatarUrl);

                int newAccountId = await _userAccountRepository.AddUserAccount(newAccount);
                if (newAccountId != 0)
                {
                    Educator newEducator = new Educator(educator.FirstName, educator.LastName,
                   educator.Email, educator.Phone, newAccountId, educator.Title, educator.CourseFieldId);


                    var edcId = await _educatorRepository.AddEducator(newEducator);
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
