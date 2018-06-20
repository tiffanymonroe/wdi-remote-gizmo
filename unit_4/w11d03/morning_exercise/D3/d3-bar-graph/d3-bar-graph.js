//dummy data to start us off
data = [ 5,4,10,3,7,9,2,8,6,1, 7, 15 ];

const w = 400;
const h = 300;
const barPadding = 1;


const submit = d3.select('#submit');

submit.on('click', e => {
  d3.event.preventDefault();

  if (d3.select('svg')){
    d3.select('svg')
    .remove();
  }

  const svg = d3.select('.graph')
                .append('svg')
                .attr('width', w)
                .attr('height', h)

  const num = d3.select('#input')
                .property('value');

  const data = (collectData (Math.round (parseInt (num))));

  makeGraph(data);

  const i = document.getElementById('input');
  i.value = '';
});



const makeGraph = (arr)=>{
  const svg = d3.select('svg');

  const data = arr;

  const dataCount = data.map ( function ( c ) {
  return c.wins;
  })

  const maxHeight = h / Math.max(...dataCount);
  const maxColor = 255/Math.max(...dataCount);

  svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', function(d, i){
        return i * (w / data.length)
      })
      .attr('y', function(d){
        return h - d.wins * maxHeight
      })
      .attr ( 'width', w/data.length - barPadding )
      .attr('height', function(d){
        return d.wins * maxHeight;
      })
      .attr ('fill' , function ( d ){
      return "rgb(0,0," + (Math.round (d.wins * maxColor) + ")" );
    })


    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(d => {
        return d.name;
      })
      .attr('x', (d, i)=>{
        return i * (w/dataCount.length) + 5
      })
      .attr('y', d => {
        return h - d.wins * maxHeight + 20;
      })
      .style('fill', 'white')
      .attr('font-size', '10px;')
}
