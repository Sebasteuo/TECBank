using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TecBank_API.Models;
using Newtonsoft.Json;
using System.IO;

namespace TecBank_API.DBMS.File_manager
{
    public class EmpleadoManager
    {
        public List<Empleado> ListaDeEmpleado = new List<Empleado>();
        private string path = "C:/Users/Bojorge/Documents/BasesDeDatos/Tareas/TecBank API/TecBank-API/TecBank API/DBMS/Data/empleados.json";
        public EmpleadoManager()
        {
            listarEmpleados();
        }
        public List<Empleado> listarEmpleados()
        {
            using (StreamReader file = File.OpenText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                this.ListaDeEmpleado = (List<Empleado>)serializer.Deserialize(file, typeof(List<Empleado>));
            }
            return this.ListaDeEmpleado;
        }
        private void guardarEmpleado()
        {
            using (StreamWriter file = File.CreateText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(file, this.ListaDeEmpleado);
            }
        }

        public void agregarEmpleado(int Cedula, string Nombre, string Apellido_1, string Apellido_2, int IdEmpleado, string Rol, string FechaDeNacimiento)
        {
            //crea clase respectiva
            Empleado item = new Empleado();
            item.Cedula = Cedula;
            item.Nombre = Nombre;
            item.Apellido_1 = Apellido_1;
            item.Apellido_2 = Apellido_2;
            item.IdEmpleado = IdEmpleado;
            item.Rol = Rol;
            item.FechaDeNacimiento = FechaDeNacimiento;
            this.ListaDeEmpleado.Add(item);
            guardarEmpleado();
        }
        public void eliminarEmpleado(int IdEmpleado)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeEmpleado.Count; i++)
            {
                if (this.ListaDeEmpleado[i].IdEmpleado == IdEmpleado)
                {
                    this.ListaDeEmpleado.RemoveAt(index);
                    index = i;
                    break;
                }
            }
            guardarEmpleado();
        }

        public Empleado consultarEmpleado(int IdEmpleado)//valor llave
        {
            Empleado item = new Empleado();
            int index = 0;
            for (int i = 0; i < this.ListaDeEmpleado.Count; i++)
            {
                if (this.ListaDeEmpleado[i].IdEmpleado == IdEmpleado)//llave== llave
                {
                    index = i;
                    break;
                }
            }
            item = this.ListaDeEmpleado[index];//lista de item
            return item;

        }

        public void actualizarEmpleado(int llave, string atributoAcambiar, string ValorParaCambiar)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeEmpleado.Count; i++)
            {
                if (this.ListaDeEmpleado[i].IdEmpleado == llave)//llave== llave
                {
                    index = i;
                    break;
                }
            }
            Empleado item = this.ListaDeEmpleado[index];
            switch (atributoAcambiar)
            {
               
                case "Nombre":
                    item.Nombre = ValorParaCambiar;
                    break;
                case "Apellido_1":
                    item.Apellido_1 = ValorParaCambiar;
                    break;
                case "Apellido_2":
                    item.Apellido_2 = ValorParaCambiar;
                    break;
                case "Rol":
                    item.Rol = ValorParaCambiar;
                    break;
                case "FechaDeNacimiento":
                    item.FechaDeNacimiento = ValorParaCambiar;
                    break;
                default:
                    break;

            }
            guardarEmpleado();//guarde el item
        }

        public void actualizarEmpleado(int llave, string atributoAcambiar, int ValorParaCambiar)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeEmpleado.Count; i++)
            {
                if (this.ListaDeEmpleado[i].IdEmpleado == llave)//llave== llave
                {
                    index = i;
                    break;
                }
            }
            Empleado item = this.ListaDeEmpleado[index];
            switch (atributoAcambiar)
            {
                case "Cedula":
                    item.Cedula = ValorParaCambiar;
                    break;
                case "IdEmpleado":
                    item.IdEmpleado = ValorParaCambiar;
                    break;
                default:
                    break;

            }
            guardarEmpleado();//guarde el item
        }

        //fin clase
    }
}
