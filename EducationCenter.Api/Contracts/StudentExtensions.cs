using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public static class StudentExtensions
    {
        public static StudentDTO ToDTO (this Student student)
        {
            return new StudentDTO()
            {
                ID = student.Id,
                FirstName = student.FirstName,
                LastName = student.LastName,
                Email = student.Email,
                BirthDate = student.BirthDate,
                Phone = student.Phone,
                Description = student.Description,
                Username = student.UserAccount.Username,
                Active = student.UserAccount.Active,
                AccountType = student.UserAccount.AccountType.Type,
                AvatarUrl = student.UserAccount.AvatarUrl
            };
        }

        public static IEnumerable<StudentDTO> ToDTOList(this IEnumerable<Student> students)
        {
            var studentsDTO = new List<StudentDTO>();
            foreach (var std in students)
            {
                studentsDTO.Add(std.ToDTO());
            }
            return studentsDTO;
        }

       

    }
}
