const red = getComputedStyle(document.documentElement).getPropertyValue("--primary-red");
const cyan = getComputedStyle(document.documentElement).getPropertyValue("--primary-cyan");



const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: [red, red, cyan, red, red, red, red],

        }]
    },
    options: {
        scales: {
            y: {
                grid:{
                    display:false,
                    drawBorder:false
                },
                ticks:{
                    display:false
                }
            },
            x:{
                grid:{
                    display: false,
                    drawBorder:false
                }
            }
            
        },
    plugins: {
        legend: {
            display: false,
        }


    }
}


});