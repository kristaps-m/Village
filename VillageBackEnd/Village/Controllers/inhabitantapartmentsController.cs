using Microsoft.AspNetCore.Mvc;
using Village.Core.Models;
using Village.Services.Interfaces;

namespace Village.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class inhabitantapartmentsController : ControllerBase
    {
        private readonly IInhabitantApartmentService _inhabitantApartmentService;

        public inhabitantapartmentsController(IInhabitantApartmentService inhabitantApartmentService)
        {
            _inhabitantApartmentService = inhabitantApartmentService;
        }

        [Route("add")]
        [HttpPut]
        public IActionResult AddInhabitantApartment(InhabitantApartment inhabitantApartment)
        {
            _inhabitantApartmentService.Create(inhabitantApartment);

            return Created("", inhabitantApartment); // Ok();
        }

        [Route("update")]
        [HttpPut]
        public IActionResult UpdateInhabitantApartment(InhabitantApartment inhabitantApartment, int id)
        {
            var inhabitantApartmentToUpdate = _inhabitantApartmentService.GetById(id);
            inhabitantApartmentToUpdate.InhabitantId = inhabitantApartment.InhabitantId;
            inhabitantApartmentToUpdate.ApartmentId = inhabitantApartment.ApartmentId;

            _inhabitantApartmentService.Update(inhabitantApartmentToUpdate);

            return Created("", inhabitantApartmentToUpdate); // Ok();
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteInhabitantApartment(int id)
        {
            var inhabitantApartmentToDelete = _inhabitantApartmentService.GetById(id);

            if (inhabitantApartmentToDelete == null)
            {
                return NotFound();
            }
            _inhabitantApartmentService.Delete(inhabitantApartmentToDelete);

            return Ok($"InhabitantApartment with id {id} was deleted!");
        }

        [Route("all")]
        [HttpGet]
        public IActionResult GetAllInhabitantApartments()
        {
            var inhabitantApartments = _inhabitantApartmentService.GetAll();
            return Ok(inhabitantApartments);
        }
    }
}
