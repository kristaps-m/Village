using AutoMapper;
using Village.Core.Models;

namespace Village
{
    public class AutoMapperConfig
    {
        public static IMapper CreateMapper()
        {
            var config = new MapperConfiguration(
                cfg =>
                {
                    // < Source , Destination >
                    cfg.CreateMap<House, HouseDTO>();
                    cfg.CreateMap<HouseDTO, House>();

                    cfg.CreateMap<Apartment, ApartmentDTO>();
                    cfg.CreateMap<ApartmentDTO, Apartment>();

                    cfg.CreateMap<Inhabitant, InhabitantDTO>();
                    cfg.CreateMap<InhabitantDTO, Inhabitant>();
                });

            return config.CreateMapper();
        }
    }
}
