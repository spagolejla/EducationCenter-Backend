using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class EducatorDTO
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Title { get; set; }
        public string CourseField { get; set; }
        public string Username { get; set; }
        public string AccountType { get; set; }
        public bool Active { get; set; }
        public string AvatarUrl { get; set; }

    }
}
