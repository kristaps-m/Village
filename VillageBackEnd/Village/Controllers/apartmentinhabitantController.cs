using Microsoft.AspNetCore.Mvc;
using Village.Core.Models;
using Village.Services.Interfaces;

namespace Village.Controllers
{
    [Route("apartmentinhabitant")]
    [ApiController]
    public class ApartmentinhabitantController : ControllerBase
    {
        private readonly IApartmentInhabitantService _apartmentInhabitantService;

        public ApartmentinhabitantController(IApartmentInhabitantService apartmentInhabitantService)
        {
            _apartmentInhabitantService = apartmentInhabitantService;
        }

        [Route("add")]
        [HttpPost]
        public IActionResult AddApartmentInhabitant(ApartmentInhabitant apartmentInhabitant)
        {
            _apartmentInhabitantService.Create(apartmentInhabitant);

            return Created("", apartmentInhabitant);
        }

        [Route("update")]
        [HttpPut]
        public IActionResult UpdateApartmentInhabitant(ApartmentInhabitant apartmentInhabitant, int id)
        {
            var apartmentInhabitantToUpdate = _apartmentInhabitantService.GetById(id);
            apartmentInhabitantToUpdate.ApartmentId = apartmentInhabitant.ApartmentId;
            apartmentInhabitantToUpdate.InhabitantId = apartmentInhabitant.InhabitantId;
            _apartmentInhabitantService.Update(apartmentInhabitantToUpdate);

            return Created("", apartmentInhabitantToUpdate);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteApartmentInhabitant(int id)
        {
            var apartmentInhabitantToDelete = _apartmentInhabitantService.GetById(id);

            if (apartmentInhabitantToDelete == null)
            {
                return NotFound();
            }
            _apartmentInhabitantService.Delete(apartmentInhabitantToDelete);

            return Ok($"ApartmentInhabitant with id {id} was deleted!");
        }

        [Route("all")]
        [HttpGet]
        public IActionResult GetAllApartmentInhabitants()
        {
            var apartmentInhabitants = _apartmentInhabitantService.GetAll();
            return Ok(apartmentInhabitants);
        }
    }
}
