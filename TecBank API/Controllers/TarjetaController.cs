using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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
        [EnableCors("localhost")]
        // GET: api/<TarjetaController>
        [HttpGet]
        public List<Tarjeta> Get()
        {
            return tm.listarTarjetas();
        }
        [EnableCors("localhost")]
        // GET api/<TarjetaController>/5
        [HttpGet("{id}")]
        public Tarjeta Get(int id)
        {
            return tm.consultarTarjeta(id);
        }
        [EnableCors("localhost")]
        // POST api/<TarjetaController>
        [HttpPost]
        public void Post(Tarjeta tarjeta)
        {
            tm.agregarTarjeta(tarjeta);
        }
        [EnableCors("localhost")]
        // PUT api/<TarjetaController>/5
        [HttpPut]
        public void Put(Tarjeta TarjetaParaCambiar)
        {
            //Tarjeta tj = JsonConvert.DeserializeObject<Tarjeta>(TarjetaParaCambiar);
            tm.actualizarTarjeta(TarjetaParaCambiar);
        }
        [EnableCors("localhost")]
        // DELETE api/<TarjetaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            tm.eliminarTarjeta(id);
        }
    }
}
