using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class CompetitionInsertDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int MaxCandidates { get; set; }
        public DateTime EndDate { get; set; }
        public int CourseId { get; set; }
        public bool Active { get; set; }
    }
}
