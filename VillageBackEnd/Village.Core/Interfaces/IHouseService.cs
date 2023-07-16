using Microsoft.AspNetCore.Mvc;
using Village.Core.Models;

namespace Village.Core.Interfaces
{
    public interface IHouseService : IEntityService<House>
    {
        House UpdateHouse(House house, int id);
        IActionResult DeleteHouse(int id);
    }
}
