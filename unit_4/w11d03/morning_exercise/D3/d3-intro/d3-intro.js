arr = [4, 8, 16, 23, 43, 23, 16, 8, 4];

d3.selectAll('p').style('color', 'white');

d3.select('body').style('background-color', "black");

d3.selectAll('p').style('color', function(){
  return 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
});

d3.selectAll('p')
  .data(arr)
    .style('font-size', function(d){
      return d + 'px';
      });

d3.select('body').transition()
  .duration(2000)
    .style('background-color', 'grey');

d3.selectAll('p').transition()
  .duration(750)
  .delay(2000)
  .style('font-size', function(d){
    return Math.sqrt(24*24) + 'px';
  });
