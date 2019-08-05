using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class UserDTO
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public string AvatarUrl { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public int AccountTypeId { get; set; }
        public string AccountType { get; set; }

        public int UserAccountId { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }



    }
}
