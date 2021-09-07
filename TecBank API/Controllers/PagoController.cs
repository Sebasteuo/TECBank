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
    public class PagoController : ControllerBase
    {
        PagoManager pm = new PagoManager();
        [EnableCors("localhost")]
        // GET: api/<PagoController>
        [HttpGet]
        public List<Pago> Get()
        {
            return pm.listarPagos();
        }
        [EnableCors("localhost")]
        // GET api/<PagoController>/5
        [HttpGet("{id}")]
        public Pago Get(int id)
        {
            return pm.consultarPago(id);
        }
        [EnableCors("localhost")]
        // POST api/<PagoController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }
        [EnableCors("localhost")]
        // PUT api/<PagoController>/5
        [HttpPut("{id}")]
        public void Put(int id, string atributoAcambiar, string ValorParaCambiar)
        {
            pm.actualizarPago(id, atributoAcambiar, ValorParaCambiar);
        }
        [EnableCors("localhost")]
        // DELETE api/<PagoController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            pm.eliminarPago(id);
        }
    }
}
