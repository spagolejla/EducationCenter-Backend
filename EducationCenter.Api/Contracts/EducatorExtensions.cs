using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public static class EducatorExtensions
    {
        public static EducatorDTO ToDTO(this Educator educator)
        {
            return new EducatorDTO()
            {
                ID = educator.Id,
                FirstName = educator.FirstName,
                LastName = educator.LastName,
                Email = educator.Email,
                CourseField = educator.CourseField.Field,
                Phone = educator.Phone,
                Title = educator.Title,
                Username = educator.UserAccount.Username,
                Active = educator.UserAccount.Active,
                AccountType = educator.UserAccount.AccountType.Type,
                AvatarUrl = educator.UserAccount.AvatarUrl
            };
        }

        public static IEnumerable<EducatorDTO> ToDTOList(this IEnumerable<Educator> educators)
        {
            var educatorsDTO = new List<EducatorDTO>();
            foreach (var item in educators)
            {
                educatorsDTO.Add(item.ToDTO());
            }
            return educatorsDTO;
        }

    }
}
