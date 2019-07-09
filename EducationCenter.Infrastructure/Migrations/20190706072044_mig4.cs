using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationCenter.Infrastructure.Migrations
{
    public partial class mig4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Points",
                table: "Students",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Mark",
                table: "StudentCourses",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "UserAccounts",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2019, 7, 6, 9, 20, 41, 789, DateTimeKind.Local).AddTicks(9051));

            migrationBuilder.UpdateData(
                table: "UserAccounts",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2019, 7, 6, 9, 20, 41, 797, DateTimeKind.Local).AddTicks(8441));

            migrationBuilder.UpdateData(
                table: "UserAccounts",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedDate",
                value: new DateTime(2019, 7, 6, 9, 20, 41, 797, DateTimeKind.Local).AddTicks(8506));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Points",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Mark",
                table: "StudentCourses");

            migrationBuilder.UpdateData(
                table: "UserAccounts",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2019, 7, 4, 11, 47, 7, 442, DateTimeKind.Local).AddTicks(3892));

            migrationBuilder.UpdateData(
                table: "UserAccounts",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2019, 7, 4, 11, 47, 7, 450, DateTimeKind.Local));

            migrationBuilder.UpdateData(
                table: "UserAccounts",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedDate",
                value: new DateTime(2019, 7, 4, 11, 47, 7, 450, DateTimeKind.Local).AddTicks(65));
        }
    }
}
