$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('.easy-sidebar').toggleClass('active');
    });

    $('.dropdown-toggle').dropdown();

    document.querySelectorAll('.easy-sidebar .nav-link').forEach(function (element) {

        element.addEventListener('click', function (e) {

            let nextEl = element.nextElementSibling;
            let parentEl = element.parentElement;

            if (nextEl) {
                e.preventDefault();
                let mycollapse = new bootstrap.Collapse(nextEl);

                if (nextEl.classList.contains('show')) {
                    mycollapse.hide();
                } else {
                    mycollapse.show();
                    // find other submenus with class=show
                    var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                    // if it exists, then close all of them
                    if (opened_submenu) {
                        new bootstrap.Collapse(opened_submenu);
                    }
                }
            }
        }); // addEventListener
    }); // forEach

});

const mixedChart = new Chart("myChart", {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Incoming',
            backgroundColor: "#198754",
            data: [0, 0.1, 0.2, 0.2, 0.3, 0.6, 0.7, 1, 0.2]
        }, {
            type: 'bar',
            label: 'Outgoing',
            backgroundColor: "#dc3545",
            data: [0, 0.1, 0.2, 0.2, 0.3, 0.6, 0.7, 1, 0.2],
        }],
        labels: ["October 09", "October 10", "October 11", "October 12", "October 13", "October 14", "October 15", "October 16", "October 17"]
    },
    options: {
      legend: {display: true},
        scales: {
        xAxes: [{ticks: {min: 0, max:1}}],
        yAxes: [{ticks: {min: 0, max:1}}],
      }
    }
});

const mixedChart2 = new Chart("myChart2", {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Incoming',
            backgroundColor: "#198754",
            data: [0, 0.1, 0.2, 0.2, 0.3, 0.6, 0.7, 1, 0.2,0, 0.1, 0.2, 0.2, 0.3, 0.6, 0.7, 1, 0.2,0, 0.1, 0.2, 0.2, 0.3, 0.6, 0.7, 1, 0.2, 0.6, 0.7, 1, 0.2]
        }, {
            type: 'bar',
            label: 'Outgoing',
            backgroundColor: "#dc3545",
            data: [0, 0.1, 0.2, 0.2, 0.3, 0.6, 0.7, 1, 0.2,0, 0.1, 0.2, 0.2, 0.3, 0.6, 0.7, 1, 0.2,0, 0.1, 0.2, 0.2, 0.3, 0.6, 0.7, 1, 0.2, 0.6, 0.7, 1, 0.2]
        }],
        labels: [ "September 16",
        "September 17",
        "September 18",
        "September 19",
        "September 20",
        "September 21",
        "September 22",
        "September 23",
        "September 24",
        "September 25",
        "September 26",
        "September 27",
        "September 28",
        "September 29",
        "September 30",
        "October 01",
        "October 02",
        "October 03",
        "October 04",
        "October 05",
        "October 06",
        "October 07",
        "October 08",
        "October 09",
        "October 10",
        "October 11",
        "October 12",
        "October 13",
        "October 14",
        "October 15",
        "October 16",
        "October 17"]
       
    },
    options: {
      legend: {display: true},
        scales: {
        xAxes: [{ticks: {min: 0, max:1}}],
        yAxes: [{ticks: {min: 0, max:1}}],
      }
    }
});

const mixedChart3 = new Chart("myChart3", {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Incoming',
            backgroundColor: "#198754",
            data: [0, 0.1, 0.2, 0.2, 0.3, 0.6, 0.7, 1, 0.2, 0.6, 0.7, 1, 0.2]
        }, {
            type: 'bar',
            label: 'Outgoing',
            backgroundColor: "#dc3545",
            data: [0, 0.1, 0.2, 0.2, 0.3, 0.6, 0.7, 1, 0.2, 0.6, 0.7, 1, 0.2],
        }],
        labels: [
            "September 2021",
            "October 2021",
            "November 2021",
            "December 2021",
            "January 2022",
            "February 2022",
            "March 2022",
            "April 2022",
            "May 2022",
            "June 2022",
            "July 2022",
            "August 2022",
            "September 2022",
        ]
    },
    options: {
      legend: {display: true},
        scales: {
        xAxes: [{ticks: {min: 0, max:1}}],
        yAxes: [{ticks: {min: 0, max:1}}],
      }
    }
});

// var chartData = {
//     labels: ["October 09", "October 10", "October 11", "October 12", "October 13", "October 14", "October 15", "October 16", "October 17"],
//     datasets: [
//         {
//             fillColor: "#e6001e",
//             strokeColor: "#e6001e",
//             data: [0, 0.1, 0.2, 0.2, 0.3, 0.6, 0.7, 1, 0.2]
//         }
//     ]
// };

// var ctx = document.getElementById("myChart").getContext("2d");
// var myBar = new Chart(ctx).Bar(chartData, {
//     showTooltips: false,
//     onAnimationComplete: function () {

//         var ctx = this.chart.ctx;
//         ctx.font = this.scale.font;
//         ctx.fillStyle = this.scale.textColor
//         ctx.textAlign = "center";
//         ctx.textBaseline = "bottom";

//         this.datasets.forEach(function (dataset) {
//             dataset.bars.forEach(function (bar) {
//                 ctx.fillText(bar.value, bar.x, bar.y - 5);
//             });
//         })
//     }
// });


// var xyValues = [
//     {x:50, y:7},
//     {x:60, y:8},
//     {x:70, y:8},
//     {x:80, y:9},
//     {x:90, y:9},
//     {x:100, y:9},
//     {x:110, y:10},
//     {x:120, y:11},
//     {x:130, y:14},
//     {x:140, y:14},
//     {x:150, y:15}
//   ];
  
//   new Chart("myChart", {
//     type: "scatter",
//     data: {
//       datasets: [{
//         pointRadius: 4,
//         pointBackgroundColor: "rgb(0,0,255)",
//         data: xyValues
//       }]
//     },
//     options: {
//       legend: {display: false},
//       scales: {
//         xAxes: [{ticks: {min: 40, max:160}}],
//         yAxes: [{ticks: {min: 6, max:16}}],
//       }
//     }
//   });