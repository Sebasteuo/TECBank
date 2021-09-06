using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TecBank_API.DBMS.File_manager;
using TecBank_API.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TecBank_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarjetaController : ControllerBase
    {
        TarjetaManager tm = new TarjetaManager();

        // GET: api/<TarjetaController>
        [HttpGet]
        public List<Tarjeta> Get()
        {
            return tm.listarTarjetas();
        }

        // GET api/<TarjetaController>/5
        [HttpGet("{id}")]
        public Tarjeta Get(int id)
        {
            return tm.consultarTarjeta(id);
        }

        // POST api/<TarjetaController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TarjetaController>/5
        [HttpPut("{id}")]
        [HttpPut("{id}")]
        public void Put(int id, string atributoAcambiar, string ValorParaCambiar)
        {
            tm.actualizarTarjeta(id, atributoAcambiar, ValorParaCambiar);
        }

        // DELETE api/<TarjetaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            tm.eliminarTarjeta(id);
        }
    }
}
