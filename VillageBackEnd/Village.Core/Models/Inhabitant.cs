namespace Village.Core.Models
{
    public class Inhabitant : Entity
    {
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string PersonalCode { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        // IdOfApartment = Connection with the apartment where the resident lives
        public int IdOfApartment { get; set; }
        public bool IsOwner { get; set; }
    }
}
