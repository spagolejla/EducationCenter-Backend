﻿using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EducationCenter.Core.Interfaces
{
    public interface ICompetitionRepository : IRepository<Competition>
    {
        Task<IEnumerable<Competition>> GetAllCompetitions();
        Task<IEnumerable<Competition>> GetAllActiveCompetitions();

        Task<IEnumerable<Competition>> GetByEducatorId(int id);
        Task<IEnumerable<Competition>> GetActiveCompetitions(int id);

        Task<IEnumerable<Competition>> GetByStudentId(int id);
        Task<IEnumerable<CompetitionApplication>> GetAllApplications(int id);


        Task<Competition> GetById(int id);
        Task<int> AddCompetition(Competition competition);
        Task<int> AddCompetitionApplication(CompetitionApplication app);
        void UpdateCompetition(Competition competition);
        void DeactivateCompetition(Competition competition);

    }
}
