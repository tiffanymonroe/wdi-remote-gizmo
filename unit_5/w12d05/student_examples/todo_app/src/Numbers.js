import React from 'react';
const Numbers = (props) => {
  console.log(props);
  const total = props.numbers.reduce((sum, num) => sum += num);
  return (
    <div>
    {props.numbers.map(num => <h5>{ num }</h5>) }
    <h3>Total : { total }</h3>
    </div>
  )
}

export default Numbers
