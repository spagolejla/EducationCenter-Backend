using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public static class EducatorRatesExtensions
    {

        public static EducatorRatesDTO ToDTO(this EducatorRate rate)
        {
            return new EducatorRatesDTO()
            {
                Id = rate.Id,
                Student = rate.Student.FirstName + " " +rate.Student.LastName,
                Educator = rate.Educator.FirstName + " " + rate.Educator.LastName,
                Rate = rate.Rate,
                Comment = rate.Comment
            };
        }

        public static List<EducatorRatesDTO> ToDTOList(this IEnumerable<EducatorRate> rates)
        {
            var ratesDTO = new List<EducatorRatesDTO>();
            foreach (var rts in rates)
            {
                ratesDTO.Add(rts.ToDTO());
            }
            return ratesDTO;
        }
    }
}
