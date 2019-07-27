using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public static class CourseClassExtensions
    {
        public static CourseClassDTO ToDTO(this CourseClass cl)
        {
            return new CourseClassDTO()
            {
                Id = cl.Id,
                CourseId = cl.CourseId,
                Date = cl.Date,
                Description = cl.Description
            };
        }

        public static List<CourseClassDTO> ToDTOList(this IEnumerable<CourseClass> classes)
        {
            var classesDTO = new List<CourseClassDTO>();
            foreach (var item in classes)
            {
                classesDTO.Add(item.ToDTO());
            }
            return classesDTO;
        }
    }
}
