using Microsoft.AspNetCore.Mvc;
using Village.Core.Models;
using Village.Services.Interfaces;

namespace Village.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class inhabitantController : ControllerBase
    {
        private readonly IInhabitantService _inhabitantService;

        public inhabitantController(IInhabitantService inhabitantService)
        {
            _inhabitantService = inhabitantService;
        }

        [Route("add")]
        [HttpPut]
        public IActionResult AddInhabitant(Inhabitant inhabitant)
        {
            _inhabitantService.Create(inhabitant);

            return Created("", inhabitant); // Ok();
        }

        [Route("update")]
        [HttpPut]
        public IActionResult UpdateInhabitant(Inhabitant inhabitant, int id)
        {
            var inhabitantToUpdate = _inhabitantService.GetById(id);
            inhabitantToUpdate.Name = inhabitant.Name;
            inhabitantToUpdate.Lastname = inhabitant.Lastname;
            inhabitantToUpdate.PersonalCode = inhabitant.PersonalCode;
            inhabitantToUpdate.DateOfBirth = inhabitant.DateOfBirth;
            inhabitantToUpdate.Phone = inhabitant.Phone;
            inhabitantToUpdate.Email = inhabitant.Email;
            inhabitantToUpdate.IdOfApartment = inhabitant.IdOfApartment;
            inhabitantToUpdate.IsOwner = inhabitant.IsOwner;

            _inhabitantService.Update(inhabitantToUpdate);

            return Created("", inhabitantToUpdate); // Ok();
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteInhabitant(int id)
        {
            var inhabitantToDelete = _inhabitantService.GetById(id);

            if (inhabitantToDelete == null)
            {
                return NotFound();
            }
            _inhabitantService.Delete(inhabitantToDelete);

            return Ok($"Inhabitant with id {id} was deleted!");
        }

        [Route("all")]
        [HttpGet]
        public IActionResult GetAllInhabitants()
        {
            var inhabitants = _inhabitantService.GetAll();
            return Ok(inhabitants);
        }
    }
}
