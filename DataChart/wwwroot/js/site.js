// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Bar chart


new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
        labels: ["1-5min", "5-10min", "10-20min", "30-40min", "40-60min", "60-90min", "90-120min", "2-3h", "4-6h", ">6h"],
        datasets: [
            {
                label: "Visitor Durations",
                backgroundColor: "#3e95cd",
                data: [200, 170, 90, 100, 50, 40, 30, 40, 50, 60]
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Visitor Duration'
        }
    }
});

//radar-chart
new Chart(document.getElementById("radar-chart"), {
    type: 'bar',
    data: {
        datasets: [{
            label: 'CMX',
            data: [30, 150, 500, 0, 200, 70, 96, 10],
            fill: true,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179,181,198,1)",
            order: 1
        }, {
            label: 'RetailNext',
                data: [45,280,300,0,18,70,96,400],
                type: 'line',
                backgroundColor: "rgba(255, 255, 255, 0)",
                borderColor: "#3cba9f",
                pointBorderColor: "#fff",
                pointBackgroundColor: "#3cba9f",
            order: 2
        }],
        labels: ['VW- Basement Floor', 'VW - First Floor', 'VW - Ground Floor	', 'V and A Waterfront Precinct', 'Battery Park', 'Silo Presinct', 'BP - Undergrnd', 'CT - Ground Floor', 'WS - Grnd' ]

    },
    options: {
        title: {
            display: true,
            text: 'Visitors per zone'
        }
    }
});

//doughnut-chart
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["New", "Returning"],
        datasets: [
            {
                label: "Returning Visitors",
                backgroundColor: ["#3cba9f","#3e95cd"],
                data: [500,2478, ]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Returning Visitors'
        }
    }
});


//calendar heatmap
$(document).ready(function () {
    var selectedDomain;
    var selectedSubDomain;
    $("#selDomain").change(function () {
        selectedDomain = $(this).find(':selected').val();
    });
    $("#selSubDomain").change(function () {
        selectedSubDomain = $(this).find(':selected').val();
        //empty called to clear earlier displayed heatmap.  
        $("#cal-heatmap").empty();
        //Display Heatmap based domain and subdomain selected  
        loadHeatMap(selectedDomain, selectedSubDomain);
    });
});
var cal = new CalHeatMap();
cal.init({
    domain: "month",
    subDomain: "x_day",
    cellSize: 50,
    itemName: ["service ticket", "service tickets"],
    data: {

    },
    subDomainTextFormat: "%d",
    range: 1,
    displayLegend: true,
    legendColors: {
        min: "#efefef",
        max: "steelblue",
        empty: "white"
        // Will use the CSS for the missing keys
    },
    legendVerticalPosition: "top",
    legendMargin: [0, 0, 10, 0],
    label: {
        position: "right",
        width: 46,
        rotate: "right",
        align: "right"
    },
   
    domainMargin: 0,
    animationDuration: 800,
    domainDynamicDimension: false,
    scale: [10, 20, 80],
    previousSelector: "#heatmap-previous",
    nextSelector: "#heatmap-next",
    tooltip: true

});