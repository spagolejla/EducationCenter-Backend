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
        private readonly IPaymentRepository _paymentRepository;

        public StudentController(IStudentRepository studentRepository, IUserAccountRepository userAccountRepository, IPaymentRepository paymentRepository)
        {
            _studentRepository = studentRepository;
            _userAccountRepository = userAccountRepository;
            _paymentRepository = paymentRepository;
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
            StudentDTO studentDTO = studentRepo.ToDTO();


            IEnumerable<Payment> payments = await _paymentRepository.GetPaymentsByStudentId(studentDTO.ID);
            studentDTO.Payments = payments.ToDTOList();

            return Ok(studentDTO);

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

        [HttpPut]
        [Route("api/student")]
        public async Task<ActionResult> PutStudentDescription(StudentDTO std)
        {
            var _std = await _studentRepository.GetById(std.ID);
            
            if (_std == null)
            {
                return NotFound();
            }

            _std.Description = std.Description;
            _studentRepository.UpdateStudent(_std);
            
            return NoContent();
        }
    }
}
