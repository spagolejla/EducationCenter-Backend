using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class CourseClassInsertDTO
    {
        public string Description { get; set; }
        public int CourseId { get; set; }
        public int[] StudentIds { get; set; }

    }
}
