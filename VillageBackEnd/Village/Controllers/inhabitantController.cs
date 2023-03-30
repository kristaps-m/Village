using Microsoft.AspNetCore.Mvc;
using Village.Core.Models;
using Village.Services.Interfaces;
using AutoMapper;

namespace Village.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class inhabitantController : ControllerBase
    {
        private readonly IInhabitantService _inhabitantService;
        private readonly IApartmentInhabitantService _apartmentInhabitantService;
        private readonly IMapper _mapper;

        public inhabitantController(IInhabitantService inhabitantService, IMapper mapper, IApartmentInhabitantService apartmentInhabitantService)
        {
            _inhabitantService = inhabitantService;
            _mapper = mapper;
            _apartmentInhabitantService = apartmentInhabitantService;
        }

        [Route("add")]
        [HttpPost]
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

        [Route("apartment/{id}")]
        [HttpGet]
        public IActionResult GetAllSpecialInhabitants(int id)
        {
            var apartmentInhabitantIds = new List<int>() { };

            foreach (var houseApartment in _apartmentInhabitantService.GetAll())
            {
                if (houseApartment.ApartmentId == id)
                {
                    apartmentInhabitantIds.Add(houseApartment.ApartmentId);
                }
            }

            var inhabitants = _inhabitantService.GetAll().Where(x => apartmentInhabitantIds.Contains(x.Id));

            return Ok(inhabitants);
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetOneInhabitant(int id)
        {
            var inhabitant = _inhabitantService.GetById(id);

            if (inhabitant == null)
            {
                return NotFound();
            }

            var inhabitantDTO = _mapper.Map<InhabitantDTO>(inhabitant);

            return Ok(inhabitantDTO);
        }
    }
}
