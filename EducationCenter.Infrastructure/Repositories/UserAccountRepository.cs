using EducationCenter.Core.Entities;
using EducationCenter.Core.Interfaces;
using EducationCenter.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EducationCenter.Infrastructure.Repositories
{
    public class UserAccountRepository : IUserAccountRepository
    {
        private readonly MyContext _context;

        public UserAccountRepository(MyContext context)
        {
            _context = context;
        }



        public async Task<int> AddUserAccount(UserAccount uc)
        {
            var u = _context.UserAccounts.Add(uc);

            _context.SaveChanges();

            return uc.Id;
        }
    }
}
