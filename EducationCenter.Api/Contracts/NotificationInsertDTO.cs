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
        public DateTime  Date { get; set; }
        public int? EducatorId { get; set; }
        public int? AdministratorId { get; set; }

    }
}
