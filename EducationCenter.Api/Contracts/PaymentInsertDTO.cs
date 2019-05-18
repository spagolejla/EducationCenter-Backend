using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class PaymentInsertDTO
    {
        
        public int StudentId { get; set; }

   
        public int CourseId { get; set; }

        public double Amount { get; set; }

        public DateTime Date { get; set; }
    }
}
