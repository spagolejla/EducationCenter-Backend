using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public static class PaymentExtensions
    {
        public static PaymentDTO ToDTO(this Payment payment)
        {
            return new PaymentDTO()
            {
                ID = payment.Id,
                Student = payment.Student.FirstName + " " + payment.Student.LastName,
                Course = payment.Course.Name,
                Amount = payment.Amount,
                Date = payment.Date
            };

        }

        public static IEnumerable<PaymentDTO> ToDTOList(this IEnumerable<Payment> payments )
        {
            var paymentsDTO = new List<PaymentDTO>();
            foreach (var pay in payments)
            {
                paymentsDTO.Add(pay.ToDTO());
            }
            return paymentsDTO;
        }

        public static Payment ToEntity(this PaymentInsertDTO pidto)
        {
            return new Payment(pidto.StudentId, pidto.CourseId, pidto.Amount, pidto.Date);
        }

    }
}
