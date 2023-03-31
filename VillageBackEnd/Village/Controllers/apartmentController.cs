using AutoMapper;
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
		private readonly IHouseApartmentService _houseApartmentService;
        private readonly IMapper _mapper;

        public apartmentController(IApartmentService apartmenService,
		IMapper mapper, IHouseApartmentService houseApartmentService)
        {
            _apartmenService = apartmenService;
			_houseApartmentService = houseApartmentService;
            _mapper = mapper;
        }

        [Route("add")]
        [HttpPost]
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
            //apartmentToUpdate.FullArea = apartment.FullArea;
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
		
		[Route("house/{id}")]
        [HttpGet]
        public IActionResult GetAllSpecialApartments(int id)
        {
            var houseApartmentsIds = new List<int>() { };

            foreach (var houseApartment in _houseApartmentService.GetAll())
            {
                if (houseApartment.HouseId == id)
                {
                    houseApartmentsIds.Add(houseApartment.ApartmentId);
                }
            }

            var apartments = _apartmenService.GetAll().Where(x => houseApartmentsIds.Contains(x.Id));

            return Ok(apartments);
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
