using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TecBank_API.DBMS.File_manager
{
    public class Mora
    {
        public List<string> datos = new List<string>();
        public List<string> Reporte(int cedula)
        {
            ClienteManager climan = new ClienteManager();

            string nombre = climan.consultarCliente(cedula).nombre;
            string ape1 = climan.consultarCliente(cedula).apellido_1;
            string ape2 = climan.consultarCliente(cedula).apellido_2;

            Random r = new Random();
            int NoPrestamo = r.Next(1, 300);
            string prestamo = NoPrestamo.ToString();
            int cuotas_vencidas = r.Next(2, 10);
            string cuotas = cuotas_vencidas.ToString();
            int deuda = r.Next(10000, 99000);
            string monto = deuda.ToString();

            this.datos.Add(nombre);
            this.datos.Add(ape1);
            this.datos.Add(ape2);
            this.datos.Add(prestamo);
            this.datos.Add(cuotas);
            this.datos.Add(monto);

            return this.datos;
        }


    }
}
