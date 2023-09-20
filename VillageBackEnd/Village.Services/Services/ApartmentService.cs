using Village.Core.Models;
using Village.Data;
using Village.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Village.Services.Services
{
    public class ApartmentService : EntityService<Apartment>, IApartmentService
    {
        private readonly IHouseApartmentService _houseApartmentService;
        private readonly IHouseService _houseService;
        public ApartmentService(IVillageDbContext context, IHouseApartmentService houseApartmentService,
            IHouseService houseService) : base(context)
        {
            _houseApartmentService = houseApartmentService;
            _houseService = houseService;
        }

        public IActionResult AddApartmentInsideHouse(Apartment apartment, int existingHouseId)
        {
            _context.Apartments.Add(apartment);
            _context.SaveChanges();

            var houseApartment = new HouseApartment();
            houseApartment.HouseId = existingHouseId;
            houseApartment.ApartmentId = apartment.Id;
            _houseApartmentService.Create(houseApartment);

            return Created($"House-Apartment with id={houseApartment.Id},HouseId={existingHouseId}, ApartmentId={apartment.Id}  was created!", apartment);
        }

        public IActionResult DeleteApartmentAndHouseApartment(int apartmentId)
        {
            var apartmentToDelete = _context.Apartments.SingleOrDefault(h => h.Id == apartmentId);
            var houseApartmentToDelete = _houseApartmentService.GetAll().SingleOrDefault(ha => ha.ApartmentId == apartmentId);

            if (apartmentToDelete != null && houseApartmentToDelete != null)
            {
                _context.Apartments.Remove(apartmentToDelete);
                _context.SaveChanges();

                _houseApartmentService.Delete(houseApartmentToDelete);

                return Ok($"Apartment with id {apartmentId} and HouseApartment with id {houseApartmentToDelete.Id} was deleted!");
            }

            return NotFound();
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
