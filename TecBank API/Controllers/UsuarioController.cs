using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TecBank_API.DBMS.File_manager;
using TecBank_API.Models;

namespace TecBank_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]


    public class UsuarioController : Controller
    {
        UsuarioManager Umanager = new UsuarioManager();
        [EnableCors("localhost")]
        // GET: api/<ClienteController>
        [HttpPost]
        public string checkUser(Usuario u)
        {
            return Umanager.consultarCredenciales(u.user, u.password);
        }
    }
}
