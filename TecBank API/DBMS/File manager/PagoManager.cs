using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TecBank_API.Models;
using Newtonsoft.Json;
using System.IO;

namespace TecBank_API.DBMS.File_manager
{
    public class PagoManager
    {
        public List<Pago> ListaDePago= new List<Pago>();
        private string path = "C:/GitHub/TECbank/TecBank API/DBMS/Data/pagos.json";
        public PagoManager()
        {
            listarPagos();
        }
        public List<Pago> listarPagos()
        {
            using (StreamReader file = File.OpenText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                this.ListaDePago = (List<Pago>)serializer.Deserialize(file, typeof(List<Pago>));
            }
            return this.ListaDePago;
        }
        private void guardarPago()
        {
            using (StreamWriter file = File.CreateText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(file, this.ListaDePago);
            }
        }

        public void agregarPago(int IdPago, string Monto, string FechaPago, string NumeroCuentaDestino, string NumeroDeCuenta)
        {
            //crea clase respectiva
            Pago item = new Pago();
            item.IdPago = IdPago;
            item.Monto = Monto;
            item.FechaPago = FechaPago;
            item.NumeroDeCuenta = NumeroDeCuenta;
            item.NumeroCuentaDestino = NumeroCuentaDestino;
            this.ListaDePago.Add(item);
            guardarPago();
        }

        public void agregarPago(Pago pago)
        {
            this.ListaDePago.Add(pago);
            guardarPago();
        }

        public void eliminarPago(int IdPago)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDePago.Count; i++)
            {
                if (this.ListaDePago[i].IdPago == IdPago)
                {
                    index = i;
                    this.ListaDePago.RemoveAt(index);
                    break;
                }
            }
            guardarPago();
        }

        public Pago consultarPago(int IdPago)//valor llave
        {
            Pago item = new Pago();
            int index = 0;
            for (int i = 0; i < this.ListaDePago.Count; i++)
            {
                if (this.ListaDePago[i].IdPago == IdPago)//llave== llave
                {
                    index = i;
                    break;
                }
            }
            item = this.ListaDePago[index];//lista de item
            return item;

        }


        public List<Pago> consultarPagoPorNumeroDeCuenta(string numeroDeCuenta)//valor llave
        {
            List<Pago> Lista = new List<Pago>();
            Cuenta item = new Cuenta();

            for (int i = 0; i < this.ListaDePago.Count; i++)
            {
                if (this.ListaDePago[i].NumeroDeCuenta == numeroDeCuenta)//llave== llave
                {
                    Lista.Add(this.ListaDePago[i]);

                }
            }

            return Lista;

        }
        public Pago consultarPagoPorCedula(string numeroDeCuenta)//valor llave
        {
            Pago item = new Pago();
            int index = 0;
            for (int i = 0; i < this.ListaDePago.Count; i++)
            {
                if (this.ListaDePago[i].NumeroDeCuenta == numeroDeCuenta)//llave== llave
                {
                    index = i;
                    break;
                }
            }
            item = this.ListaDePago[index];//lista de item
            return item;

        }

        public void actualizarPago(int llave, string atributoAcambiar, string ValorParaCambiar)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDePago.Count; i++)
            {
                if (this.ListaDePago[i].IdPago == llave)//llave== llave
                {
                    index = i;
                    break;
                }
            }
            Pago
            item = this.ListaDePago[index];
            switch (atributoAcambiar)
            {
                case "Monto":
                    item.Monto = ValorParaCambiar;
                    break;
                case "FechaPago":
                    item.FechaPago = ValorParaCambiar;
                    break;
                case "NumeroCuentaDestino":
                    item.NumeroCuentaDestino = ValorParaCambiar;
                    break;
                case "NumeroCuenta":
                    item.NumeroDeCuenta = ValorParaCambiar;
                    break;
                default:
                    break;

            }
            guardarPago();//guarde el item
        }

        public void actualizarPago(Pago pago)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDePago.Count; i++)
            {
                if (this.ListaDePago[i].IdPago == pago.IdPago)
                {
                    index = i;
                    break;
                }
            }
            this.ListaDePago[index] = pago;

            guardarPago();
        }

        //fin clase
    }
}
