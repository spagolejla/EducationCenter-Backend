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
        private readonly IAdministratorRepository _administratorRepository;
        private readonly IEducatorRepository _educatorRepository;


        public NotificationsController(INotificationRepository notificationRepository, IAdministratorRepository administratorRepository, IEducatorRepository educatorRepository)
        {
            _notificationRepository = notificationRepository;
            _educatorRepository = educatorRepository;
            _administratorRepository = administratorRepository;

        }

        [HttpGet]
        [Route("api/notifications")]
        public async Task<ActionResult<IEnumerable<NotificationDTO>>> GetAllNotifications()
        {
            IEnumerable<Notification> notifications = await _notificationRepository.GetAllNotifications();
            IEnumerable<NotificationDTO> notificationDTOs = notifications.ToDTOList();
            foreach (var item in notificationDTOs)
            {
                if (item.AdministratorId !=null)
                {
                    int admId = Convert.ToInt32(item.AdministratorId);
                    Administrator adm = await _administratorRepository.GetById(admId);
                    if (adm != null)
                    {
                        AdministratorDTO admDTO = adm.ToDTO();
                        item.AvatarUrl = admDTO.AvatarUrl;
                    }
                }
              
                else
                {
                    int edcId = Convert.ToInt32(item.EducatorId);

                    Educator edc = await _educatorRepository.GetById(edcId);
                    if (edc!=null)
                    {
                        EducatorDTO educatorDTO = edc.ToDTO();
                        item.AvatarUrl = educatorDTO.AvatarUrl;
                    }
                }




            }

            return Ok(notificationDTOs);
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