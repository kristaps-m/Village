using Microsoft.EntityFrameworkCore;
using Village.Core.Models;

namespace Village.Data
{
    public class VillageDbContext : DbContext, IVillageDbContext
    {
        public VillageDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Apartment> Apartments { get; set; }
        public DbSet<House> Houses { get; set; }
        public DbSet<Inhabitant> Inhabitants { get; set; }
        public DbSet<ApartmentInhabitant> ApartmentInhabitants { get; set; }
        public DbSet<HouseApartment> HouseApartments { get; set; }
        public DbSet<InhabitantApartment> InhabitantApartments { get; set; }
        public Task<int> SaveChangesAsync()
        {
            return base.SaveChangesAsync();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<House>().HasData(
                new House
                {
                    Id = 1,
                    Number = 901,
                    Street = "Brivibas",
                    City = "Riga",
                    Country = "Latvia",
                    Postcode = "LV - 2023"
                },
                new House
                {
                    Id = 2,
                    Number = 777,
                    Street = "Ulmana",
                    City = "Riga",
                    Country = "Latvia",
                    Postcode = "LV - 2020"
                }
            );

            builder.Entity<Apartment>().HasData(
                new Apartment
                {
                    Id = 1,
                    Number = 21,
                    Floor = 3,
                    NumberOfRooms = 3,
                    Population = 3,
                    FullArea = 74.5,
                    LivingSpace = 70.5,
                },
                new Apartment
                {
                    Id = 2,
                    Number = 44,
                    Floor = 2,
                    NumberOfRooms = 2,
                    Population = 3,
                    FullArea = 54.5,
                    LivingSpace = 50.5,
                },
                new Apartment
                {
                    Id = 3,
                    Number = 40,
                    Floor = 2,
                    NumberOfRooms = 2,
                    Population = 3,
                    FullArea = 54.5,
                    LivingSpace = 50.5,
                },
                new Apartment
                {
                    Id = 4,
                    Number = 111,
                    Floor = 12,
                    NumberOfRooms = 4,
                    Population = 3,
                    FullArea = 100.5,
                    LivingSpace = 95.5,
                },
                new Apartment
                {
                    Id = 5,
                    Number = 199,
                    Floor = 99,
                    NumberOfRooms = 5,
                    Population = 1,
                    FullArea = 150.5,
                    LivingSpace = 140.5,
                }

            );

            builder.Entity<Inhabitant>().HasData(
                new Inhabitant { Id = 1,
                Name = "Andris", Lastname = "Berzins",
                PersonalCode = "220180-111222", DateOfBirth = new DateTime(1980,1,22),
                Phone = "+371 21234567", Email = "Andris@gmail.com", ApartmentNumber = 21, IsOwner = true},
                new Inhabitant
                {
                    Id = 2,
                    Name = "Anna",
                    Lastname = "Liepkalne",
                    PersonalCode = "241203-111222",
                    DateOfBirth = new DateTime(2003, 12, 24),
                    Phone = "+371 22234567",
                    Email = "Anna@gmail.com",
                    ApartmentNumber = 21,
                    IsOwner = false
                },
                new Inhabitant
                {
                    Id = 3,
                    Name = "Madars",
                    Lastname = "Ozols",
                    PersonalCode = "010180-111222",
                    DateOfBirth = new DateTime(1980, 1, 1),
                    Phone = "+371 23234567",
                    Email = "Madarss@gmail.com",
                    ApartmentNumber = 40,
                    IsOwner = false
                },
                new Inhabitant
                {
                    Id = 4,
                    Name = "Linda",
                    Lastname = "Garkakle",
                    PersonalCode = "220280-111222",
                    DateOfBirth = new DateTime(1980, 2, 22),
                    Phone = "+371 21234567",
                    Email = "Garkakle.Linda@gmail.com",
                    ApartmentNumber = 111,
                    IsOwner = false
                }
            );
        }
    }
}