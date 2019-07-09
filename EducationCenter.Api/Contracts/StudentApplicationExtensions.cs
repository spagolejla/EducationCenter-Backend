using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public static class StudentApplicationExtensions
    {
        public static CompetitionApplicationDTO ToDTO(this CompetitionApplication application)
        {
            return new CompetitionApplicationDTO()
            {
                Id = application.Id,
                CompetitionId = application.CompetitionId,
                CourseId = application.Competition.CourseId,
                CourseName = application.Competition.Course.Name,
                Date = application.Date,
                Student = application.Student.FirstName + " " + application.Student.LastName,
                StudentId = application.StudentId,
                Points = application.Student.Points

            };
        }

        public static IEnumerable<CompetitionApplicationDTO> ToDTOList(this IEnumerable<CompetitionApplication> applications)
        {
            var applicationsDTO = new List<CompetitionApplicationDTO>();
            foreach (var item in applications)
            {
                applicationsDTO.Add(item.ToDTO());
            }
            return applicationsDTO;
        }
    }
}
