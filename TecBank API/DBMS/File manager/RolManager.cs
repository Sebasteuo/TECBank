using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TecBank_API.Models;

namespace TecBank_API
{
    public class RolManager
    {
        public List<Rol> ListaDeRoles = new List<Rol>();
        private string path = "C:/Users/Bojorge/Documents/BasesDeDatos/Tareas/TecBank API/TecBank-API/TecBank API/DBMS/Data/roles.json";
        public RolManager()
        {
            listarRoles();
        }
        /**
         * A partir de un archivo json se obtiene la coleccion de items (rol) y los serilaiza en una lista
         * 
         * **/
        public List<Rol> listarRoles()
        {
            using (StreamReader file = File.OpenText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                this.ListaDeRoles = (List<Rol>)serializer.Deserialize(file, typeof(List<Rol>));
            }
            return this.ListaDeRoles; 
        }



        /**
         * Agrega un item (rol) en la lista de colecciones y lo guarda en el archivo json
         * 
         * **/
        public void agregarRol(string nombre, string descripcion)
        {
            Rol rol = new Rol();
            rol.Nombre = nombre;
            rol.Descripcion = descripcion;
            this.ListaDeRoles.Add(rol);
            guardarRol();
        }
        public void eliminarRol(int IdRol)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeRoles.Count; i++)
            {
                if (this.ListaDeRoles[i].IdRol == IdRol)
                {
                    this.ListaDeRoles.RemoveAt(index);
                    index = i;
                    break;
                }
            }

            guardarRol();
        }
        /**
         * guarda la lista en archivo json comoc una coleccion
         * 
         * **/
        private void guardarRol()
        {
            using (StreamWriter file = File.CreateText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(file, this.ListaDeRoles);
            }
        }

        public Rol consultarRol(int IdRol)
        {
           Rol rol = new Rol();
            int index = 0;
            for (int i = 0; i < this.ListaDeRoles.Count; i++)
            {
                if (this.ListaDeRoles[i].IdRol == IdRol)
                {
                    index = i;
                    break;
                }
            }
            rol = this.ListaDeRoles[index];
            return rol;
        }

        public void actualizarRol(int llave, string atributoAcambiar, string ValorParaCambiar)
        {
            int index = 0;
            for (int i = 0; i < this.ListaDeRoles.Count; i++)
            {
                if (this.ListaDeRoles[i].IdRol == llave)
                {
                    index = i;
                    break;
                }
            }
            Rol r1 = this.ListaDeRoles[index];
            switch (atributoAcambiar)
            {
                case "Nombre":
                    r1.Nombre = ValorParaCambiar;
                    break;
                case "Descripcion":
                    r1.Descripcion = ValorParaCambiar;
                    break;
                default:
                    break;
            }
            guardarRol();
        }
    }
}
