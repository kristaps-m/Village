using Village.Core.Models;
using Village.Data;
using Village.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Village.Services.Services
{
    public class ApartmentService : EntityService<Apartment>, IApartmentService
    {
        private readonly IHouseApartmentService _houseApartmentService;
        public ApartmentService(IVillageDbContext context, IHouseApartmentService houseApartmentService) : base(context)
        {
            _houseApartmentService = houseApartmentService;
        }

        public Apartment UpdateApartment(Apartment apartment, int id )
        {
            var apartmentToUpdate = _context.Apartments.SingleOrDefault(a => a.Id == id);
            if ( apartmentToUpdate != null )
            {
                apartmentToUpdate.Number = apartment.Number;
                apartmentToUpdate.Floor = apartment.Floor;
                apartmentToUpdate.NumberOfRooms = apartment.NumberOfRooms;
                apartmentToUpdate.Population = apartment.Population;
                apartmentToUpdate.FullArea = apartment.FullArea;
                apartmentToUpdate.LivingSpace = apartment.LivingSpace;
                _context.Entry(apartmentToUpdate).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                _context.SaveChanges();
            }

            return apartmentToUpdate;
        }

        public IActionResult DeleteApartment(int id)
        {
            var apartmentToDelete = _context.Apartments.SingleOrDefault(h => h.Id == id);

            if (apartmentToDelete != null)
            {
                _context.Apartments.Remove(apartmentToDelete);
                _context.SaveChanges();

                return Ok($"Apartment with id {id} was deleted!");
            }

            return NotFound();
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
