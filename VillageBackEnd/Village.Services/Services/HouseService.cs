using Microsoft.AspNetCore.Mvc;
using Village.Core.Interfaces;
using Village.Core.Models;
using Village.Data;

namespace Village.Services.Services
{
    public class HouseService : EntityService<House>, IHouseService
    {
        public HouseService(IVillageDbContext context) : base(context)
        {
        }

        public House UpdateHouse(House house, int id)
        {
            var houseToUpdate = _context.Houses.SingleOrDefault(h => h.Id == id);

            if (houseToUpdate != null)
            {
                houseToUpdate.Number = house.Number;
                houseToUpdate.Street = house.Street;
                houseToUpdate.City = house.City;
                houseToUpdate.Country = house.Country;
                houseToUpdate.Postcode = house.Postcode;
                _context.Entry(houseToUpdate).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                _context.SaveChanges();
            }

            return houseToUpdate;
        }

        public IActionResult DeleteHouse(int id)
        {
            var houseToDelete = _context.Houses.SingleOrDefault(h => h.Id == id);

            if (houseToDelete != null)
            {
                _context.Houses.Remove(houseToDelete);
                _context.SaveChanges();

                return Ok($"House with id {id} was deleted!");
            }

            return NotFound();
        }
    }
}
