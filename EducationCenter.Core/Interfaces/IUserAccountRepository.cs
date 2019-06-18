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
        bool UsernameExist(string username);
    }
}
