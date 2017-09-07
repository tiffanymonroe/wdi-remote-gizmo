// console.log("hello, it's me");

// fetch('http://localhost:3000/locations')
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err))

window.onload = function() {

  const ctx = document.querySelector('#temps');
  console.log('grabbed the chart');
  console.log(ctx);

  const chartData = {
    //x-axis = labels
    labels: [],
    //y-axis = datasets
  	datasets: [
  		{
  			label: 'Avg high temps',
  			data: []
  		},
      {
        label: 'Avg low temps',
        data: []
      }
  	]
  };




fetch('http://localhost:3000/locations/1')
.then(res => res.json())
.then(json => {console.log(json);

  //iterate over the api (json)
  //plonk it into chartData

  json.temperatures.forEach((temperature) => {
    chartData.labels.push(temperature.id);
    chartData.datasets[0].data.push(temperature.average_high_f);
    chartData.datasets[1].data.push(temperature.average_low_f);
  });

  const tempsChart = new Chart(ctx, {
    type: 'line',
    data: chartData
  });
}); //closes promise

}
