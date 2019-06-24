using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class EducatorRatesDTO
    {
        public int Id { get; set; }
        public string Educator { get; set; }
        public string Student { get; set; }
        public double Rate { get; set; }
        public string Comment { get; set; }
    }
}
