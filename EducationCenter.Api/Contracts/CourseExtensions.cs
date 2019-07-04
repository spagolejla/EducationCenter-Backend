using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public static class CourseExtensions
    {

        public static CourseDTO ToDTO(this Course course)
        {
            return new CourseDTO()
            {
                ID = course.Id,
                Name = course.Name,
                Administrator = course.Administrator.FirstName + " " + course.Administrator.LastName,
                Educator = course.Educator.FirstName + " " + course.Educator.LastName,
                DaysOfWeek = course.DaysOfWeek,
                ClassStartTime = course.ClassStartTime,
                CourseField = course.CourseField.Field,
                Description = course.Description,
                NumberOfLectures = course.NumberOfLectures,
                Price = course.Price,
                StartDate = course.StartDate,
                Active =  course.Active

            };
        }

        public static IEnumerable<CourseDTO> ToDTOList(this IEnumerable<Course> courses)
        {
            var coursesDTO = new List<CourseDTO>();
            foreach (var c in courses)
            {
                coursesDTO.Add(c.ToDTO());
            }
            return coursesDTO;
        }

        public static Course ToEntity(this CourseInsertDTO cidto)
        {
            return new Course(cidto.Name, cidto.Description, cidto.NumberOfLectures, cidto.Price, cidto.StartDate, cidto.DaysOfWeek, cidto.AdministratorId, cidto.EducatorId, cidto.CourseFieldId, cidto.ClassStartTime);
        }

    }
}
