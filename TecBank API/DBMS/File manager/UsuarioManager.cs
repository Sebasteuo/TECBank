using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TecBank_API.Models;
using Newtonsoft.Json;
namespace TecBank_API.DBMS.File_manager
{
    public class UsuarioManager
    {

        public List<Usuario> ListaDeUsuarios = new List<Usuario>();
        private string path = "C:/GitHub/TECbank/TecBank API/DBMS/Data/usuarios.json";
        public UsuarioManager() {
            listarUsuarios();
        }


        public String consultarCredenciales(string usuario, string password)
        {
          
            int index = 0;
            for (int i = 0; i < this.ListaDeUsuarios.Count; i++)
            {
                if (this.ListaDeUsuarios[i].user == usuario && this.ListaDeUsuarios[i].password == password)
                {
                    index = i;
                    break;
                }
            }
            

                string cli = this.ListaDeUsuarios[index].tipo;
                return cli;
           
            
            


        }


        public int consultarCedula(Usuario usuario)
        {

            int index = 0;
            for (int i = 0; i < this.ListaDeUsuarios.Count; i++)
            {
                if (this.ListaDeUsuarios[i].user == usuario.user)
                {
                    index = i;
                    break;
                }
            }


            int cli = this.ListaDeUsuarios[index].cedula;
            return cli;





        }


        public List<Usuario> listarUsuarios()
        {
            using (StreamReader file = File.OpenText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                this.ListaDeUsuarios = (List<Usuario>)serializer.Deserialize(file, typeof(List<Usuario>));
            }
            return this.ListaDeUsuarios;
        }


        private void guardarUsuario()
        {
            using (StreamWriter file = File.CreateText(path))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(file, this.ListaDeUsuarios);
            }
        }


        public void agregarUsuario(Usuario usuario)
        {
            this.ListaDeUsuarios.Add(usuario);
            guardarUsuario();
        }


    }
}
