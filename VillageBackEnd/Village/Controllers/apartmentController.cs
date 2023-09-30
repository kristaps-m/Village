using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Village.Core.Models;
using Village.Core.ModelsDTO;
using Village.Core.Interfaces;
using System.Data;

namespace Village.Controllers
{
    [Route("api/apartment")]
    [ApiController]
    [Authorize(Roles = "Resident,Manager")]
    public class ApartmentController : ControllerBase
    {
        private readonly IApartmentService _apartmenService;
        private readonly IMapper _mapper;

        public ApartmentController(IApartmentService apartmenService,
		IMapper mapper)
        {
            _apartmenService = apartmenService;
            _mapper = mapper;
        }

        [Route("add")]
        [HttpPost]
        [Authorize(Roles = "Manager")]
        public IActionResult AddApartment(Apartment apartment)
        {
            _apartmenService.Create(apartment);

            return Created("", apartment);
        }

        [Route("add/house/{existingHouseId}")]
        [Authorize(Roles = "Manager")]
        [HttpPost]
        public IActionResult AddApartmentInsideHouse(Apartment apartment, int existingHouseId)
        {
            var created = _apartmenService.AddApartmentInsideHouse(apartment, existingHouseId);

            return created;
        }

        [Route("update")]
        [Authorize(Roles = "Manager")]
        [HttpPut]
        public IActionResult UpdateApartment(Apartment apartment, int id)
        {
            var apartmentToUpdate = _apartmenService.UpdateApartment(apartment, id);

            return Created("", apartmentToUpdate);
        }

        [Route("{id}")]
        [Authorize(Roles = "Manager")]
        [HttpDelete]
        public IActionResult DeleteApartment(int id)
        {
            var isApartmentFoundAndDeleted = _apartmenService.DeleteApartment(id);

            return isApartmentFoundAndDeleted;
        }

        [Route("del-apartment-houseapartment/{apartmentId}")]
        [HttpDelete]
        [Authorize(Roles = "Manager")]
        public IActionResult DeleteApartmentAndHouseApartment(int apartmentId)
        {
            var isApartmentFoundAndDeleted = _apartmenService
                .DeleteApartmentAndHouseApartment(apartmentId);

            return isApartmentFoundAndDeleted;
        }

        [Route("all")]
        [HttpGet]
        public IActionResult GetAllApartments()
        {
            var allApartments = _apartmenService.GetAll();
            var apartmentsDTOs = allApartments.Select(a => _mapper.Map<ApartmentDTO>(a));

            return Ok(apartmentsDTOs);
        }
		
		[Route("house/{id}")]
        [HttpGet]
        public IActionResult GetAllSpecialApartments(int id)
        {
            var specialApartments = _apartmenService.GetAllSpecialApartments(id);
            var apartmentsDTOs = specialApartments.Select(sa => _mapper.Map<ApartmentDTO>(sa));

            return Ok(apartmentsDTOs);
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetOneApartment(int id)
        {
            var apartmen = _apartmenService.GetById(id);

            if (apartmen == null)
            {
                return NotFound();
            }

            var apartmenDTO = _mapper.Map<ApartmentDTO>(apartmen);

            return Ok(apartmenDTO);
        }
    }
}
