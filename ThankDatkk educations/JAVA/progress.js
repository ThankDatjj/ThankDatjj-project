document.addEventListener('DOMContentLoaded', () => {
    // Dữ liệu mẫu - tiến độ theo 8 tuần gần nhất
    const weeks = ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4', 'Tuần 5', 'Tuần 6', 'Tuần 7', 'Tuần 8'];
    const progressData = [12, 28, 35, 42, 55, 58, 58, 58]; // % tiến độ tích lũy

    const ctx = document.getElementById('progressChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: weeks,
            datasets: [{
                label: 'Tiến độ (%)',
                data: progressData,
                borderColor: '#c084fc',
                backgroundColor: 'rgba(192, 132, 252, 0.2)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#c084fc',
                pointBorderColor: '#fff',
                pointHoverRadius: 8,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: { display: true, text: 'Tiến độ (%)', color: '#cbd5e1' }
                },
                x: { title: { display: true, text: 'Thời gian', color: '#cbd5e1' } }
            },
            plugins: {
                legend: { labels: { color: '#e2e8f0' } }
            }
        }
    });

    // Tính toán progress circle động
    document.querySelectorAll('.progress-circle').forEach(circle => {
        const progress = circle.dataset.progress;
        circle.style.setProperty('--progress', `${progress}%`);
    });
});