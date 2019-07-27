using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class StudentCourseAttendanceDTO
    {
        public int StudentId { get; set; }
        public int CourseId { get; set; }

        public string  Student { get; set; }
        public string AvatarUrl { get; set; }
        public double AttendanceAvg { get; set; }
    }
}
