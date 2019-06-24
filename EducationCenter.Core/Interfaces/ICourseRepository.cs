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
        Task<IEnumerable<Course>> GetByEducatorId(int id);
        Task<IEnumerable<Course>> GetByStudentId(int id);
        Task<IEnumerable<CourseRate>> GetAllCourseRates(int id);

        Task<Course> GetById(int id);
        Task<int> AddCourse(Course course);
        void UpdateCourse(Course course);

    }
}
