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

        public async Task<IEnumerable<Student>> GetAllStudents()
        {
           return await _context.Students.Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).ToListAsync();
        }

        public Task<Student> GetById(int id)
        {
            return _context.Students.Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).Where(x => x.Id == id).FirstOrDefaultAsync();
        }
    }
}
