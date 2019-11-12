using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChartData.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DataChart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChartAPIController : ControllerBase
    {
        public IChartRepo db { get; set; }
        public ChartAPIController()
        {
            db = new InMemoryChartRepo();
        }

        [HttpGet]
        public object ShowOff(int id)
        {
            var model = db.getAllCharts();
            return model;
        }
    }
}