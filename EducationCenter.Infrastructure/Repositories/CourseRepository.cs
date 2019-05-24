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

        public async Task<IEnumerable<Course>> GetByEducatorId(int id)
        {
            return await _context.Courses.Include(a => a.Administrator).Include(e => e.Educator).Include(cf => cf.CourseField).Where(x=>x.EducatorId==id).ToListAsync();
        }

        public async Task<IEnumerable<Course>> GetByStudentId(int id)
        {
            var STUDENT_COURSES = _context.StudentCourses.Where(up => up.StudentId == id)
            .Select(c => c.Course)
            .Include(a => a.Administrator).Include(e => e.Educator).Include(cf => cf.CourseField).ToListAsync();

            return await STUDENT_COURSES;
        }
    }
}
