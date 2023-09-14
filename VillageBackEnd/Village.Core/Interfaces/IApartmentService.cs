using Microsoft.AspNetCore.Mvc;
using Village.Core.Models;

namespace Village.Core.Interfaces
{
    public interface IApartmentService : IEntityService<Apartment>
    {
        List<Apartment> GetAllSpecialApartments(int id);
        Apartment UpdateApartment(Apartment apartment, int id);
        IActionResult DeleteApartment(int id);
        IActionResult AddApartmentInsideHouse(Apartment apartment, int existingHouseId);
    }
}