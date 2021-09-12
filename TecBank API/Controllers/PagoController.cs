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
        public void Post(Pago pago)
        {
            pm.agregarPago(pago);
        }
        [EnableCors("localhost")]
        // PUT api/<PagoController>/5
        [HttpPut]
        public void Put(Pago PagoParaCambiar)
        {
            //Pago pago = JsonConvert.DeserializeObject<Pago>(PagoParaCambiar);
            pm.actualizarPago(PagoParaCambiar);
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
