using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EducationCenter.Api.Contracts;
using EducationCenter.Core.Entities;
using EducationCenter.Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EducationCenter.Api.Controllers
{


    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentRepository _studentRepository;
        private readonly IUserAccountRepository _userAccountRepository;

        public StudentController(IStudentRepository studentRepository, IUserAccountRepository userAccountRepository)
        {
            _studentRepository = studentRepository;
            _userAccountRepository = userAccountRepository;
        }

        [Route("api/students")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentDTO>>> GetAllStudents()
        {
            IEnumerable<Student> studentRepo = await _studentRepository.GetAllStudents();
            return Ok(studentRepo.ToDTOList());

        }

        [Route("api/student/{id}")]
        [HttpGet]
        public async Task<ActionResult<StudentDTO>> GetById(int id)
        {
            Student studentRepo = await _studentRepository.GetById(id);
            return Ok(studentRepo.ToDTO());

        }

        [HttpPost]
        [Route("api/student")]
        public async Task<ActionResult> PostStudent(StudentInsertDTO student)
        {

            UserAccount newAccount = new UserAccount(student.Username, student.Password, 3, student.AvatarUrl);

            int newAccountId = await _userAccountRepository.AddUserAccount(newAccount);
            if (newAccountId != 0)
            {
                Student newStudent = new Student()
                {
                    UserAccountId = newAccountId,
                    FirstName = student.FirstName,
                    LastName = student.LastName,
                    BirthDate = student.Birthdate,
                    Description = student.Description,
                    Email = student.Email,
                    Phone = student.Phone,
                    Points = 0

                };


                var edcId = await _studentRepository.AddStudent(newStudent);
                return Ok();
            }

            return BadRequest();
        }

    }
}
