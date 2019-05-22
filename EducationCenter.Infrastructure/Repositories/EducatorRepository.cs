﻿using EducationCenter.Core.Entities;
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

        public async Task<IEnumerable<Educator>> GetAllEducators()
        {
            return await _context.Educators.Include(cf=>cf.CourseField).Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).ToListAsync();

        }

        public async Task<Educator> GetById(int id)
        {
            return await _context.Educators.Include(cf => cf.CourseField).Include(ua => ua.UserAccount).ThenInclude(at => at.AccountType).Where(x => x.Id == id).FirstOrDefaultAsync();
        }

    }
    
}
