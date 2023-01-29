using Village.Core.Models;
using Village.Data;
using Village.Services.Interfaces;

namespace Village.Services.Services
{
    public class HouseApartmentService : EntityService<HouseApartment>, IHouseApartmentService
    {
        public HouseApartmentService(VillageDbContext context) : base(context)
        {
        }
    }
}
