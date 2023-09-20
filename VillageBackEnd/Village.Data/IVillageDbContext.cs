using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Village.Core.Models;

namespace Village.Data
{
    public interface IVillageDbContext
    {
        DbSet<T> Set<T>() where T : class;
        EntityEntry<T> Entry<T>(T entity) where T : class;

        DbSet<Apartment> Apartments { get; set; }
        DbSet<House> Houses { get; set; }
        DbSet<Inhabitant> Inhabitants { get; set; }
        DbSet<ApartmentInhabitant> ApartmentInhabitants { get; set; }
        DbSet<HouseApartment> HouseApartments { get; set; }
        DbSet<InhabitantApartment> InhabitantApartments { get; set; }

        int SaveChanges();
        Task<int> SaveChangesAsync();
    }
}
