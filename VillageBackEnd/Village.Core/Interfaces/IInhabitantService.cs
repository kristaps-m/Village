using Microsoft.AspNetCore.Mvc;
using Village.Core.Models;

namespace Village.Core.Interfaces
{
    public interface IInhabitantService: IEntityService<Inhabitant>
    {
        List<Inhabitant> GetAllSpecialInhabitants(int incomingApartmentId);
        Inhabitant UpdateInhabitant(Inhabitant inhabitant, int id);
        IActionResult DeleteInhabitant(int id);
        IActionResult AddInhabitantInsideApartment(Inhabitant inhabitant, int existingApartmentId);
        IActionResult DeleteInhabitanttAndApartmentInhabitant(int apartmentId);
    }
}
