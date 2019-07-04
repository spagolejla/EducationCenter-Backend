using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationCenter.Infrastructure.Migrations
{
    public partial class mig3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Active",
                table: "Courses",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "MaxCandidatesNumber",
                table: "Competitions",
                nullable: false,
                defaultValue: 0);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Active",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "MaxCandidatesNumber",
                table: "Competitions");

            migrationBuilder.UpdateData(
                table: "UserAccounts",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2019, 5, 16, 2, 53, 56, 983, DateTimeKind.Local).AddTicks(984));

            migrationBuilder.UpdateData(
                table: "UserAccounts",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2019, 5, 16, 2, 53, 56, 990, DateTimeKind.Local).AddTicks(6920));

            migrationBuilder.UpdateData(
                table: "UserAccounts",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedDate",
                value: new DateTime(2019, 5, 16, 2, 53, 56, 990, DateTimeKind.Local).AddTicks(7000));
        }
    }
}
