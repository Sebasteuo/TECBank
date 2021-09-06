using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TecBank_API.Models
{
    public class Tarjeta
    {
        public int Saldo { get; set; }
        public string FechaDeExpiracion { get; set; }
        public string Tipo { get; set; }
        public int NumeroTarjeta { get; set; }
        public int CodigoSeguridad { get; set; }
        public int NumeroCuenta { get; set; }
    }

}
