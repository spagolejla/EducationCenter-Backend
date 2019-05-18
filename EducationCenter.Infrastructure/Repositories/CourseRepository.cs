using EducationCenter.Core.Entities;
using EducationCenter.Core.Interfaces;
using EducationCenter.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EducationCenter.Infrastructure.Repositories
{
    public class CourseRepository : ICourseRepository
    {
        private readonly MyContext _context;

        public CourseRepository(MyContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Course>> GetAllCourses()
        {
            return await _context.Courses.Include(a => a.Administrator).Include(e => e.Educator).Include(cf => cf.CourseField).ToListAsync();
        }
    }
}
