using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class CompetitionApplicationDTO
    {
        public int Id { get; set; }
        public string Student { get; set; }
        public int StudentId { get; set; }

        public string CourseName { get; set; }
        public int CourseId  { get; set; }
        public int CompetitionId { get; set; }

        public int Points { get; set; }

        public DateTime Date { get; set; }
    }
}
