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
        public void Post(Empleado empleado)
        {
            em.agregarEmpleado(empleado);
        }
        [EnableCors("localhost")]
        // PUT api/<EmpleadoController>/5
        [HttpPut]
        public void Put(Empleado EmpleadoParaCambiar)
        {
            //Empleado emp = JsonConvert.DeserializeObject<Empleado>(EmpleadoParaCambiar);
            em.actualizarEmpleado(EmpleadoParaCambiar);
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
