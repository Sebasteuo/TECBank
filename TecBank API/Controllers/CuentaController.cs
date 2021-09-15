using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using TecBank_API.DBMS.File_manager;
using TecBank_API.Models;


namespace TecBank_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuentaController : ControllerBase
    {
        CuentaManager cm = new CuentaManager();
        [EnableCors("localhost")]
        // GET: api/<CuentaController>
        [HttpGet]
        public List<Cuenta> Get()
        {
            return cm.listarCuenta();
        }
        [EnableCors("localhost")]
        // GET api/<CuentaController>/5
        [HttpGet("{id,type}")]
        public List<Cuenta> Get(int id,int type)
        {
            List<Cuenta> l1 = new List<Cuenta>();

            if (type==1) {
                l1.Add(cm.consultarCuenta(id));
                return l1; }
            else { return cm.consultarCuentaPorCliente(id); }
            
        }
        [EnableCors("localhost")]
        // POST api/<CuentaController>
        [HttpPost]
        public void Post(Cuenta cuenta)
        {
            cm.agregarCuenta(cuenta);
        }
        [EnableCors("localhost")]
        // PUT api/<CuentaController>/5
        [HttpPut]
        public void Put(Cuenta CuentaParaCambiar)
        {
            //Cuenta cuenta = JsonConvert.DeserializeObject<Cuenta>(CuentaParaCambiar);
            cm.actualizarCuenta(CuentaParaCambiar);
        }
        [EnableCors("localhost")]

        // DELETE api/<CuentaController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            cm.eliminarCuenta(id);
        }

        // GET api/<CuentaController>/5
        [HttpGet("listaCuentas/{id}")]
        public List<Cuenta> Get2(int id)
        {
            return cm.consultarCuentaPorCliente(id);
        }
    }
}
