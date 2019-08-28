﻿// <auto-generated />
using System;
using EducationCenter.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EducationCenter.Infrastructure.Migrations
{
    [DbContext(typeof(MyContext))]
    [Migration("20190821081153_mig5")]
    partial class mig5
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EducationCenter.Core.Entities.AccountType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("AccountTypes");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Type = "Administrator"
                        },
                        new
                        {
                            Id = 2,
                            Type = "Educator"
                        },
                        new
                        {
                            Id = 3,
                            Type = "Student"
                        });
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Administrator", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<int>("UserAccountId");

                    b.HasKey("Id");

                    b.HasIndex("UserAccountId");

                    b.ToTable("Administrators");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Email = "lejla.spago@edu.fit.ba",
                            FirstName = "Lejla",
                            LastName = "Spago",
                            Phone = "036/555-999",
                            UserAccountId = 1
                        });
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Competition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<int>("CourseId");

                    b.Property<string>("Description");

                    b.Property<DateTime>("EndDate");

                    b.Property<int>("MaxCandidatesNumber");

                    b.Property<DateTime>("StartDate");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.ToTable("Competitions");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.CompetitionApplication", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CompetitionId");

                    b.Property<DateTime>("Date");

                    b.Property<int>("StudentId");

                    b.HasKey("Id");

                    b.HasIndex("CompetitionId");

                    b.HasIndex("StudentId");

                    b.ToTable("CompetitionApplications");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Course", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<int>("AdministratorId");

                    b.Property<string>("ClassStartTime");

                    b.Property<int>("CourseFieldId");

                    b.Property<string>("DaysOfWeek");

                    b.Property<string>("Description");

                    b.Property<int>("EducatorId");

                    b.Property<string>("Name");

                    b.Property<int>("NumberOfLectures");

                    b.Property<double>("Price");

                    b.Property<DateTime>("StartDate");

                    b.HasKey("Id");

                    b.HasIndex("AdministratorId");

                    b.HasIndex("CourseFieldId");

                    b.HasIndex("EducatorId");

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.CourseClass", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CourseId");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Description");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.ToTable("CourseClasses");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.CourseField", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Field")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("CourseFields");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.CourseRate", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Comment");

                    b.Property<int>("CourseId");

                    b.Property<int>("Rate");

                    b.Property<int>("StudentId");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.HasIndex("StudentId");

                    b.ToTable("CourseRates");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Educator", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CourseFieldId");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("UserAccountId");

                    b.HasKey("Id");

                    b.HasIndex("CourseFieldId");

                    b.HasIndex("UserAccountId");

                    b.ToTable("Educators");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.EducatorRate", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Comment");

                    b.Property<int>("EducatorId");

                    b.Property<int>("Rate");

                    b.Property<int>("StudentId");

                    b.HasKey("Id");

                    b.HasIndex("EducatorId");

                    b.HasIndex("StudentId");

                    b.ToTable("EducatorRates");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Notification", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AdministratorId");

                    b.Property<DateTime>("Date");

                    b.Property<int?>("EducatorId");

                    b.Property<string>("Text")
                        .IsRequired();

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("AdministratorId");

                    b.HasIndex("EducatorId");

                    b.ToTable("Notifications");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Payment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Amount");

                    b.Property<int>("CourseId");

                    b.Property<DateTime>("Date");

                    b.Property<int>("StudentId");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.HasIndex("StudentId");

                    b.ToTable("Payments");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Student", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("BirthDate");

                    b.Property<string>("Description");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("Points");

                    b.Property<int>("UserAccountId");

                    b.HasKey("Id");

                    b.HasIndex("UserAccountId");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.StudentAttendance", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CourseClassId");

                    b.Property<bool>("Present");

                    b.Property<int>("StudentCourseId");

                    b.HasKey("Id");

                    b.HasIndex("CourseClassId");

                    b.HasIndex("StudentCourseId");

                    b.ToTable("StudentAttendances");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.StudentCourse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CourseId");

                    b.Property<int>("Mark");

                    b.Property<int>("StudentId");

                    b.HasKey("Id");

                    b.HasIndex("CourseId");

                    b.HasIndex("StudentId");

                    b.ToTable("StudentCourses");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.UserAccount", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AccountTypeId");

                    b.Property<bool>("Active");

                    b.Property<string>("AvatarUrl");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Password")
                        .HasMaxLength(50);

                    b.Property<string>("Username")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("AccountTypeId");

                    b.ToTable("UserAccounts");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AccountTypeId = 1,
                            Active = true,
                            AvatarUrl = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Light",
                            CreatedDate = new DateTime(2019, 8, 21, 10, 11, 52, 611, DateTimeKind.Local).AddTicks(6734),
                            Password = "test",
                            Username = "admin"
                        },
                        new
                        {
                            Id = 2,
                            AccountTypeId = 2,
                            Active = true,
                            AvatarUrl = "https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Blank&hairColor=Red&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=GraphicShirt&clotheColor=Blue02&graphicType=Skull&eyeType=Squint&eyebrowType=RaisedExcitedNatural&mouthType=Serious&skinColor=Yellow",
                            CreatedDate = new DateTime(2019, 8, 21, 10, 11, 52, 615, DateTimeKind.Local).AddTicks(9756),
                            Password = "test",
                            Username = "educator"
                        },
                        new
                        {
                            Id = 3,
                            AccountTypeId = 3,
                            Active = true,
                            AvatarUrl = "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Sunglasses&hatColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Close&eyebrowType=Angry&mouthType=Default&skinColor=Light",
                            CreatedDate = new DateTime(2019, 8, 21, 10, 11, 52, 615, DateTimeKind.Local).AddTicks(9805),
                            Password = "test",
                            Username = "student"
                        });
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Administrator", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.UserAccount", "UserAccount")
                        .WithMany()
                        .HasForeignKey("UserAccountId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Competition", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.Course", "Course")
                        .WithMany()
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.CompetitionApplication", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.Competition", "Competition")
                        .WithMany()
                        .HasForeignKey("CompetitionId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EducationCenter.Core.Entities.Student", "Student")
                        .WithMany()
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Course", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.Administrator", "Administrator")
                        .WithMany()
                        .HasForeignKey("AdministratorId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EducationCenter.Core.Entities.CourseField", "CourseField")
                        .WithMany()
                        .HasForeignKey("CourseFieldId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EducationCenter.Core.Entities.Educator", "Educator")
                        .WithMany()
                        .HasForeignKey("EducatorId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.CourseClass", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.Course", "Course")
                        .WithMany()
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.CourseRate", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.Course", "Course")
                        .WithMany()
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EducationCenter.Core.Entities.Student", "Student")
                        .WithMany()
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Educator", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.CourseField", "CourseField")
                        .WithMany()
                        .HasForeignKey("CourseFieldId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EducationCenter.Core.Entities.UserAccount", "UserAccount")
                        .WithMany()
                        .HasForeignKey("UserAccountId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.EducatorRate", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.Educator", "Educator")
                        .WithMany()
                        .HasForeignKey("EducatorId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EducationCenter.Core.Entities.Student", "Student")
                        .WithMany()
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Notification", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.Administrator", "Administrator")
                        .WithMany()
                        .HasForeignKey("AdministratorId");

                    b.HasOne("EducationCenter.Core.Entities.Educator", "Educator")
                        .WithMany()
                        .HasForeignKey("EducatorId");
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Payment", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.Course", "Course")
                        .WithMany()
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EducationCenter.Core.Entities.Student", "Student")
                        .WithMany()
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.Student", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.UserAccount", "UserAccount")
                        .WithMany()
                        .HasForeignKey("UserAccountId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.StudentAttendance", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.CourseClass", "CourseClass")
                        .WithMany()
                        .HasForeignKey("CourseClassId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EducationCenter.Core.Entities.StudentCourse", "StudentCourse")
                        .WithMany()
                        .HasForeignKey("StudentCourseId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.StudentCourse", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.Course", "Course")
                        .WithMany()
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EducationCenter.Core.Entities.Student", "Student")
                        .WithMany()
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("EducationCenter.Core.Entities.UserAccount", b =>
                {
                    b.HasOne("EducationCenter.Core.Entities.AccountType", "AccountType")
                        .WithMany()
                        .HasForeignKey("AccountTypeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
