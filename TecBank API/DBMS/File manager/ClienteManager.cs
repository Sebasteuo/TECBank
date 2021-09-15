using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json.Linq;
using TecBank_API.Models;
using Newtonsoft.Json;


namespace TecBank_API.DBMS.File_manager
{
    public class ClienteManager
    {

        public List<Cliente> ListaDeClientes = new List<Cliente>();
        private string path = "C:/GitHub/TECbank/TecBank API/DBMS/Data/clientes.json";

        public ClienteManager()
        {
            listarClientes();
        }

        private void guardarCliente()
        {
            using (StreamWriter file = File.CreateText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(file, this.ListaDeClientes);
            }
        }



        public List<Cliente> listarClientes()
        {
            using (StreamReader file = File.OpenText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                this.ListaDeClientes = (List<Cliente>)serializer.Deserialize(file, typeof(List<Cliente>));
            }
            return this.ListaDeClientes;
        }

        public void agregarCliente(int cedula, string nombre, string apellido_1, string apellido_2, string usuario, string password, string provincia, string canton, string distrito, string telefono, string ingreso_mensual, string tipo)
        {
            Cliente cliente = new Cliente();

            cliente.cedula = cedula;
            cliente.nombre = nombre;
            cliente.apellido_1 = apellido_1;
            cliente.apellido_2 = apellido_2;
            cliente.usuario = usuario;
            cliente.password = password;
            cliente.provincia = provincia;
            cliente.canton = canton;
            cliente.distrito = distrito;
            cliente.telefono = telefono;
            cliente.ingreso_mensual = ingreso_mensual;
            cliente.tipo = tipo;

            this.ListaDeClientes.Add(cliente);
            guardarCliente();
        }

        public void agregarCliente(Cliente cliente)
        {
            this.ListaDeClientes.Add(cliente);
            guardarCliente();
        }
        public void eliminarCliente(int cedula)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeClientes.Count; i++)
            {
                if (this.ListaDeClientes[i].cedula == cedula)
                {
                    index = i;
                    this.ListaDeClientes.RemoveAt(index);
                    break;
                }
            }
            guardarCliente();
        }

        public Cliente consultarCliente(int cedula)
        {
            Cliente cli = new Cliente();
            int index = 0;
            for (int i = 0; i < this.ListaDeClientes.Count; i++)
            {
                if (this.ListaDeClientes[i].cedula == cedula)
                {
                    index = i;
                    break;
                }
            }
            cli = this.ListaDeClientes[index];
            return cli;
        }

        

        public void actualizarCliente(int llave, string atributoAcambiar, string ValorParaCambiar)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeClientes.Count; i++)
            {
                if (this.ListaDeClientes[i].cedula == llave)
                {
                    index = i;
                    break;
                }
            }
            Cliente cli = this.ListaDeClientes[index];
            switch (atributoAcambiar)
            {
                case "nombre":
                    cli.nombre = ValorParaCambiar;
                    break;
                case "apellido_1":
                    cli.apellido_1 = ValorParaCambiar;
                    break;
                case "apellido_2":
                    cli.apellido_2 = ValorParaCambiar;
                    break;
                case "usuario":
                    cli.usuario = ValorParaCambiar;
                    break;
                case "password":
                    cli.password = ValorParaCambiar;
                    break;
                case "provincia":
                    cli.provincia = ValorParaCambiar;
                    break;
                case "canton":
                    cli.canton = ValorParaCambiar;
                    break;
                case "distrito":
                    cli.distrito = ValorParaCambiar;
                    break;
                case "telefono":
                    cli.telefono = ValorParaCambiar;
                    break;
                case "ingreso_mensual":
                    cli.ingreso_mensual = ValorParaCambiar;
                    break;
                case "tipo":
                    cli.tipo = ValorParaCambiar;
                    break;
                default:
                    break;

            }
            guardarCliente();
        }

        public void actualizarCliente(Cliente cl)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeClientes.Count; i++)
            {
                if (this.ListaDeClientes[i].cedula == cl.cedula)
                {
                    index = i;
                    break;
                }
            }
            this.ListaDeClientes[index] = cl;

            guardarCliente();
        }

    }   


}
