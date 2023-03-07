using Village.Core.Models;
using Village.Data;
using Village.Services.Interfaces;

namespace Village.Services.Services
{
    public class InhabitantService : EntityService<Inhabitant>, IInhabitantService
    {
        public InhabitantService(VillageDbContext context) : base(context)
        {
        }
    }
}
