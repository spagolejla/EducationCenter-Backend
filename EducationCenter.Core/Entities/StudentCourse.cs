﻿using EducationCenter.Core.SharedKernel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EducationCenter.Core.Entities
{
    public class StudentCourse : BaseEntity
    {
        public Student Student { get; set; }
        [ForeignKey(nameof(Student))]
        public int StudentId { get; set; }

        public Course Course { get; set; }
        [ForeignKey(nameof(Course))]
        public int CourseId { get; set; }

        public int Mark { get; set; }
    }
}
