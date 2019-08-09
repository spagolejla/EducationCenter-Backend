using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EducationCenter.Core.Interfaces
{
    public interface IPaymentRepository: IRepository<Payment>
    {
        Task<int> AddPayment(Payment payment);
        void UpdatePayment(Payment payment);
        Task<IEnumerable<Payment>> GetAllPayments();
        Task<IEnumerable<Payment>> GetPaymentsByStudentId(int id);

        Task<Payment> GetPaymentById(int id);




    }
}
