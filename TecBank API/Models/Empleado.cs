using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TecBank_API.Models
{
    public class Empleado
    {
        public int Cedula { get; set; }
        public string  Nombre { get; set; }
        public string Apellido_1 { get; set; }
        public string Apellido_2 { get; set; }
        public int IdEmpleado { get; set; }
        public string Rol { get; set; }
        public string FechaDeNacimiento { get; set; }
    }
}
