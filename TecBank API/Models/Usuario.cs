using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TecBank_API.Models
{
    public class Usuario
    {
        public string user { get; set; }
        public string password { get; set; }
        public string tipo { get; set; }
        public int cedula { get; set; }

    }
}
