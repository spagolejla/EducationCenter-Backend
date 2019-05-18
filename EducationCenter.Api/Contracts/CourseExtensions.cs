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
                StartDate = course.StartDate

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

    }
}
