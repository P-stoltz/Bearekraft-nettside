// Definer data for bar chart (pant)
let pant2019 = 1155000000;
let pant2020 = 1386000000;
let pant2022 = 1522000000;

// Funksjon for å oppdatere bar chart
function oppdaterStatistikk1() {
  // Oppdater innhold i HTML-elementene
  document.getElementById('2019').textContent = `2019: ${pant2019}`;
  document.getElementById('2020').textContent = `2020: ${pant2020}`;
  document.getElementById('2022').textContent = `2022: ${pant2022}`;

  // Opprett bar chart
  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2019 (pant)', '2020 (pant)', '2022 (pant)'],
      datasets: [{
        label: 'Hvor mye ble pantet?',
        data: [pant2019, pant2020, pant2022],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Definer data for pie chart (svarfordeling)
let aldri = 7;
let alltid = 2;
let avOgTil = 2;
let ofte = 4;

// Funksjon for å oppdatere pie chart
function oppdaterStatistikk2() {
  // Oppdater innhold i HTML-elementene
  document.getElementById('aldri').textContent = `Aldri: ${aldri}`;
  document.getElementById('alltid').textContent = `Alltid: ${alltid}`;
  document.getElementById('avOgTil').textContent = `Av og til: ${avOgTil}`;
  document.getElementById('ofte').textContent = `Ofte: ${ofte}`;

  // Opprett pie chart
  const ctx = document.getElementById('myPieChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Aldri', 'Alltid', 'Av og til', 'Ofte'],
      datasets: [{
        label: 'Svarfordeling',
        data: [aldri, alltid, avOgTil, ofte],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              const label = tooltipItem.label || '';
              const value = tooltipItem.raw;
              const total = 15; // Totalt antall svar
              const percentage = ((value / total) * 100).toFixed(1);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

// Definer data for flasketyper
let plast = 60; // Plastflasker i prosent
let aluminium = 30; // Aluminiumsbokser i prosent
let glass = 10; // Glassflasker i prosent

// Funksjon for å oppdatere doughnut chart
function oppdaterStatistikk3() {
  // Oppdater innhold i HTML-elementene
  document.getElementById('plast').textContent = `Plastflasker: ${plast}%`;
  document.getElementById('aluminium').textContent = `Aluminiumsbokser: ${aluminium}%`;
  document.getElementById('glass').textContent = `Glassflasker: ${glass}%`;

  // Opprett doughnut chart
  const ctx = document.getElementById('myDoughnutChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Plastflasker', 'Aluminiumsbokser', 'Glassflasker'],
      datasets: [{
        label: 'Fordeling av flasketyper',
        data: [plast, aluminium, glass],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)', // Blå for plastflasker
          'rgba(255, 206, 86, 0.6)', // Gul for aluminiumsbokser
          'rgba(75, 192, 192, 0.6)'  // Grønn for glassflasker
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              const label = tooltipItem.label || '';
              const value = tooltipItem.raw;
              return `${label}: ${value}%`;
            }
          }
        }
      }
    }
  });
}

// Legg til oppdatering av doughnut chart i `window.onload`
window.onload = function () {
  oppdaterStatistikk1();
  oppdaterStatistikk2();
  oppdaterStatistikk3();
};
