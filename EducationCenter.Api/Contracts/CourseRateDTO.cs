using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class CourseRateDTO
    {
        public int Id { get; set; }
        public string Course { get; set; }
        public string Student { get; set; }
        public double Rate { get; set; }
        public string Comment { get; set; }
    }
}
