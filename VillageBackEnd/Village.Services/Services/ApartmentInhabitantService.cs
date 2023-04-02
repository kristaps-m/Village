using Village.Core.Models;
using Village.Data;
using Village.Services.Interfaces;

namespace Village.Services.Services
{
    public class ApartmentInhabitantService : EntityService<ApartmentInhabitant>, IApartmentInhabitantService
    {
        public ApartmentInhabitantService(IVillageDbContext context) : base(context)
        {
        }
    }
}
