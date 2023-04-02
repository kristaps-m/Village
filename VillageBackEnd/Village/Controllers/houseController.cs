using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Village.Core.Models;
using Village.Core.ModelsDTO;
using Village.Services.Interfaces;

namespace Village.Controllers
{
    [Route("house")]
    [ApiController]
    public class HouseController : ControllerBase
    {
        private readonly IHouseService _houseService;
        private readonly IMapper _mapper;

        public HouseController(IHouseService houseService, IMapper mapper)
        {
            _houseService = houseService;
            _mapper = mapper;
        }

        [Route("add")]
        [HttpPost]
        public IActionResult AddHouse(House house)
        {
            _houseService.Create(house);

            //return Created("", house);
			return Ok(_houseService.GetAll());
        }

        [Route("update")]
        [HttpPut]
        public IActionResult UpdateHouse(House house)
        {
            var houseToUpdate = _houseService.GetById(house.Id);
            houseToUpdate.Number = house.Number;
            houseToUpdate.Street = house.Street;
            houseToUpdate.City = house.City;
            houseToUpdate.Country = house.Country;
            houseToUpdate.Postcode = house.Postcode;
            _houseService.Update(houseToUpdate);

            return Created("", houseToUpdate);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteHouse(int id)
        {
            var houseToDelete = _houseService.GetById(id);

            if (houseToDelete == null)
            {
                return NotFound();
            }
            _houseService.Delete(houseToDelete);

            return Ok($"House with id {id} was deleted!");
        }

        [Route("all-houses")]
        [HttpGet]
        public IActionResult GetAllHome()
        {
            var home = _houseService.GetAll();
            var houseDTOs = home.Select(h => _mapper.Map<HouseDTO>(h));

            return Ok(home);
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetOneHouse(int id)
        {
            var house = _houseService.GetById(id);            

            if (house == null)
            {
                return NotFound();
            }

            var houseDTO = _mapper.Map<HouseDTO>(house);

            return Ok(houseDTO);
        }
    }
}
