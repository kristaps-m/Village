using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Village.Core.Models
{
    public class Apartment : Entity
    {
        public int Number { get; set; }
        public int Floor { get; set; }
        public int NumberOfRooms { get; set; }
        public int Population { get; set; }
        public double FullArea { get; set; }
        public double LivingSpace { get; set; }
    }
}
