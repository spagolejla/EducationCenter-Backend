﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class NotificationDTO
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string User { get; set; }
        public int UserId { get; set; }
        public int? AdministratorId { get; set; }
        public int? EducatorId { get; set; }

        public DateTime Date { get; set; }
        public string AvatarUrl { get; set; }
    }
}
