using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public static class NotificationExtensions
    {
        public static NotificationDTO ToDTO(this Notification notification)
        {
            if (notification.Administrator != null)
            {
                return new NotificationDTO()
                {
                    ID = notification.Id,
                    User = notification.Administrator.FirstName + " " + notification.Administrator.LastName,
                    UserId = notification.Administrator.Id,
                    Title = notification.Title,
                    Text = notification.Text,
                    Date = notification.Date
                };
            }
            else
            {
                return new NotificationDTO()
                {
                    ID = notification.Id,
                    User = notification.Educator.FirstName + " " + notification.Educator.LastName,
                    UserId = notification.Educator.Id,
                    Title = notification.Title,
                    Text = notification.Text,
                    Date = notification.Date
                };
            }
           

        }

        public static IEnumerable<NotificationDTO> ToDTOList(this IEnumerable<Notification> notifications)
        {
            var notificationsDTO = new List<NotificationDTO>();
            foreach (var item in notifications)
            {
                notificationsDTO.Add(item.ToDTO());
            }
            return notificationsDTO;
        }


    }
}
