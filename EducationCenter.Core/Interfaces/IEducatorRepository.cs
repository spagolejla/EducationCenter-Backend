using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EducationCenter.Core.Interfaces
{
    public interface IEducatorRepository: IRepository<Educator>
    {
        Task<IEnumerable<Educator>> GetAllEducators();
        Task<Educator> GetById(int id);
    }
}
