using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class StudentApplicationInsert
    {
        public int StudentId { get; set; }
        public string CourseName { get; set; }
        public int CourseId { get; set; }
        public int CompetitionId { get; set; }
   
    }
}
