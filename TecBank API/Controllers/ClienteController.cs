using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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
    public class ClienteController : ControllerBase
    {
        ClienteManager cm = new ClienteManager();

        [EnableCors("localhost")]
        // GET: api/<ClienteController>
        [HttpGet]
        public List<Cliente> Get()
        {
            return cm.listarClientes();
        }
        [EnableCors("localhost")]
        // GET api/<ClienteController>/5
        [HttpGet("{id}")]
        public Cliente Get(int id)
        {
            return cm.consultarCliente(id);
        }
        [EnableCors("localhost")]
        // POST api/<ClienteController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }
        [EnableCors("localhost")]
        // PUT api/<ClienteController>/5
        [HttpPut("{id}")]
        public void Put(string ClienteParaCambiar)
        {
            Cliente cl = JsonConvert.DeserializeObject<Cliente>(ClienteParaCambiar);
            cm.actualizarCliente(cl);
        }
        [EnableCors("localhost")]
        // DELETE api/<ClienteController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            cm.eliminarCliente(id);
        }
    }
}
