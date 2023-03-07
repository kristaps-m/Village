namespace Village.Core.Models
{
    public class House : Entity
    {
        public int Number { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Postcode { get; set; }
    }
}
