using Village.Core.Models;
using Village.Data;
using Village.Services.Interfaces;

namespace Village.Services.Services
{
    public class InhabitantService : EntityService<Inhabitant>, IInhabitantService
    {
        private readonly IApartmentInhabitantService _apartmentInhabitantService;
        public InhabitantService(IVillageDbContext context, IApartmentInhabitantService apartmentInhabitantService) : base(context)
        {
            _apartmentInhabitantService = apartmentInhabitantService;
        }

        public List<Inhabitant> GetAllSpecialInhabitants(int id)
        {
            var apartmentInhabitantIds = new List<int>() { };

            foreach (var houseApartment in _apartmentInhabitantService.GetAll())
            {
                if (houseApartment.ApartmentId == id)
                {
                    apartmentInhabitantIds.Add(houseApartment.InhabitantId);
                }
            }

            var inhabitants = _context.Inhabitants.Where(x => apartmentInhabitantIds.Contains(x.Id));

            return inhabitants.ToList();
        }
    }
}
