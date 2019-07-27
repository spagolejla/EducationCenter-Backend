using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class CourseClassDTO
    {
        public int Id { get; set; }
        public int CourseId { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public int Number { get; set; }
    }
}
