using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TecBank_API.DBMS.File_manager;

namespace TecBank_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoraController : ControllerBase
    {
        Mora reporte = new Mora();

        [EnableCors("localhost")]
        // GET api/<MoraController>/5
        [HttpGet("{id}")]
        public List<string> Get(int id)
        {
            return reporte.Reporte(id);
        }
    }
}
