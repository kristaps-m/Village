﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Village.Core.Models
{
    public class InhabitantApartment : Entity
    {
        public int InhabitantId { get; set; }
        public int ApartmentId { get; set; }
    }
}
