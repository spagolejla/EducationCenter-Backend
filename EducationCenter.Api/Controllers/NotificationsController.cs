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

    }
}