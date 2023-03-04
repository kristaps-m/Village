using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Village.Core.Models;
using Village.Services.Interfaces;

namespace Village.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class apartmentController : ControllerBase
    {
        private readonly IApartmentService _apartmenService;

        public apartmentController(IApartmentService apartmenService)
        {
            _apartmenService = apartmenService;
        }

        [Route("add")]
        [HttpPut]
        public IActionResult AddApartment(Apartment apartment)
        {
            _apartmenService.Create(apartment);

            return Created("", apartment); // Ok();
        }

        [Route("update")]
        [HttpPut]
        public IActionResult UpdateApartment(Apartment apartment, int id)
        {
            var apartmentToUpdate = _apartmenService.GetById(id);
            apartmentToUpdate.Number = apartment.Number;
            apartmentToUpdate.Floor = apartment.Floor;
            apartmentToUpdate.NumberOfRooms = apartment.NumberOfRooms;
            apartmentToUpdate.Population = apartment.Population;
            apartmentToUpdate.FullArea = apartment.FullArea;
            apartmentToUpdate.LivingSpace = apartment.LivingSpace;
            _apartmenService.Update(apartmentToUpdate);

            return Created("", apartmentToUpdate); // Ok();
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteApartment(int id)
        {
            var apartmentToDelete = _apartmenService.GetById(id);

            if (apartmentToDelete == null)
            {
                return NotFound();
            }
            _apartmenService.Delete(apartmentToDelete);

            return Ok($"Apartment with id {id} was deleted!");
        }

        [Route("all")]
        [HttpGet]
        public IActionResult GetAllApartments()
        {
            var apartment = _apartmenService.GetAll();
            return Ok(apartment);
        }
    }
}
