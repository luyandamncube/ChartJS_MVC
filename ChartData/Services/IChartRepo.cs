using ChartData.models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ChartData.Services
{
    public interface IChartRepo
    {
        List<ChartModel> getAllCharts();
        ChartModel getChartByID(int id);
        List<ChartModel> getChartByType(string chartType);
    }
}
