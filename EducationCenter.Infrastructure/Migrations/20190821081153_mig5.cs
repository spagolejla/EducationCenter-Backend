using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationCenter.Infrastructure.Migrations
{
    public partial class mig5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "UserAccounts",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2019, 8, 21, 10, 11, 52, 611, DateTimeKind.Local).AddTicks(6734));

            migrationBuilder.UpdateData(
                table: "UserAccounts",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedDate",
                value: new DateTime(2019, 8, 21, 10, 11, 52, 615, DateTimeKind.Local).AddTicks(9756));

            migrationBuilder.UpdateData(
                table: "UserAccounts",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedDate",
                value: new DateTime(2019, 8, 21, 10, 11, 52, 615, DateTimeKind.Local).AddTicks(9805));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
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
    }
}
