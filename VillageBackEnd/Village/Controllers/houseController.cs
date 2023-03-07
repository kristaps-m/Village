using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Village.Core.Models;
using Village.Services.Interfaces;

namespace Village.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class houseController : ControllerBase
    {
        private readonly IHouseService _houseService;
        private readonly IMapper _mapper;

        public houseController(IHouseService houseService, IMapper mapper)
        {
            _houseService = houseService;
            _mapper = mapper;
        }

        [Route("add")]
        [HttpPut]
        public IActionResult AddHouse(House house)
        {
            _houseService.Create(house);

            return Created("", house); // Ok();
        }

        [Route("update")]
        [HttpPut]
        public IActionResult UpdateHouse(House house, int id)
        {
            var houseToUpdate = _houseService.GetById(id);
            houseToUpdate.Number = house.Number;
            houseToUpdate.Street = house.Street;
            houseToUpdate.City = house.City;
            houseToUpdate.Country = house.Country;
            houseToUpdate.Postcode = house.Postcode;
            _houseService.Update(houseToUpdate);

            return Created("", houseToUpdate); // Ok();
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

        [Route("all")]
        [HttpGet]
        public IActionResult GetAllHome()
        {
            var home = _houseService.GetAll();
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
