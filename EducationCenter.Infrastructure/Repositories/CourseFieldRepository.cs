using EducationCenter.Core.Entities;
using EducationCenter.Core.Interfaces;
using EducationCenter.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EducationCenter.Infrastructure.Repositories
{
    public class CourseFieldRepository : ICourseFieldRepository
    {
        private readonly MyContext _context;

        public CourseFieldRepository(MyContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<CourseField>> GetAll()
        {
            return await _context.CourseFields.ToListAsync();
        }
    }
}
