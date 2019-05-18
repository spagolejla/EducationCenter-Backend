using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class CourseDTO
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int NumberOfLectures { get; set; }
        public DateTime StartDate { get; set; }
        public string ClassStartTime { get; set; }
        public string[] DaysOfWeek { get; set; }
        public string Administrator { get; set; }
        public string Educator { get; set; }
        public string CourseField { get; set; }
        public double Price { get; set; }

    }
}
