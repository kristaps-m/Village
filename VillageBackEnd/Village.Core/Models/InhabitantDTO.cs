namespace Village.Core.Models
{
    public class InhabitantDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        //public string PersonalCode { get; set; }
        public DateTime DateOfBirth { get; set; }
        //public string Phone { get; set; }
        //public string Email { get; set; }
        // IdOfApartment = Connection with the apartment where the resident lives
        public int IdOfApartment { get; set; }
        public bool IsOwner { get; set; }

        public InhabitantDTO(int id, string name, string lastname,
            DateTime dateOfBirth, int idOfApartment, bool isOwner)
        {
            Id = id;
            Name = name;
            Lastname = lastname;
            DateOfBirth = dateOfBirth;
            IdOfApartment = idOfApartment;
            IsOwner = isOwner;
        }
    }
}
