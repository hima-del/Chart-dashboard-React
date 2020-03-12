import CanvasJS from "https://canvasjs.com/assets/script/canvasjs.min.js"

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light1", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        axisX:{
            title:"Business Units",
        },
        axisY: {
            title: "SPEND",
            lineThickness: 0,
            suffix:"M",
            maximum:5,
            minimum:0,
            interval:0.5,
        },
        dataPointWidth: 30,
        spacing:30,
        data: [{
            type: "waterfall",
              yValueFormatString: "#,##0k",
              risingColor: "#5B9BD5",
		fallingColor: "#5B9BD5",
            dataPoints: [
                { label: "Total", y: 4.63 },
                { label: "marketing", y: -0.78 },
                { label: "sales", y: -0.6 },
                { label: "finance", y: -0.9 },
                { label: "HCM", y: -0.81 },
                { label: "Network", y: -0.24 },
                { label: "P&T", y: -0.54 },
                { label: "CEO office",y:-0.2 },
                { label: "IT", y: -0.2 },
                            
            ]
        }]
    });
    chart.render();
    
    }
    
      
    