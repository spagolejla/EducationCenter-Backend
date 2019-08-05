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
        Task<List<Student>> GetByCourseId( int id);

        Task<Student> GetById(int id);
        Task<Student> GetByUserAccountId(int id);
        Task<int> AddStudentAttendance(List<StudentAttendance> sas);
        Task<int> AddStudent(Student student);
        void UpdateStudent(Student student);




    }
}
