﻿using System;
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

        public StudentController(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        [Route("api/student")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentDTO>>> GetAllStudents()
        {
            IEnumerable<Student> studentRepo = await _studentRepository.GetAllStudents();
            return Ok(studentRepo.ToDTOList());

        }

        [Route("api/student/{id}")]
        [HttpGet]
        public async  Task<ActionResult<StudentDTO>> GetById(int id)
        {
            Student studentRepo =  await _studentRepository.GetById(id);
            return Ok(studentRepo.ToDTO());

        }

    }
}
