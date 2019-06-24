using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public static class CourseRateExtensions
    {
        public static CourseRateDTO ToDTO(this CourseRate rate)
        {
            return new CourseRateDTO()
            {
                Id = rate.Id,
                Student = rate.Student.FirstName + " " + rate.Student.LastName,
                Course = rate.Course.Name,
                Rate = rate.Rate,
                Comment = rate.Comment
            };
        }

        public static List<CourseRateDTO> ToDTOList(this IEnumerable<CourseRate> rates)
        {
            var ratesDTO = new List<CourseRateDTO>();
            foreach (var rts in rates)
            {
                ratesDTO.Add(rts.ToDTO());
            }
            return ratesDTO;
        }
    }
}
