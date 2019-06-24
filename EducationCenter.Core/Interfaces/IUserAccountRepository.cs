using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EducationCenter.Core.Interfaces
{
     public interface IUserAccountRepository: IRepository<UserAccount>
    {
        Task<int> AddUserAccount(UserAccount uc);
        void UpdateUserAccount(UserAccount uc);
        bool UsernameExist(string username);
        Task<UserAccount> GetByUsername(string username);
        Task<UserAccount> GetById(int id);


    }
}
