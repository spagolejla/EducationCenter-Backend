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
    public class UserAccountsController : ControllerBase
    {
        private readonly IUserAccountRepository _userAccountRepository;


        public UserAccountsController(IUserAccountRepository userAccountRepository)
        {
            _userAccountRepository = userAccountRepository;
        }


        [Route("api/userAccount/checkUsername/{username}")]
        [HttpGet]
        public bool UserAccountExists(string  username)
        {
            return _userAccountRepository.UsernameExist(username);
        }

      
    }
}
