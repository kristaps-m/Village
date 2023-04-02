﻿using Village.Core.Models;

namespace Village.Services.Interfaces
{
    public interface IInhabitantService: IEntityService<Inhabitant>
    {
        public List<Inhabitant> GetAllSpecialInhabitants(int id);
    }
}
