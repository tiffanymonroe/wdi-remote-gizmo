console.log('Mickey Mouse');

// fetch('http://localhost:3000/stocks')
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err));


window.onload = function() {
  const ctx = document.querySelector('#dis');

  const chartData = {
    labels: [],
    datasets: [
      {
        label: 'Avg price',
        data: []
      }
    ]
  };

  fetch('http://localhost:3000/prices/1')
    .then(res => res.json())
    .then(json =>  {
      console.log(json);

      json.prices.forEach((price) => {
        chartData.labels.push(price.id);
        chartData.datasets[0].data.push(price.avg_price);
      })
      const stocksChart = new Chart(ctx, {
        type: 'line',
        data: chartData
      })

    })
    .catch(err => console.log(err));

} //end window onload
