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

        public async Task<Course> GetById(int id)
        {
            return await _context.Courses.Include(a => a.Administrator).Include(e => e.Educator).Include(cf => cf.CourseField).Where(x => x.Id == id).FirstOrDefaultAsync();
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

        public async  Task<int> AddCourse(Course course)
        {
            var c = _context.Courses.AddAsync(course);
            _context.SaveChanges();

            return course.Id;
        }

        public void UpdateCourse(Course course)
        {
            _context.SaveChanges();

        }

        public async Task<IEnumerable<CourseRate>> GetAllCourseRates(int id)
        {
            return await _context.CourseRates.Where(e => e.CourseId == id).Include(c => c.Course).Include(std => std.Student).ToListAsync();

        }
    }
}
