using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TecBank_API.DBMS.File_manager;
using TecBank_API.Models;


namespace TecBank_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuentaController : ControllerBase
    {
        CuentaManager cm = new CuentaManager();
        // GET: api/<CuentaController>
        [HttpGet]
        public List<Cuenta> Get()
        {
            return cm.listarCuenta();
        }

        // GET api/<CuentaController>/5
        [HttpGet("{id}")]
        public Cuenta Get(int id)
        {
            return cm.consultarCuenta(id);
        }

        // POST api/<CuentaController>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<CuentaController>/5
        [HttpPut("{id}")]
        public void Put(int id, string atributoAcambiar, string ValorParaCambiar)
        {
            cm.actualizarCuenta(id, atributoAcambiar, ValorParaCambiar);
        }

        // DELETE api/<CuentaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            cm.eliminarCuenta(id);
        }
    }
}
