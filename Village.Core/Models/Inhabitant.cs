using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Village.Core.Models
{
    public class Inhabitant
    {
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string PersonalCode { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}
