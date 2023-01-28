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
    }
}