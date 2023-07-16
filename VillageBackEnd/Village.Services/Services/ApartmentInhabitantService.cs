using Village.Core.Interfaces;
using Village.Core.Models;
using Village.Data;

namespace Village.Services.Services
{
    public class ApartmentInhabitantService : EntityService<ApartmentInhabitant>, IApartmentInhabitantService
    {
        public ApartmentInhabitantService(IVillageDbContext context) : base(context)
        {
        }
    }
}
