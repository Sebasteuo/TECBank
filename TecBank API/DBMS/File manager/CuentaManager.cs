using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TecBank_API.Models;
using Newtonsoft.Json;
using System.IO;

namespace TecBank_API.DBMS.File_manager
{
    public class CuentaManager
    {
        public List<Cuenta> ListaDeCuenta= new List<Cuenta>();
        private string path = "C:/GitHub/TECbank/TecBank API/DBMS/Data/cuentas.json";
        public CuentaManager()
        {
            listarCuenta();
        }
        public List<Cuenta> listarCuenta()
        {
            using (StreamReader file = File.OpenText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                this.ListaDeCuenta = (List<Cuenta>)serializer.Deserialize(file, typeof(List<Cuenta>));
            }
            return this.ListaDeCuenta;
        }
        private void guardarCuenta()
        {
            using (StreamWriter file = File.CreateText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(file, this.ListaDeCuenta);
            }
        }

        public void agregarCuenta(int Saldo, int Tipo, int Numero, string Descripcion, int Moneda, int CedulaCliente, string UsuarioCliente, int NumeroCuenta)
        {
            //crea clase respectiva
            Cuenta    item = new Cuenta();
            item.Saldo = Saldo;
            item.Tipo = Tipo;
            item.Numero = Numero;
            item.Descripcion = Descripcion;
            item.Moneda = Moneda;
            item.CedulaCliente = CedulaCliente;
            item.UsuarioCliente = UsuarioCliente;
            item.NumeroCuenta = NumeroCuenta;
            this.ListaDeCuenta.Add(item);
            guardarCuenta();
        }

        public void agregarCuenta(Cuenta cuenta)
        {
            this.ListaDeCuenta.Add(cuenta);
            guardarCuenta();
        }
        public void eliminarCuenta(int NumeroCuenta)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeCuenta.Count; i++)
            {
                if (this.ListaDeCuenta[i].NumeroCuenta == NumeroCuenta)
                {
                    index = i;
                    this.ListaDeCuenta.RemoveAt(index);
                    break;
                }
            }
            guardarCuenta();
        }

        public Cuenta consultarCuenta(int NumeroCuenta)//valor llave
        {
            Cuenta
            item = new Cuenta();
            int index = 0;
            for (int i = 0; i < this.ListaDeCuenta.Count; i++)
            {
                if (this.ListaDeCuenta[i].NumeroCuenta == NumeroCuenta)//llave== llave
                {
                    index = i;
                    break;
                }
            }
            item = this.ListaDeCuenta[index];//lista de item
            return item;

        }

        public void actualizarCuenta(int llave, string atributoAcambiar, string ValorParaCambiar)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeCuenta.Count; i++)
            {
                if (this.ListaDeCuenta[i].NumeroCuenta == llave)//llave== llave
                {
                    index = i;
                    break;
                }
            }
            Cuenta item = this.ListaDeCuenta[index];
            switch (atributoAcambiar)
            {
                case "Tipo":
                    item.Tipo = Int32.Parse(ValorParaCambiar);
                    break;
                case "Moneda":
                    item.Moneda = Int32.Parse(ValorParaCambiar);
                    break;
                case "UsuarioCliente":
                    item.UsuarioCliente = ValorParaCambiar;
                    break;
                case "Descripcion":
                    item.Descripcion = ValorParaCambiar;
                    break;
                default:
                    break;

            }
            guardarCuenta();//guarde el item
        }

        public void actualizarCuenta(Cuenta cuenta)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeCuenta.Count; i++)
            {
                if (this.ListaDeCuenta[i].NumeroCuenta == cuenta.NumeroCuenta)
                {
                    index = i;
                    break;
                }
            }
            this.ListaDeCuenta[index] = cuenta;

            guardarCuenta();
        }

        public List<Cuenta> consultarCuentaPorCliente(int CedulaCliente)//valor llave
        {
            List<Cuenta> Lista = new List<Cuenta>();
            Cuenta item = new Cuenta();
            int index = 0;
            for (int i = 0; i < this.ListaDeCuenta.Count; i++)
            {
                if (this.ListaDeCuenta[i].CedulaCliente == CedulaCliente)//llave== llave
                {
                    Lista.Add(this.ListaDeCuenta[i]);
               
                }
            }
       

            
            return Lista;

        }


    }
}
