﻿using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EducationCenter.Core.Interfaces
{
    public interface IEducatorRepository: IRepository<Educator>
    {
        Task<IEnumerable<Educator>> GetAllEducators();
        Task<IEnumerable<EducatorRate>> GetAllEducatorRates(int id);

        Task<Educator> GetById(int id);
        Task<Educator> GetByCourseId(int id);

        Task<Educator> GetByUserAccountId(int id);

        Task<int> AddEducator(Educator educator);

        Task<int> AddEducatorRate(EducatorRate rate);

        void UpdateEducator(Educator educator);

    }
}
