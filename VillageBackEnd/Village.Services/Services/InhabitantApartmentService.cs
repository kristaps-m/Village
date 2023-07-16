using Village.Core.Models;
using Village.Data;
using Village.Core.Interfaces;

namespace Village.Services.Services
{
    public class InhabitantApartmentService : EntityService<InhabitantApartment>, IInhabitantApartmentService
    {
        public InhabitantApartmentService(IVillageDbContext context) : base(context)
        {
        }
    }
}
