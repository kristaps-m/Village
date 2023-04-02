using Village.Core.Models;

namespace Village.Services.Interfaces
{
    public interface IApartmentService : IEntityService<Apartment>
    {
        public List<Apartment> GetAllSpecialApartments(int id);
    }
}