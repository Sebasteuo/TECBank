using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TecBank_API.Models
{
    public class Cuenta
    {
        public int Saldo{ get; set; }
        public int Numero { get; set; }
        public string Descripcion { get; set; }
        public int CedulaCliente { get; set; }
        public int NumeroCuenta { get; set; }
        public string Tipo{ get; set; }
        public string Moneda { get; set; }
        public string UsuarioCliente { get; set; }
        
        //llave
    }
}
