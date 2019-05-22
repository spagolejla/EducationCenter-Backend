using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public static class AdministratorExtensions
    {
        public static AdministratorDTO ToDTO(this Administrator administrator)
        {
            return new AdministratorDTO()
            {
                ID = administrator.Id,
                FirstName = administrator.FirstName,
                LastName = administrator.LastName,
                Email = administrator.Email,
                Phone = administrator.Phone, 
                Username = administrator.UserAccount.Username,
                Active = administrator.UserAccount.Active,
                AccountType = administrator.UserAccount.AccountType.Type,
                AvatarUrl = administrator.UserAccount.AvatarUrl
            };
        }

        public static IEnumerable<AdministratorDTO> ToDTOList(this IEnumerable<Administrator> administrators)
        {
            var administratorsDTO = new List<AdministratorDTO>();
            foreach (var item in administrators)
            {
                administratorsDTO.Add(item.ToDTO());
            }
            return administratorsDTO;
        }

    }
}
