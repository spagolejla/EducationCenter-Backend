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

        public async Task<int> AddStudents(List<StudentCourse> sc)
        {
            _context.StudentCourses.AddRangeAsync(sc);
            _context.SaveChanges();
            return 1; // ?????
        }

        public async Task<IEnumerable<Course>> GetActiveCoursesByEducatorId(int id)
        {
            return await _context.Courses.Where(c=>c.Active == true).Where(x=>x.EducatorId == id).Include(a => a.Administrator).Include(e => e.Educator).Include(cf => cf.CourseField).OrderByDescending(d=>d.StartDate).ToListAsync();

        }

        public async Task<IEnumerable<CourseClass>> GetAllCourseClasses(int id)
        {
            return await _context.CourseClasses.Where(x => x.CourseId == id).ToListAsync();
        }

        public async  Task<int> AddClass(CourseClass cc)
        {
            _context.CourseClasses.AddAsync(cc);
            _context.SaveChanges();
            return cc.Id;
        }

        public async Task<List<StudentCourse>> GetStudentCoursesByCourseid(int id)
        {
            return await _context.StudentCourses.Where(x => x.CourseId == id).ToListAsync();
        }

        public double GetStudentAttendance(int courseId, int studentId)
        {
            double attendance;

           double numberOfAttendance =  _context.StudentAttendances.Include(sc => sc.StudentCourse).Where(x => x.StudentCourse.CourseId == courseId).Where(s => s.StudentCourse.StudentId == studentId).Where(pr=> pr.Present == true).Count(p => p.Present);
            double numberOfClasses = _context.Courses.Where(x => x.Id == courseId).FirstOrDefault().NumberOfLectures;

            attendance = Convert.ToDouble(Convert.ToDouble(numberOfAttendance / numberOfClasses )* 100);

            return attendance;

        }

        public async Task<IEnumerable<Course>> GetCoursesWithoutCompetition(int id)
        {
            List<Course> courses = await _context.Courses.Where(x => x.EducatorId == id).Include(a => a.Administrator).Include(e => e.Educator).Include(cf => cf.CourseField).ToListAsync();
            List<Course> filteredCourses = new List<Course>();
            var count = courses.Count();
            for (int i = 0; i < count; i++)
            {
                var competition = _context.Competitions.Where(x => x.CourseId == courses[i].Id).FirstOrDefault();
                if(competition == null)
                {
                    filteredCourses.Add(courses[i]);
                }
            }

            return filteredCourses;

        }

        public async Task<int> AddCourseRate(CourseRate rate)
        {
            var c = _context.CourseRates.AddAsync(rate);
            _context.SaveChanges();

            return rate.Id;
        }

        public async Task<IEnumerable<Course>> GetActiveCoursesByStudentId(int id)
        {
            var STUDENT_COURSES = _context.StudentCourses.Where(up => up.StudentId == id).Where(x=>x.Course.Active == true)
            .Select(c => c.Course)
            .Include(a => a.Administrator).Include(e => e.Educator).Include(cf => cf.CourseField).ToListAsync();

            return await STUDENT_COURSES;
        }
    }
}
