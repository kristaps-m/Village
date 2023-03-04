using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Village.Data.Migrations
{
    public partial class Initialise : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ApartmentInhabitants",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApartmentId = table.Column<int>(type: "int", nullable: false),
                    InhabitantId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApartmentInhabitants", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Apartments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Number = table.Column<int>(type: "int", nullable: false),
                    Floor = table.Column<int>(type: "int", nullable: false),
                    NumberOfRooms = table.Column<int>(type: "int", nullable: false),
                    Population = table.Column<int>(type: "int", nullable: false),
                    FullArea = table.Column<double>(type: "float", nullable: false),
                    LivingSpace = table.Column<double>(type: "float", nullable: false),
                    IdOfHouse = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Apartments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HouseApartments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HouseId = table.Column<int>(type: "int", nullable: false),
                    ApartmentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HouseApartments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Houses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Number = table.Column<int>(type: "int", nullable: false),
                    Street = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Postcode = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Houses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "InhabitantApartments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InhabitantId = table.Column<int>(type: "int", nullable: false),
                    ApartmentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InhabitantApartments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Inhabitants",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Lastname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PersonalCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdOfApartment = table.Column<int>(type: "int", nullable: false),
                    IsOwner = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Inhabitants", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Apartments",
                columns: new[] { "Id", "Floor", "FullArea", "IdOfHouse", "LivingSpace", "Number", "NumberOfRooms", "Population" },
                values: new object[,]
                {
                    { 1, 3, 74.5, 1, 70.5, 21, 3, 3 },
                    { 2, 2, 54.5, 1, 50.5, 44, 2, 3 },
                    { 3, 2, 54.5, 1, 50.5, 40, 2, 3 },
                    { 4, 12, 100.5, 2, 95.5, 111, 4, 3 },
                    { 5, 99, 150.5, 2, 140.5, 199, 5, 1 }
                });

            migrationBuilder.InsertData(
                table: "Houses",
                columns: new[] { "Id", "City", "Country", "Number", "Postcode", "Street" },
                values: new object[,]
                {
                    { 1, "Riga", "Latvia", 901, "LV - 2023", "Brivibas" },
                    { 2, "Riga", "Latvia", 777, "LV - 2020", "Ulmana" }
                });

            migrationBuilder.InsertData(
                table: "Inhabitants",
                columns: new[] { "Id", "DateOfBirth", "Email", "IdOfApartment", "IsOwner", "Lastname", "Name", "PersonalCode", "Phone" },
                values: new object[,]
                {
                    { 1, new DateTime(1980, 1, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Andris@gmail.com", 1, true, "Berzins", "Andris", "220180-111222", "+371 21234567" },
                    { 2, new DateTime(2003, 12, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), "Anna@gmail.com", 1, false, "Liepkalne", "Anna", "241203-111222", "+371 22234567" },
                    { 3, new DateTime(1980, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Madarss@gmail.com", 2, false, "Ozols", "Madars", "010180-111222", "+371 23234567" },
                    { 4, new DateTime(1980, 2, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Garkakle.Linda@gmail.com", 3, false, "Garkakle", "Linda", "220280-111222", "+371 21234567" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApartmentInhabitants");

            migrationBuilder.DropTable(
                name: "Apartments");

            migrationBuilder.DropTable(
                name: "HouseApartments");

            migrationBuilder.DropTable(
                name: "Houses");

            migrationBuilder.DropTable(
                name: "InhabitantApartments");

            migrationBuilder.DropTable(
                name: "Inhabitants");
        }
    }
}
