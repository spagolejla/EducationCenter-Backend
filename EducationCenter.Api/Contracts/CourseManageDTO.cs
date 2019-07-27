using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class CourseManageDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int MaxNumberOfClasses { get; set; }
        public int CurrentNumberOfClasses { get; set; }
        public IEnumerable<CourseClassDTO> Classes { get; set; } = new List<CourseClassDTO>();
        public IEnumerable<StudentCourseAttendanceDTO> Students { get; set; } = new List<StudentCourseAttendanceDTO>();
    }
}
