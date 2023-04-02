using Village.Core.Models;

namespace Village.Core.ModelsDTO
{
    public class HouseDTO
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Postcode { get; set; }
        public HouseDTO(int id, int number, string street, string city, string country)
        {
            Id = id;
            Number = number;
            Street = street;
            City = city;
            Country = country;
        }

        public HouseDTO(House h)
        {
            Id = h.Id;
            Number = h.Number;
            Street = h.Street;
            City = h.City;
            Country = h.Country;
        }
    }
}
