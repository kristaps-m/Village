namespace Village.Core.Models
{
    public class ApartmentDTO
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public int Floor { get; set; }
        public int NumberOfRooms { get; set; }
        public int Population { get; set; }
        //public double FullArea { get; set; }
        public double LivingSpace { get; set; }
        // IdOfHouse = Connection with the house where a particular apartment is located
        public int IdOfHouse { get; set; }

        public ApartmentDTO(int id, int number, int floor, int numberOfRooms,
            int population, double livingSpace, int idOfHouse)
        {
            Id = id;
            Number = number;
            Floor = floor;
            NumberOfRooms = numberOfRooms;
            Population = population;
            LivingSpace = livingSpace;
            IdOfHouse = idOfHouse;
        }
    }
}
