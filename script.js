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

fetch('data/vapt.json')
  .then(res => res.json())
  .then(data => {
    const labels = data.map(item => item.product);
    const issues = data.map(item => item.critical_issues);

    const ctx = document.getElementById('vaptChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Critical Issues (VAPT)',
          data: issues,
          backgroundColor: '#007bff',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'VAPT Critical Issues by Product'
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


