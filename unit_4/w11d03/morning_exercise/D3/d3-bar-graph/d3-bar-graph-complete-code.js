//dummy data to start us off
arr = [ 5,4,10,3,7,9,2,8,6,1, 7, 15 ];

//set a height and width for svg
const w = 400;
const h = 300;

//set a constant for bar padding, in case you want to adjust it later, instead of hunting down each time you used it
const barPadding = 1;

//select the submit button, which has an id of `submit`
const submit = d3.select ( '#submit');

//click handler for submit button
submit.on( 'click' ,  e => {

  //prevent default behavoir of submit - which is to refresh the page
  d3.event.preventDefault();

  //check if an svg element is present, if yes, remove it
  if (d3.select( 'svg' )){
      d3.select( 'svg' )
        .remove();
  }

  //append a new svg element, with our global height and width
  const svg = d3.select( '.graph' )
                .append( 'svg' )
                .attr  ( 'width'  , w )
                .attr  ( "height" , h )

  //get the number inputted in the input field
  const num = d3.select( '#input' )
                .property( 'value' );

  //get data from our `generate-data` file/function
  //remember any info coming in from an html page is a string, must convert to a number
  const data = ( collectData ( Math.round ( parseInt ( num ))));

  //call the makeGraph function
  makeGraph( data );

  //clear the input field after submit button is pressed
  const i = document.getElementById( 'input' );
  i.value = '';

});


const makeGraph = function (arr){

  //let's be sure with our refactoring that we swap out all the initial values of `arr` - this will help catch our mistakes
  const data = arr;

  //need to get just the values of wins from each object and store them in an array for comparison
  let dataCount = data.map (function ( c ){
     return c.wins;
   });

  //find the max value from dataCount and use it to make our graph more dynamic based on our data
  const maxHeight = h/Math.max ( ...dataCount );
  const maxColor = 255/Math.max ( ...dataCount );

  //select our svg element (created by click handler)
  const svg = d3.select( 'svg' );

  //make rectangles representing our data
  svg.selectAll( 'rect' )
     .data( data )
     .enter()
     .append( 'rect' )
     .attr( 'x' ,  ( d , i ) => {
       return i * ( w / data.length )
     })
     .attr( 'y' , d => {
       return h  - d.wins * maxHeight;
     })
     .attr( 'width' ,  w / data.length - barPadding)
     .attr( 'height' , d => {
       return d.wins * maxHeight;
     })
     .attr( 'fill' , d => {
       return "rgb( 0, 0, " + ( Math.round( d.wins * maxColor )) + ")";
     });

     //add names to bars
    svg.selectAll( 'text' )
       .data( data )
       .enter()
       .append( 'text' )
       .text( d => {
         return d.name;
       })
       .attr( 'x' ,  ( d , i ) => {
         return i * ( w /dataCount.length ) + 5
       })
       .attr( 'y' ,  d => {
         return h - d.wins * maxHeight + 20;
       })
       .style ('fill', 'white')
       .attr('font-size', '10px');
}
