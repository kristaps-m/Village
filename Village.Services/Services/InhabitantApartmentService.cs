using Village.Core.Models;
using Village.Data;
using Village.Services.Interfaces;

namespace Village.Services.Services
{
    public class InhabitantApartmentService : EntityService<InhabitantApartment>, IInhabitantApartmentService
    {
        public InhabitantApartmentService(VillageDbContext context) : base(context)
        {
        }
    }
}
