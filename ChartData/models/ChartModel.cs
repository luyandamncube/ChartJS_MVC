using System;
using System.Collections.Generic;
using System.Text;

namespace ChartData.models
{
    public class ChartModel
    {
        public string chartType { get; set; }
        public List<DataPoint> chartData { get; set; }
        public object[] options { get; set; }
    }
}
