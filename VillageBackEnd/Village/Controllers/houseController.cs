﻿using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Village.Core.Interfaces;
using Village.Core.Models;
using Village.Core.ModelsDTO;

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
            var houseToUpdate = _houseService.UpdateHouse(house, house.Id);

            return Created("", houseToUpdate);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteHouse(int id)
        {
            var isHouseFoundAndDeleted = _houseService.DeleteHouse(id);

            return isHouseFoundAndDeleted;
        }

        // [Route("all-houses")]
        // [HttpGet]
        // public IActionResult GetAllHome()
        // {
            // var home = _houseService.GetAll();
            // var houseDTOs = home.Select(h => _mapper.Map<HouseDTO>(h));

            // return Ok(houseDTOs);
        // }
		
		[Route("all-houses")]
		[HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAllHome()
		{
			await Task.Delay(2000); // 2-second delay

			var home = _houseService.GetAll();
			var houseDTOs = home.Select(h => _mapper.Map<HouseDTO>(h));

			return Ok(houseDTOs);
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
