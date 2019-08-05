using EducationCenter.Core.Entities;
using EducationCenter.Core.Interfaces;
using EducationCenter.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EducationCenter.Infrastructure.Repositories
{
    public class StudentRepository: IStudentRepository
    {
        private readonly MyContext _context;

        public StudentRepository(MyContext context)
        {
            _context = context;
        }

        public async Task<int> AddStudent(Student student)
        {
            var s = _context.Students.Add(student);

            _context.SaveChanges();

            return student.Id;
        }

        public async Task<int> AddStudentAttendance(List<StudentAttendance> sas)
        {
            _context.StudentAttendances.AddRangeAsync(sas);
            _context.SaveChanges();
            return 1;
        }

        public async Task<IEnumerable<Student>> GetAllStudents()
        {
           return await _context.Students.Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).ToListAsync();
        }

        public async Task<List<Student>> GetByCourseId(int id)
        {
            List<StudentCourse> stds = await  _context.StudentCourses.Where(x => x.CourseId == id).Include(s=>s.Student).ThenInclude(ua=>ua.UserAccount).ThenInclude(at => at.AccountType).ToListAsync();
            List<Student> students = new List<Student>();
            foreach (var item in stds)
            {
                students.Add(item.Student);
            }

            return students;
        }

        public Task<Student> GetById(int id)
        {
            return _context.Students.Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public Task<Student> GetByUserAccountId(int id)
        {
            return _context.Students.Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).Where(x => x.UserAccountId == id).FirstOrDefaultAsync();

        }

        public void UpdateStudent(Student student)
        {
            _context.SaveChanges();
        }
       
    }
}
