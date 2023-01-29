using Village.Core.Models;
using Village.Data;
using Village.Services.Interfaces;

namespace Village.Services.Services
{
    public class ApartmentService : EntityService<Apartment>, IApartmentService
    {
        public ApartmentService(VillageDbContext context) : base(context)
        {
        }
    }
}
