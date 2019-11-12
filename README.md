# ChartJS_MVC
Boilerplate for MVC app dashboard using [Chart.js](https://www.chartjs.org/).

<p align="center">
  <img src="resources/web.png"/>
</p>

## Dependencies
* [Chart.js](https://www.chartjs.org/)
* bootstrap

## Script
1. Add the following scripts to the `<head>` tag:
* [Chart.js](https://www.chartjs.org/)
`<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js" type="text/javascript"></script>`
* [D3.js](https://d3js.org/)
`<script type="text/javascript" src="//d3js.org/d3.v3.min.js"></script>`
* [Cal-HeatMap](https://cal-heatmap.com/#home) (Calendar heatmap)
```
<script type="text/javascript" src="//cdn.jsdelivr.net/cal-heatmap/3.3.10/cal-heatmap.min.js"></script>
<link rel="stylesheet" href="//cdn.jsdelivr.net/cal-heatmap/3.3.10/cal-heatmap.css" />
```

## Styling 
1. Add in a chart into an MVC view's `<body>` tag with the canvas and script elements using [this method](https://www.chartjs.org/docs/latest/getting-started/usage.html).

2. Bootstrap helps to display the components in rows. The following styling helps to space the charts from each other and stretch their height to each chart container: 
```
    <div class="row">
        <div class="col-xl-8 col-md-12"  style="padding: 0px 20px 20px 20px;">
            <div class="card card-default" style="height:100%;">
                <div class="card-body">
                    <div class="chart-container">
                        <canvas id="mixed-chart"></canvas>
                        <script>
                        ...

```

## Adding Charts 
If you want to add new charts, replace the `<canvas>` and `<script>` tags with charts from chartsjs.org or using [Tobias Ahlin's](https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/) blog to experiment with different chart samples.

## TODO
* Move everything in `<script>` tag to seperate .js file.
* Move inline styling to seperate .css file
* Add inline mock data for calendar heatmap
* Add Models for charts and bind datasets to these 