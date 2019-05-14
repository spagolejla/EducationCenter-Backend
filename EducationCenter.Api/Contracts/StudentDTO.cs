using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class StudentDTO
    {
        public int ID{ get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Description { get; set; }
        public DateTime BirthDate { get; set; }
        public string Username { get; set; }
        public string AccountType { get; set; }
        public bool Active { get; set; }

    }
}
