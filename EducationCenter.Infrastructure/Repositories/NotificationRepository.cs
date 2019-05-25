using EducationCenter.Core.Entities;
using EducationCenter.Core.Interfaces;
using EducationCenter.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EducationCenter.Infrastructure.Repositories
{
    public class NotificationRepository : INotificationRepository
    {
        private readonly MyContext _context;

        public NotificationRepository(MyContext context)
        {
            _context = context;
        }



        public async Task<int> AddNotification(Notification notification)
        {
            var ntf = _context.Notifications.AddAsync(notification);
            _context.SaveChanges();

            return ntf.Id;
        }

        public async Task<IEnumerable<Notification>> GetAllNotifications()
        {
            return await _context.Notifications.Include(a => a.Administrator).Include(e => e.Educator).OrderByDescending(d=>d.Date).ToListAsync();

        }

        public async Task<Notification> GetNotificationById(int id)
        {
            return await _context.Notifications.Include(a => a.Administrator).Include(e => e.Educator).Where(x=>x.Id==id).FirstOrDefaultAsync();

        }

        public async void UpdateNotification(Notification notification)
        {
            _context.SaveChanges();
        }
    }
}
