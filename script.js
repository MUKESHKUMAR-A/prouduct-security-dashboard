fetch('data/sast.json')
  .then(res => res.json())
  .then(data => {
    const labels = data.map(item => item.product);
    const issues = data.map(item => item.open_issues);

    const ctx = document.getElementById('sastChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Open Issues',
          data: issues,
          backgroundColor: '#f44336',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'SAST Open Issue Count by Product'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });

