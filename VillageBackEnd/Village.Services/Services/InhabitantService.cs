using Microsoft.AspNetCore.Mvc;
using Village.Core.Interfaces;
using Village.Core.Models;
using Village.Data;

namespace Village.Services.Services
{
    public class InhabitantService : EntityService<Inhabitant>, IInhabitantService
    {
        private readonly IApartmentInhabitantService _apartmentInhabitantService;
        public InhabitantService(IVillageDbContext context, IApartmentInhabitantService apartmentInhabitantService) : base(context)
        {
            _apartmentInhabitantService = apartmentInhabitantService;
        }

        public IActionResult AddInhabitantInsideApartment(Inhabitant inhabitant, int existingApartmentId)
        {
            _context.Inhabitants.Add(inhabitant);
            _context.SaveChanges();

            var apartmentInhabitant = new ApartmentInhabitant();
            apartmentInhabitant.ApartmentId = existingApartmentId;
            apartmentInhabitant.InhabitantId = inhabitant.Id;
            _apartmentInhabitantService.Create(apartmentInhabitant);

            return Created($"Apartment-Inhabitant with id={apartmentInhabitant.Id},ApartmentId={existingApartmentId}, InhabitantId={inhabitant.Id} was created!", inhabitant);
        }

        public IActionResult DeleteInhabitanttAndApartmentInhabitant(int inhabitantId)
        {
            var inhabitantToDelete = _context.Inhabitants.SingleOrDefault(h => h.Id == inhabitantId);
            var houseApartmentToDelete = _apartmentInhabitantService.GetAll().SingleOrDefault(ha => ha.InhabitantId == inhabitantId);

            if (inhabitantToDelete != null && houseApartmentToDelete != null)
            {
                _context.Inhabitants.Remove(inhabitantToDelete);
                _context.SaveChanges();

                _apartmentInhabitantService.Delete(houseApartmentToDelete);

                return Ok($"Inhabitant with id {inhabitantId} and ApartmentInhabitant with id {houseApartmentToDelete.Id} was deleted!");
            }

            return NotFound();
        }

        public Inhabitant UpdateInhabitant(Inhabitant inhabitant, int id)
        {
            var inhabitantToUpdate = _context.Inhabitants.SingleOrDefault(i => i.Id == id);

            if (inhabitantToUpdate != null)
            {
                inhabitantToUpdate.Name = inhabitant.Name;
                inhabitantToUpdate.Lastname = inhabitant.Lastname;
                inhabitantToUpdate.PersonalCode = inhabitant.PersonalCode;
                inhabitantToUpdate.DateOfBirth = inhabitant.DateOfBirth;
                inhabitantToUpdate.Phone = inhabitant.Phone;
                inhabitantToUpdate.Email = inhabitant.Email;
                inhabitantToUpdate.IdOfApartment = inhabitant.IdOfApartment;
                inhabitantToUpdate.IsOwner = inhabitant.IsOwner;
                _context.Entry(inhabitantToUpdate).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                _context.SaveChanges();
            }

            return inhabitantToUpdate;
        }

        public IActionResult DeleteInhabitant(int id)
        {
            var inhabitantsToDelete = _context.Inhabitants.SingleOrDefault(a => a.Id == id);

            if (inhabitantsToDelete != null)
            {
                _context.Inhabitants.Remove(inhabitantsToDelete);
                _context.SaveChanges();

                return Ok($"Inhabitant with id {id} was deleted!");
            }

            return NotFound();
        }

        public List<Inhabitant> GetAllSpecialInhabitants(int incomingApartmentId)
        {
            var apartmentInhabitantIds = new List<int>() { };

            foreach (var houseApartment in _apartmentInhabitantService.GetAll())
            {
                if (houseApartment.ApartmentId == incomingApartmentId)
                {
                    apartmentInhabitantIds.Add(houseApartment.InhabitantId);
                }
            }

            var inhabitantsFoundByApartmentId = _context.Inhabitants.Where(x => apartmentInhabitantIds.Contains(x.Id));

            return inhabitantsFoundByApartmentId.ToList();
        }
    }
}
