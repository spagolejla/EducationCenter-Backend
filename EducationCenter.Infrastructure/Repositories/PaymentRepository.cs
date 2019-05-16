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
    public class PaymentRepository : IPaymentRepository
    {
        private readonly MyContext _context;

        public PaymentRepository(MyContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Payment>> GetAllPayments()
        {
            return await _context.Payments.Include(s => s.Student).Include(c => c.Course).ToListAsync();
        }
    }
}
