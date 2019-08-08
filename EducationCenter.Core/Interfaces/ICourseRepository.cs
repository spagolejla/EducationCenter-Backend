using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EducationCenter.Core.Interfaces
{
    public interface ICourseRepository: IRepository<Course>
    {
        Task<IEnumerable<Course>> GetAllCourses();
        Task<IEnumerable<Course>> GetActiveCoursesByEducatorId(int id);
        Task<IEnumerable<Course>> GetActiveCoursesByStudentId(int id);


        Task<IEnumerable<Course>> GetByEducatorId(int id);
        Task<IEnumerable<Course>> GetByStudentId(int id);
        Task<IEnumerable<Course>> GetCoursesWithoutCompetition(int id);

        Task<IEnumerable<CourseRate>> GetAllCourseRates(int id);
        Task<IEnumerable<CourseClass>> GetAllCourseClasses(int id);
        Task<List<StudentCourse>> GetStudentCoursesByCourseid(int id);



        Task<Course> GetById(int id);
        Task<int> AddCourse(Course course);
        void UpdateCourse(Course course);

        Task<int> AddStudents (List<StudentCourse> sc);
        Task<int> AddClass(CourseClass cc);
        Task<int> AddCourseRate(CourseRate rate);

        double GetStudentAttendance(int courseId, int studentId);




    }
}
