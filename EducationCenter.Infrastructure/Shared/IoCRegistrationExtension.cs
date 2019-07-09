using EducationCenter.Core.Interfaces;
using EducationCenter.Infrastructure.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace EducationCenter.Infrastructure.Shared
{
    public static class IoCRegistrationExtension
    {
        public static void RegisterIoCDependencies(this IServiceCollection services)
        {
            services.AddScoped<IAccountTypeRepository,AccountTypeRepository>();
            services.AddScoped<IStudentRepository, StudentRepository>();
            services.AddScoped<IPaymentRepository, PaymentRepository>();
            services.AddScoped<ICourseRepository, CourseRepository>();
            services.AddScoped<IAdministratorRepository, AdministratorRepository>();
            services.AddScoped<IEducatorRepository, EducatorRepository>();
            services.AddScoped<INotificationRepository, NotificationRepository>();
            services.AddScoped<ICourseFieldRepository, CourseFieldRepository>();
            services.AddScoped<IUserAccountRepository, UserAccountRepository>();
            services.AddScoped<ICompetitionRepository, CompetitionRepository>();
         







        }
    }
}
