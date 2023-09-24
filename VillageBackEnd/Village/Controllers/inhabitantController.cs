using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Village.Core.Interfaces;
using Village.Core.Models;
using Village.Core.ModelsDTO;

namespace Village.Controllers
{
    [Route("inhabitant")]
    [ApiController]
    [Authorize(Roles = "Resident,Manager")]
    public class InhabitantController : ControllerBase
    {
        private readonly IInhabitantService _inhabitantService;
        private readonly IMapper _mapper;

        public InhabitantController(IInhabitantService inhabitantService, IMapper mapper)
        {
            _inhabitantService = inhabitantService;
            _mapper = mapper;
        }

        [Route("add")]
        [HttpPost]
        [Authorize(Roles = "Manager")]
        public IActionResult AddInhabitant(Inhabitant inhabitant)
        {
            _inhabitantService.Create(inhabitant);

            return Created("", inhabitant);
        }

        [Route("add/apartment")]
        [HttpPost]
        [Authorize(Roles = "Manager")]
        public IActionResult AddInhabitantInsideApartment(Inhabitant inhabitant, int existingApartmentId)
        {
            var created = _inhabitantService.AddInhabitantInsideApartment(inhabitant, existingApartmentId);

            return created;
        }

        [Route("update")]
        [HttpPut]
        [Authorize(Roles = "Manager")]
        public IActionResult UpdateInhabitant(Inhabitant inhabitant, int id)
        {
            var inhabitantToUpdate = _inhabitantService.UpdateInhabitant(inhabitant, id);		
			
            return Created("", inhabitantToUpdate);
        }

        [Route("{id}")]
        [HttpDelete]
        [Authorize(Roles = "Manager")]
        public IActionResult DeleteInhabitant(int id)
        {
            var isInhabitantFoundAndDeleted = _inhabitantService.DeleteInhabitant(id);

            return isInhabitantFoundAndDeleted;
        }

        [Route("all")]
        [HttpGet]
        public IActionResult GetAllInhabitants()
        {
            var allInhabitants = _inhabitantService.GetAll();
            var inhabitantsDTOs = allInhabitants.Select(i => _mapper.Map<InhabitantDTO>(i));

            return Ok(allInhabitants);
        }

        [Route("apartment/{incomingApartmentId}")]
        [HttpGet]
        public IActionResult GetAllSpecialInhabitants(int incomingApartmentId)
        {
            var inhabitantsFilteredByApartmentId = _inhabitantService.GetAllSpecialInhabitants(incomingApartmentId);
            var inhabitantDTOs = inhabitantsFilteredByApartmentId.Select(si => _mapper.Map<InhabitantDTO>(si));

            return Ok(inhabitantDTOs);
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
