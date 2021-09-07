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
    public class EmpleadoController : ControllerBase
    {
        EmpleadoManager em = new EmpleadoManager();
        [EnableCors("localhost")]
        // GET: api/<EmpleadoController>
        [HttpGet]
        public List<Empleado> Get()
        {
            return em.listarEmpleados();
        }
        [EnableCors("localhost")]
        // GET api/<EmpleadoController>/5
        [HttpGet("{id}")]
        public Empleado Get(int id)
        {
            return em.consultarEmpleado(id);
        }
        [EnableCors("localhost")]
        // POST api/<EmpleadoController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }
        [EnableCors("localhost")]
        // PUT api/<EmpleadoController>/5
        [HttpPut("{id}")]
        public void Put(int id, string atributoAcambiar, string ValorParaCambiar)
        {
            em.actualizarEmpleado(id, atributoAcambiar, ValorParaCambiar);
        }
        [EnableCors("localhost")]
        // DELETE api/<EmpleadoController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            em.eliminarEmpleado(id);
        }
    }
}
