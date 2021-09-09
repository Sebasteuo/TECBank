using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TecBank_API.Models;

namespace TecBank_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolController : ControllerBase
    {
        RolManager rm = new RolManager();

        // GET: api/<RolController>
        [EnableCors("localhost")]
        [HttpGet]
        public List<Rol> Get()
        {
            return rm.listarRoles();
        }

        // GET api/<RolController>/5
        [EnableCors("localhost")]
        [HttpGet("{id}")]
        public Rol Get(int id)
        {
            return rm.consultarRol(id);
        }

        // POST api/<RolController>
        [EnableCors("localhost")]
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<RolController>/5
        [EnableCors("localhost")]
        [HttpPut("{id}")]
        public void Put(string RolParaCambiar)
        {
            Rol rol = JsonConvert.DeserializeObject<Rol>(RolParaCambiar);
            rm.actualizarRol(rol);
        }
        // DELETE api/<RolController>/5
        [EnableCors("localhost")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            rm.eliminarRol(id);
        }
    }
}
