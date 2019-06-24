using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EducationCenter.Core.Interfaces
{
    public interface IAdministratorRepository: IRepository<Administrator>
    {
        Task<IEnumerable<Administrator>> GetAllAdministrators();
        Task<Administrator> GetById(int id);
        Task<int> AddAdmin(Administrator admin);
        void UpdateAdmin(Administrator admin);

    }
}
