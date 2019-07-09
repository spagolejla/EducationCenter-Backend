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
    public class CompetitionRepository : ICompetitionRepository
    {
        private readonly MyContext _context;

        public CompetitionRepository(MyContext context)
        {
            _context = context;
        }

        public async Task<int> AddCompetition(Competition competition)
        {
            var c = _context.Competitions.AddAsync(competition);
            _context.SaveChanges();

            return competition.Id;
        }

        public void DeactivateCompetition(Competition competition)
        {
            _context.SaveChanges();
        }

        public async Task<IEnumerable<Competition>> GetActiveCompetitions(int id)
        {
            return await _context.Competitions.Where(x => x.Course.EducatorId == id && x.Active == true).Include(c => c.Course).OrderBy(d=>d.StartDate).ToListAsync();

        }

        public async Task<IEnumerable<CompetitionApplication>> GetAllApplications(int id)
        {
            return await _context.CompetitionApplications.Where(x => x.CompetitionId == id).Include(c => c.Competition).Include(s => s.Student).OrderBy(d=>d.Date).ToListAsync();
        }

        public async Task<IEnumerable<Competition>> GetAllCompetitions()
        {
            return await _context.Competitions.Include(c => c.Course).OrderBy(d => d.StartDate).ToListAsync();

        }

        public async Task<IEnumerable<Competition>> GetByEducatorId(int id)
        {
            return await _context.Competitions.Where(x => x.Course.EducatorId == id).Include(c => c.Course).OrderBy(d => d.StartDate).ToListAsync();

        }

        public async Task<Competition> GetById(int id)
        {
            return await _context.Competitions.Where(x => x.Id == id).Include(c => c.Course).FirstOrDefaultAsync();

        }

        public Task<IEnumerable<Competition>> GetByStudentId(int id)
        {
            throw new NotImplementedException();
        }

        public void UpdateCompetition(Competition competition)
        {
            _context.SaveChanges();
        }
    }
}
