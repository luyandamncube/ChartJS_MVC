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
                label: "Population (millions)",
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
            text: 'Distribution in % of world population'
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
