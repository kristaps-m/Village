using Village.Core.Models;
using Village.Data;
using Village.Services.Interfaces;

namespace Village.Services.Services
{
    public class ApartmentService : EntityService<Apartment>, IApartmentService
    {
        private readonly IHouseApartmentService _houseApartmentService;
        public ApartmentService(IVillageDbContext context, IHouseApartmentService houseApartmentService) : base(context)
        {
            _houseApartmentService = houseApartmentService;
        }

        public List<Apartment> GetAllSpecialApartments(int id)
        {
            var houseApartmentsIds = new List<int>() { };

            foreach (var houseApartment in _houseApartmentService.GetAll())
            {
                if (houseApartment.HouseId == id)
                {
                    houseApartmentsIds.Add(houseApartment.ApartmentId);
                }
            }

            var apartments = _context.Apartments.Where(x => houseApartmentsIds.Contains(x.Id));

            return apartments.ToList();
        }
    }
}
