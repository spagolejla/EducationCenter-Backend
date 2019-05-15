using EducationCenter.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EducationCenter.Infrastructure.Data
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AccountType>().HasData(new AccountType("Administrator") { Id = 1 },
                                                       new AccountType("Educator") { Id = 2 },
                                                       new AccountType("Student") { Id = 3 });

            modelBuilder.Entity<UserAccount>().HasData(new UserAccount("admin","test",1, "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Light") { Id = 1 },
                                                      new UserAccount("educator","test",2, "https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Blank&hairColor=Red&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=GraphicShirt&clotheColor=Blue02&graphicType=Skull&eyeType=Squint&eyebrowType=RaisedExcitedNatural&mouthType=Serious&skinColor=Yellow") { Id = 2 },
                                                      new UserAccount("student","test",3, "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Sunglasses&hatColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Close&eyebrowType=Angry&mouthType=Default&skinColor=Light") { Id = 3 });

            modelBuilder.Entity<Administrator>().HasData(new Administrator("Lejla", "Spago", "lejla.spago@edu.fit.ba", "036/555-999", 1) { Id = 1 });

        }
    }
}
