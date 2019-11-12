namespace ChartData.models
{
    public class DataPoint
    {
        public string label { get; set; }
        public string type { get; set; }
        public string borderColor { get; set; }
        public int[] data { get; set; }
        public bool fill { get; set; }
    }
}