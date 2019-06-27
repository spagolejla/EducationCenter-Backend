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
    public class AdministratorRepository: IAdministratorRepository
    {
        private readonly MyContext _context;

        public AdministratorRepository(MyContext context)
        {
            _context = context;
        }

        public async Task<int> AddAdmin(Administrator admin)
        {
            var a = _context.Administrators.Add(admin);

            _context.SaveChanges();

            return admin.Id;
        }

        public async Task<IEnumerable<Administrator>> GetAllAdministrators()
        {
           return await _context.Administrators.Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).ToListAsync();
        }

        public async  Task<Administrator> GetById(int id)
        {
            return await _context.Administrators.Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<Administrator> GetByUserAccountId(int id)
        {
            return await _context.Administrators.Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).Where(x => x.UserAccountId == id).FirstOrDefaultAsync();

        }

        public void UpdateAdmin(Administrator admin)
        {
            _context.SaveChanges();
        }
    }
}
