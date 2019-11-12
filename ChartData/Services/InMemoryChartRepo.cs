using System;
using System.Collections.Generic;
using System.Text;
using ChartData.models;

namespace ChartData.Services
{
    public class InMemoryChartRepo : IChartRepo
    {
        public List<ChartModel> Charts { get; set; }

        public InMemoryChartRepo()
        {
            Charts = new List<ChartModel>();
            //Load chart data here
            Charts.Add(new ChartModel { chartType = "Line", options = null, chartData = null });
        }
        public List<ChartModel> getAllCharts()
        {
            return Charts;
        }

        public ChartModel getChartByID(int id)
        {
            throw new NotImplementedException();
        }

        public List<ChartModel> getChartByType(string chartType)
        {
            throw new NotImplementedException();
        }
    }
}
