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
    public class UserAccountsController : ControllerBase
    {
        private readonly IUserAccountRepository _userAccountRepository;
        private readonly IStudentRepository _studentRepository;
        private readonly IAdministratorRepository _administratorRepository;
        private readonly IEducatorRepository _educatorRepository;

        public UserAccountsController(
            IUserAccountRepository userAccountRepository,
            IStudentRepository studentRepository,
            IAdministratorRepository administratorRepository,
            IEducatorRepository educatorRepository
            )
        {
            _userAccountRepository = userAccountRepository;
            _studentRepository = studentRepository;
            _administratorRepository = administratorRepository;
            _educatorRepository = educatorRepository;
        }


        [Route("api/userAccount/checkUsername/{username}")]
        [HttpGet]
        public bool UserAccountExists(string username)
        {
            return _userAccountRepository.UsernameExist(username);
        }

        [Route("api/userAccount/login/{username}/{password}")]
        [HttpGet]
        public async Task<ActionResult<UserDTO>> Login(string username, string password)
        {
            UserAccount userAccount = await _userAccountRepository.GetByUsername(username);

            if (userAccount != null)
            {
                if (userAccount.AccountTypeId == 1)
                {
                    Administrator userAdmin = await _administratorRepository.GetByUserAccountId(userAccount.Id);

                    if (userAdmin != null)
                    {
                        if (userAccount.Password != password)
                        {
                            return BadRequest();
                        }
                        UserDTO userDTO = new UserDTO
                        {
                            FirstName = userAdmin.FirstName,
                            LastName = userAdmin.LastName,
                            UserId = userAdmin.Id,
                            Username = userAccount.Username,
                            Password = userAccount.Password,
                            AvatarUrl = userAccount.AvatarUrl,
                            AccountTypeId = userAccount.AccountTypeId,
                            AccountType = userAccount.AccountType.Type,
                            UserAccountId = userAccount.Id,
                            Email = userAdmin.Email,
                            Phone = userAdmin.Phone

                        };
                        return Ok(userDTO);
                    }
                }
                else if (userAccount.AccountTypeId == 2)
                {

                    Educator userEducator = await _educatorRepository.GetByUserAccountId(userAccount.Id);

                    if (userEducator != null)
                    {
                        if (userAccount.Password != password)
                        {
                            return BadRequest();
                        }
                        UserDTO userDTO = new UserDTO
                        {
                            FirstName = userEducator.FirstName,
                            LastName = userEducator.LastName,
                            UserId = userEducator.Id,
                            Username = userAccount.Username,
                            Password = userAccount.Password,
                            AvatarUrl = userAccount.AvatarUrl,
                            AccountTypeId = userAccount.AccountTypeId,
                            AccountType = userAccount.AccountType.Type,
                            UserAccountId = userAccount.Id,
                            Phone = userEducator.Phone,
                            Email = userEducator.Email
                        };
                        return Ok(userDTO);
                    }

                }
                else if (userAccount.AccountTypeId == 3)
                {
                    Student userStudent = await _studentRepository.GetByUserAccountId(userAccount.Id);

                    if (userStudent != null)
                    {
                        if (userAccount.Password != password)
                        {
                            return BadRequest();
                        }
                        UserDTO userDTO = new UserDTO
                        {
                            FirstName = userStudent.FirstName,
                            LastName = userStudent.LastName,
                            UserId = userStudent.Id,
                            Username = userAccount.Username,
                            Password = userAccount.Password,
                            AvatarUrl = userAccount.AvatarUrl,
                            AccountTypeId = userAccount.AccountTypeId,
                            AccountType = userAccount.AccountType.Type,
                            UserAccountId = userAccount.Id,
                            Email = userStudent.Email,
                            Phone = userStudent.Phone
                        };
                        return Ok(userDTO);
                    }
                }
                else
                {
                    return NotFound();
                }
            }
           
                return NotFound();

         


        }

        [HttpPut]
        [Route("api/userAccount")]
        public async Task<ActionResult> PutUserAccount(UserDTO user)
        {
            UserAccount userAccount = await _userAccountRepository.GetByUsername(user.Username);
            if (userAccount != null)
            {
                if (userAccount.AccountTypeId == 1)
                {
                    Administrator userAdmin = await _administratorRepository.GetByUserAccountId(userAccount.Id);

                    if (userAdmin != null)
                    {
                        userAccount.Password = user.Password;
                        userAccount.AvatarUrl = user.AvatarUrl;
                        userAdmin.FirstName = user.FirstName;
                        userAdmin.LastName = user.LastName;
                        userAdmin.Email = user.Email;
                        userAdmin.Phone = user.Phone;

                        _userAccountRepository.UpdateUserAccount(userAccount);
                        _administratorRepository.UpdateAdmin(userAdmin);

                        return NoContent();

                    }
                }
                else if (userAccount.AccountTypeId == 2)
                {

                    Educator userEducator = await _educatorRepository.GetByUserAccountId(userAccount.Id);

                    if (userEducator != null)
                    {
                        userAccount.Password = user.Password;
                        userAccount.AvatarUrl = user.AvatarUrl;
                        userEducator.FirstName = user.FirstName;
                        userEducator.LastName = user.LastName;
                        userEducator.Email = user.Email;
                        userEducator.Phone = user.Phone;

                        _userAccountRepository.UpdateUserAccount(userAccount);
                        _educatorRepository.UpdateEducator(userEducator);

                        return NoContent();
                    }

                }
                else if (userAccount.AccountTypeId == 3)
                {
                    Student userStudent = await _studentRepository.GetByUserAccountId(userAccount.Id);

                    if (userStudent != null)
                    {
                        userAccount.Password = user.Password;
                        userAccount.AvatarUrl = user.AvatarUrl;
                        userStudent.FirstName = user.FirstName;
                        userStudent.LastName = user.LastName;
                        userStudent.Email = user.Email;
                        userStudent.Phone = user.Phone;

                        _userAccountRepository.UpdateUserAccount(userAccount);
                        _studentRepository.UpdateStudent(userStudent);

                        return NoContent();
                    }
                }
                else
                {
                    return NotFound();
                }
            }



            return NotFound();
        }


    }
}
