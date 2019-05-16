using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class PaymentDTO
    {
        public int ID { get; set; }
        public string Student { get; set; }
        public string Course { get; set; }
        public double Amount { get; set; }
        public DateTime Date { get; set; }

    }
}
