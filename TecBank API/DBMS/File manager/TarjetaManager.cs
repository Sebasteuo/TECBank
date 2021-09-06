using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TecBank_API.Models;
using Newtonsoft.Json;
using System.IO;


namespace TecBank_API.DBMS.File_manager
{
    public class TarjetaManager
    {
        public List<Tarjeta> ListaDeTarjeta= new List<Tarjeta>();
        private string path = "C:/Users/Bojorge/Documents/BasesDeDatos/Tareas/TecBank API/TecBank-API/TecBank API/DBMS/Data/Tarjetas.json";
        public TarjetaManager()
        {
            listarTarjetas();
        }
        public List<Tarjeta> listarTarjetas()
        {
            using (StreamReader file = File.OpenText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                this.ListaDeTarjeta = (List<Tarjeta>)serializer.Deserialize(file, typeof(List<Tarjeta>));
            }
            return this.ListaDeTarjeta;
        }
        private void guardarTarjeta()
        {
            using (StreamWriter file = File.CreateText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(file, this.ListaDeTarjeta);
            }
        }

        public void agregarTarjeta(int NumeroTarjeta, string FechaDeExpiracion, string Tipo, int Saldo, int NumeroCuenta, int CodigoSeguridad)
        {
            //crea clase respectiva
            Tarjeta
            item = new Tarjeta();
            item.NumeroTarjeta = NumeroTarjeta;
            item.FechaDeExpiracion = FechaDeExpiracion;
            item.Tipo = Tipo;
            item.Saldo = Saldo;
            item.NumeroCuenta = NumeroCuenta;
            item.CodigoSeguridad = CodigoSeguridad;


            this.ListaDeTarjeta.Add(item);
            guardarTarjeta();
        }
        public void eliminarTarjeta(int NumeroTarjeta)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeTarjeta.Count; i++)
            {
                if (this.ListaDeTarjeta[i].NumeroTarjeta == NumeroTarjeta)
                {
                    this.ListaDeTarjeta.RemoveAt(index);
                    index = i;
                    break;
                }
            }
            guardarTarjeta();
        }

        public Tarjeta consultarTarjeta(int NumeroTarjeta)//valor llave
        {
            Tarjeta
            item = new Tarjeta();
            int index = 0;
            for (int i = 0; i < this.ListaDeTarjeta.Count; i++)
            {
                if (this.ListaDeTarjeta[i].NumeroTarjeta == NumeroTarjeta)//llave== llave
                {
                    index = i;
                    break;
                }
            }
            item = this.ListaDeTarjeta[index];//lista de item
            return item;

        }

        public void actualizarTarjeta(int llave, string atributoAcambiar, int ValorParaCambiar)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeTarjeta.Count; i++)
            {
                if (this.ListaDeTarjeta[i].NumeroTarjeta == llave)//llave== llave
                {
                    index = i;
                    break;
                }
            }
            Tarjeta
            item = this.ListaDeTarjeta[index];
            switch (atributoAcambiar)
            {
                case "Saldo":
                    item.Saldo = ValorParaCambiar;
                    break;
                case "NumeroTarjeta":
                    item.NumeroTarjeta = ValorParaCambiar;
                    break;
                case "CodigoSeguridad":
                    item.CodigoSeguridad = ValorParaCambiar;
                    break;
                case "NumeroCuenta":
                    item.NumeroCuenta = ValorParaCambiar;
                    break;
                default:
                    break;

            }
            guardarTarjeta();//guarde el item
        }
        public void actualizarTarjeta(int llave, string atributoAcambiar, string ValorParaCambiar)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeTarjeta.Count; i++)
            {
                if (this.ListaDeTarjeta[i].NumeroTarjeta == llave)//llave== llave
                {
                    index = i;
                    break;
                }
            }
            Tarjeta
            item = this.ListaDeTarjeta[index];
            switch (atributoAcambiar)
            {
                case "FechaDeExpiracion":
                    item.FechaDeExpiracion = ValorParaCambiar;
                    break;
                case "Tipo":
                    item.Tipo = ValorParaCambiar;
                    break;
                default:
                    break;

            }
            guardarTarjeta();//guarde el item
        }
    }//fin de clase
}
