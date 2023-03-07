using Village.Core.Models;
using Village.Data;
using Village.Services.Interfaces;

namespace Village.Services.Services
{
    public class HouseService : EntityService<House>, IHouseService
    {
        public HouseService(VillageDbContext context) : base(context)
        {
        }
    }
}
