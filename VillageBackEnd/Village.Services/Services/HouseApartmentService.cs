using Village.Core.Models;
using Village.Data;
using Village.Core.Interfaces;

namespace Village.Services.Services
{
    public class HouseApartmentService : EntityService<HouseApartment>, IHouseApartmentService
    {
        public HouseApartmentService(IVillageDbContext context) : base(context)
        {
        }
    }
}
