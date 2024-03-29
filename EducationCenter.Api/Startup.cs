using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EducationCenter.Infrastructure.Data;
using EducationCenter.Infrastructure.Shared;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Swashbuckle.AspNetCore.Swagger;

namespace EducationCenter.Api
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

      services.AddDbContext<MyContext>(options =>
         options.UseSqlServer(Configuration.GetConnectionString("APP")));

      services.RegisterIoCDependencies();

      //CORS Policy
      services.AddCors(options =>
      {
        options.AddPolicy("CorsPolicy",
                  builder => builder.WithOrigins("https://www.s75.wrd.app.fit.ba",
                                                 "http://www.s75.wrd.app.fit.ba",
                                                 "http://localhost:4200/"
                                                 )
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials());
      });


      //Authentification
      services.AddAuthentication(options =>
      {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
      }).AddJwtBearer(options =>
      {
        options.Authority = "https://educationcenter.eu.auth0.com/";
        options.Audience = "https://api.educationcenter.com";
      });
      // Register the Swagger generator, defining 1 or more Swagger documents
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {



      app.Use(async (context, next) =>
      {
        await next();
        if (context.Response.StatusCode == 404 &&
           !Path.HasExtension(context.Request.Path.Value) &&
           !context.Request.Path.Value.StartsWith("/api/"))
        {
          context.Request.Path = "/index.html";
          await next();
        }
      });
      app.UseCors("CorsPolicy");
      app.UseMvcWithDefaultRoute();
      app.UseDefaultFiles();
      app.UseStaticFiles();

      //if (env.IsDevelopment())
      //{
      //    app.UseDeveloperExceptionPage();
      //}
      //else
      //{
      //    app.UseExceptionHandler("/Home/Error");
      //    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
      //    app.UseHsts();
      //}
      //app.UseAuthentication();
     
      //app.UseHttpsRedirection();

      //// Enable middleware to serve generated Swagger as a JSON endpoint.
      //app.UseSwagger();

      //// Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
      //// specifying the Swagger JSON endpoint.
      //app.UseSwaggerUI(c =>
      //{
      //    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
      //});


    }
  }
}
