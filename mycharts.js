const ctx = document.getElementById("myChart").getContext('2d');
const earning = document.getElementById("earning").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Laptop', 'Telivision', 'Phone', 'Hair-Dryer', 'ipad', 'Straightner'],
        datasets: [{
            label: 'total purchase',
            data: [1200, 1900, 3000, 1500, 2200, 1300],
            backgroundColor: [
                'rgb(56,75,126)',
                'rgb(18,36,37)',
                'rgb(34,53,101)',
                'rgb(36,55,57)',
                'rgb(6,4,4)',
                'rgb(255, 159, 64)'
            ],

            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});

var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'monthly income',
            data: [120000, 190000, 300000, 500000, 200000, 300000, 500000, 750000, 980000, 1000000, 1110000, 500000],
            backgroundColor: [
                'rgb(56,75,126)',
                'rgb(18,36,37)',
                'rgb(34,53,101)',
                'rgb(36,55,57)',
                'rgb(6,4,4)',
                'rgb(255, 159, 64)',
                'rgb(56,75,126)',
                'rgb(18,36,37)',
                'rgb(34,53,101)',
                'rgb(36,55,57)',
                'rgb(6,4,4)',
                'rgb(255, 159, 64)'



            ],

            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});