AOS.init({
    duration: 700,
    once: true
});

new window.VLibras.Widget('https://vlibras.gov.br/app');

$(document).scroll(function(){

    $('.s-navbar').toggleClass('s-navbar-scroll', $(this).scrollTop() > $('#header').height());
    
})


var firstChart = document.getElementById('firstChart').getContext('2d');
var firstChartConstruct = new Chart(firstChart, {
    type: 'pie',
    data : {
        datasets: [{
            data: [Math.floor((Math.random() * 50) + 10),
                Math.floor((Math.random() * 50) + 10),
                Math.floor((Math.random() * 50) + 10),
                Math.floor((Math.random() * 50) + 10)],
            backgroundColor: [
                '#823217',
                '#C34B22',
                '#E17651',
                '#F2A78C'
            ],
            borderWidth: 0
        }],
        labels: [
            'Empresa 1',
            'Empresa 2',
            'Empresa 3',
            'Empresa 4'
        ],
}});

var secondChart = document.getElementById('secondChart').getContext('2d');
var secondChartConstruct = new Chart(secondChart, {
    type: 'bar',
    
    data : {
        datasets: [{
            data: [Math.floor((Math.random() * 200) + 50),
                Math.floor((Math.random() * 200) + 50),
                Math.floor((Math.random() * 200) + 50),
                Math.floor((Math.random() * 200) + 50),
                Math.floor((Math.random() * 200) + 50),
                Math.floor((Math.random() * 200) + 50),
                Math.floor((Math.random() * 200) + 50),
                Math.floor((Math.random() * 200) + 50),
                Math.floor((Math.random() * 200) + 50)],
            backgroundColor: [
                '#F09575',
                '#F5B8A3',
                '#F09575',
                '#F5B8A3',
                '#F09575',
                '#F5B8A3',
                '#F09575',
                '#F5B8A3',
                '#F09575'
            ],
            borderWidth: 0,
            barPercentage: 1,
            categoryPercentage: 1
        }],
        labels: [
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro'
        ],
},
options: {
    scales: {
        xAxes: [{
        }],
        yAxes: [{
            ticks: {
                min: 0,
                max: 200,
                stepSize: 50
            }
        }]
    }
}});