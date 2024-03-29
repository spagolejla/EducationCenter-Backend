﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class CompetitionDTO
    {
        public int Id { get; set; }
        public string CourseName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime CourseStartDate { get; set; }
        public double Price { get; set; }
        public string DaysOfWeek { get; set; }
        public string CourseStartTime { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Active { get; set; }
        public int MaxCandidatesNumber { get; set; }
        public int CurrentCandidatesNumber { get; set; }
        public IEnumerable<CompetitionApplicationDTO> Applications { get; set; } = new List<CompetitionApplicationDTO>();
        public EducatorDTO Educator { get; set; }
        public int CourseId { get; set; }
        public int LecturesNumber { get; set; }


    }
}
