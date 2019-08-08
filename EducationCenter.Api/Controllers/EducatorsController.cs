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
            IEnumerable<EducatorDTO> edcs = educators.ToDTOList();
            foreach (var item in edcs)
            {
                IEnumerable<EducatorRate> rates = await _educatorRepository.GetAllEducatorRates(item.ID);
                item.Rates = rates.ToDTOList();
             
                item.AvgRate = rates.Count() > 0 ? rates.Average(x => x.Rate): 0.0;
            }

            return Ok(edcs);

        }

        [Route("api/educator/{id}")]
        [HttpGet]
        public async Task<ActionResult<EducatorDTO>> GetById(int id)
        {
            Educator educator = await _educatorRepository.GetById(id);
            EducatorDTO educatorDTO = educator.ToDTO();
            IEnumerable<EducatorRate> rates = await _educatorRepository.GetAllEducatorRates(educatorDTO.ID);
            educatorDTO.Rates = rates.ToDTOList();

            educatorDTO.AvgRate = rates.Count() > 0 ? rates.Average(x => x.Rate) : 0.0;
            return Ok(educatorDTO);

        }



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

        [HttpPost]
        [Route("api/educator/addRate")]
        public async Task<ActionResult> PostRate(EducatorRateInsertDTO rate)
        {
            EducatorRate newRate = new EducatorRate()
            {
                EducatorId = rate.EducatorId,
                StudentId = rate.StudentId,
                Rate = rate.Rate,
                Comment = rate.Comment
            };

            var rateId = _educatorRepository.AddEducatorRate(newRate);
            return Ok();
        }

        [HttpPut]
        [Route("api/educator")]
        public async Task<ActionResult> PutEducator(EducatorUpdateDTO edc)
        {
            var _edc = await _educatorRepository.GetById(edc.Id);
            var _userAccount = await _userAccountRepository.GetById(edc.UserAccountId);

            if (_edc == null || _userAccount == null)
            {
                return NotFound();
            }

            _edc.FirstName = edc.FirstName;
            _edc.LastName = edc.LastName;
            _edc.Email = edc.Email;
            _edc.Phone = edc.Phone;
            _edc.Title = edc.Title;


            _userAccount.Username = edc.Username;
            _userAccount.Password = edc.Password;
            _userAccount.AvatarUrl = edc.AvatarUrl;
            _userAccount.Active = edc.Active;

            _educatorRepository.UpdateEducator(_edc);
            _userAccountRepository.UpdateUserAccount(_userAccount);

            return NoContent();
        }


    }
}
