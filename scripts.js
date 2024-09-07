// scripts.js
const ctx = document.getElementById('radialChart').getContext('2d');
const radialChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Python', 'JavaScript', 'Django', 'ReactJS', 'AWS'],
        datasets: [{
            label: 'Technical Skills',
            data: [90, 80, 70, 85, 75],
            backgroundColor: 'rgba(0, 119, 182, 0.2)',
            borderColor: 'rgba(0, 119, 182, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
});

const ctxSoftSkills = document.getElementById('radialChartSoftSkills').getContext('2d');
const radialChartSoftSkills = new Chart(ctxSoftSkills, {
    type: 'radar',
    data: {
        labels: ['Communication', 'Teamwork', 'Problem-Solving', 'Leadership'],
        datasets: [{
            label: 'Soft Skills',
            data: [85, 90, 80, 75],
            backgroundColor: 'rgba(255, 87, 34, 0.2)',
            borderColor: 'rgba(255, 87, 34, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
});
