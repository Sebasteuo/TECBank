using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TecBank_API.Models
{
    public class Pago
    {
        public int IdPago { get; set; }
        public string Monto { get; set; }
        public string FechaPago { get; set; }
        public string NumeroCuentaDestino { get; set; }
        public string NumeroCuenta { get; set; }
    }
}
