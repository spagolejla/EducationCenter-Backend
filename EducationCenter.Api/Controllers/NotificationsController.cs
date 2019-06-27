using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EducationCenter.Api.Contracts;
using EducationCenter.Core.Entities;
using EducationCenter.Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EducationCenter.Api.Controllers
{
    [ApiController]
    public class NotificationsController : ControllerBase
    {
        private readonly INotificationRepository _notificationRepository;

        public NotificationsController(INotificationRepository notificationRepository)
        {
            _notificationRepository = notificationRepository;
        }

        [HttpGet]
        [Route("api/notifications")]
        public async Task<ActionResult<IEnumerable<NotificationDTO>>> GetAllNotifications()
        {
            IEnumerable<Notification> notifications = await _notificationRepository.GetAllNotifications();

            return Ok(notifications.ToDTOList());
        }


        [HttpGet]
        [Route("api/notification/{id}")]
        public async Task<ActionResult<Notification>> GetNotificationById(int id)
        {
            Notification notification = await _notificationRepository.GetNotificationById(id);

            if (notification == null)
            {
                return NotFound();
            }

            return Ok(notification);
        }

        [HttpPost]
        [Route("api/notification")]
        public async Task<ActionResult> PostNotification(NotificationInsertDTO notif)
        {
            Notification newNotif = new Notification()
            {
                Title = notif.Title,
                Text = notif.Text,
                Date = DateTime.Now
            };

            if (notif.IsAdmin)
            {
                newNotif.AdministratorId = notif.CreatorId;
            }
            else
            {
                newNotif.EducatorId = notif.CreatorId;
            }

            var notifId = await _notificationRepository.AddNotification(newNotif);

            return Ok();
        }

        [HttpPut]
        [Route("api/notification")]
        public async Task<ActionResult> PutPayment(Notification notification)
        {
            var _notification = await _notificationRepository.GetNotificationById(notification.Id);

            if (_notification == null)
            {
                return NotFound();
            }

            _notification.Title = notification.Title;
            _notification.Text = notification.Text;
           

            _notificationRepository.UpdateNotification(notification);

            return NoContent();
        }

    }
}