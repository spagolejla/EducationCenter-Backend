using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;


namespace EducationCenter.Core.Interfaces
{
    public interface IStudentRepository: IRepository<Student>
    {
        Task<IEnumerable<Student>> GetAllStudents();
        Task<Student> GetById(int id);

    }
}
