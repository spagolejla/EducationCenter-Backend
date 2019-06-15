using EducationCenter.Core.SharedKernel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EducationCenter.Core.Entities
{
    public class Course: BaseEntity
    {
        public Course(string name, string description, int numberOfLectures, double price, DateTime startDate, string daysOfWeek, int administratorId, int educatorId, int courseFieldId, string classStartTime)
        {
            Name = name;
            Description = description;
            NumberOfLectures = numberOfLectures;
            Price = price;
            StartDate = startDate;
            DaysOfWeek = daysOfWeek;
            AdministratorId = administratorId;
            EducatorId = educatorId;
            CourseFieldId = courseFieldId;
            ClassStartTime = classStartTime;
        }

        public string Name { get; set; }
        public string Description { get; set; }
        public int NumberOfLectures { get; set; }
        public DateTime StartDate { get; set; }
        public string ClassStartTime { get; set; }


        public string DaysOfWeek { get; set; }

        public Administrator Administrator { get; set; }
        [ForeignKey(nameof(Administrator))]
        public int AdministratorId { get; set; }

        public Educator Educator { get; set; }
        [ForeignKey(nameof(Educator))]
        public int EducatorId { get; set; }

        public CourseField CourseField { get; set; }
        [ForeignKey(nameof(CourseField))]
        public int CourseFieldId { get; set; }
        

        public double Price { get; set; }


       

      
    }
}
