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
    public class EducatorRepository: IEducatorRepository
    {
        private readonly MyContext _context;

        public EducatorRepository(MyContext context)
        {
            _context = context;
        }

        public async Task<int> AddEducator(Educator educator)
        {
            var e = _context.Educators.Add(educator);

            _context.SaveChanges();

            return educator.Id;
        }

        public async Task<int> AddEducatorRate(EducatorRate rate)
        {
            var c = _context.EducatorRates.AddAsync(rate);
            _context.SaveChanges();

            return rate.Id;
        }

        public async Task<IEnumerable<EducatorRate>> GetAllEducatorRates(int id)
        {
            return await _context.EducatorRates.Where(e => e.EducatorId == id).Include(edc => edc.Educator).Include(std => std.Student).ToListAsync();
        }

        public async Task<IEnumerable<Educator>> GetAllEducators()
        {
            return await _context.Educators.Include(cf=>cf.CourseField).Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).ToListAsync();

        }

        public async Task<Educator> GetByCourseId(int id)
        {
            var EducatorId = _context.Courses.Where(x => x.Id == id).FirstOrDefault().EducatorId;
            return await _context.Educators.Include(cf => cf.CourseField).Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).Where(x => x.Id == EducatorId).FirstOrDefaultAsync();

        }

        public async Task<Educator> GetById(int id)
        {
            return await _context.Educators.Include(cf => cf.CourseField).Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<Educator> GetByUserAccountId(int id)
        {
            return await _context.Educators.Include(cf => cf.CourseField).Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).Where(x => x.UserAccountId == id).FirstOrDefaultAsync();

        }

        public void UpdateEducator(Educator educator)
        {
            _context.SaveChanges();
        }
    }
    
}
