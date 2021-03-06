﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class CourseInsertDTO
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int NumberOfLectures { get; set; }
        public double Price { get; set; }
        public DateTime StartDate { get; set; }
        public string ClassStartTime { get; set; }
        public string DaysOfWeek { get; set; }
        public int AdministratorId { get; set; }
        public int EducatorId { get; set; }
        public int CourseFieldId { get; set; }
    }
}
