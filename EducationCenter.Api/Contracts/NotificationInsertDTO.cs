using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class NotificationInsertDTO
    {
        public string Title { get; set; }
        public string Text { get; set; }
  
        public int CreatorId { get; set; }
        public bool IsAdmin { get; set; }
    }
}
