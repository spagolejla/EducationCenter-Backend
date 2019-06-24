using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EducationCenter.Core.Entities;
using EducationCenter.Infrastructure.Data;
using EducationCenter.Core.Interfaces;
using EducationCenter.Api.Contracts;

namespace EducationCenter.Api.Controllers
{

    [ApiController]
    public class PaymentsController : ControllerBase
    {

        private readonly IPaymentRepository _paymentRepository;

        public PaymentsController(IPaymentRepository paymentRepository)
        {
            _paymentRepository = paymentRepository;
        }

        [HttpGet]
        [Route("api/payments")]
        public async Task<ActionResult<IEnumerable<PaymentDTO>>> GetAllPayments()
        {
            IEnumerable<Payment> payments = await _paymentRepository.GetAllPayments();

            return Ok(payments.ToDTOList());
        }

        [HttpGet]
        [Route("api/payments/{id}")]
        public async Task<ActionResult<Payment>> GetPaymentById( int id)
        {
            Payment payment = await _paymentRepository.GetPaymentById(id);

            if (payment == null)
            {
                return NotFound();
            }

            return Ok(payment);
        }

        [HttpPost]
        [Route("api/payment")]
        public async Task<ActionResult> PostPayment(PaymentInsertDTO payment)
        {
            var paymentId = await _paymentRepository.AddPayment(payment.ToEntity());
            return Ok();
        }

        [HttpPut]
        [Route("api/payment")]
        public async Task<ActionResult> PutPayment(Payment payment)
        {
            var _payment = await _paymentRepository.GetPaymentById(payment.Id);

            if (_payment == null)
            {
                return NotFound();
            }

            _payment.StudentId = payment.StudentId;
            _payment.CourseId = payment.CourseId;
            _payment.Amount = payment.Amount;
            _payment.Date = payment.Date;

            _paymentRepository.UpdatePayment(_payment);

            return NoContent();
        }

    }
}
