using Microsoft.AspNetCore.Mvc;
using Village.Core.Models;
using Village.Services.Interfaces;

namespace Village.Controllers
{
    [Route("houseapartment")]
    [ApiController]
    public class HouseapartmentController : ControllerBase
    {
        private readonly IHouseApartmentService _houseApartmentService;

        public HouseapartmentController(IHouseApartmentService houseApartmentService)
        {
            _houseApartmentService = houseApartmentService;
        }

        [Route("add")]
        [HttpPost]
        public IActionResult AddHouseApartment(HouseApartment houseApartment)
        {
            _houseApartmentService.Create(houseApartment);

            return Created("", houseApartment);
        }

        [Route("update")]
        [HttpPut]
        public IActionResult UpdateHouseApartment(HouseApartment houseApartment, int id)
        {
            var houseApartmentToUpdate = _houseApartmentService.GetById(id);
            houseApartmentToUpdate.HouseId = houseApartment.HouseId;
            houseApartmentToUpdate.ApartmentId = houseApartment.ApartmentId;

            _houseApartmentService.Update(houseApartmentToUpdate);

            return Created("", houseApartmentToUpdate);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteHouseApartment(int id)
        {
            var houseApartmentToDelete = _houseApartmentService.GetById(id);

            if (houseApartmentToDelete == null)
            {
                return NotFound();
            }
            _houseApartmentService.Delete(houseApartmentToDelete);

            return Ok($"HouseApartment with id {id} was deleted!");
        }

        [Route("all")]
        [HttpGet]
        public IActionResult GetAllHouseApartments()
        {
            var houseApartments = _houseApartmentService.GetAll();
            return Ok(houseApartments);
        }
		
		[Route("all/{id}")]
        [HttpGet]
        public IActionResult GetAllHouseApartments(int id)
        {
            var houseApartments = _houseApartmentService.GetAll();
			var specialHouseApartments = houseApartments.Where(x => x.HouseId == id);
            return Ok(specialHouseApartments);
        }
    }
}
