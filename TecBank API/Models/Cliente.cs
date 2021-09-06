using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TecBank_API.Models
{
    public class Cliente
    {
        public int cedula { get; set; }
        public string nombre { get; set; }
        public string apellido_1 { get; set; }
        public string apellido_2 { get; set; }
        public string usuario { get; set; }
        public string password { get; set; }
        public string provincia { get; set; }
        public string canton { get; set; }
        public string distrito { get; set; }
        public string telefono { get; set; }
        public string ingreso_mensual { get; set; }
        public string tipo { get; set; }


    }
}
