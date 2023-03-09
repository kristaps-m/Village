﻿using Microsoft.AspNetCore.Mvc;
using Village.Core.Models;
using Village.Services.Interfaces;

namespace Village.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class apartmentinhabitantController : ControllerBase
    {
        private readonly IApartmentInhabitantService _apartmentInhabitantService;

        public apartmentinhabitantController(IApartmentInhabitantService apartmentInhabitantService)
        {
            _apartmentInhabitantService = apartmentInhabitantService;
        }

        [Route("add")]
        [HttpPut]
        public IActionResult AddApartmentInhabitant(ApartmentInhabitant apartmentInhabitant)
        {
            _apartmentInhabitantService.Create(apartmentInhabitant);

            return Created("", apartmentInhabitant); // Ok();
        }

        [Route("update")]
        [HttpPut]
        public IActionResult UpdateApartmentInhabitant(ApartmentInhabitant apartmentInhabitant, int id)
        {
            var apartmentInhabitantToUpdate = _apartmentInhabitantService.GetById(id);
            apartmentInhabitantToUpdate.ApartmentId = apartmentInhabitant.ApartmentId;
            apartmentInhabitantToUpdate.InhabitantId = apartmentInhabitant.InhabitantId;
            _apartmentInhabitantService.Update(apartmentInhabitantToUpdate);

            return Created("", apartmentInhabitantToUpdate); // Ok();
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteApartmentInhabitant(int id)
        {
            var apartmentInhabitantToDelete = _apartmentInhabitantService.GetById(id);

            if (apartmentInhabitantToDelete == null)
            {
                return NotFound();
            }
            _apartmentInhabitantService.Delete(apartmentInhabitantToDelete);

            return Ok($"ApartmentInhabitant with id {id} was deleted!");
        }

        [Route("all")]
        [HttpGet]
        public IActionResult GetAllApartmentInhabitants()
        {
            var apartmentInhabitants = _apartmentInhabitantService.GetAll();
            return Ok(apartmentInhabitants);
        }
    }
}