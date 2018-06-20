import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super()
    console.log('List props: ', props);
    this.state = {
      todos: props.todos
    }
  }

  handleClick() {
    console.log('clicked');
    console.log(this);
    this.setState({
      todos: []
    })
  }

  updateUI(event) {
    console.log(event.currentTarget);
    event.currentTarget.style="text-decoration: line-through"
    console.log(event.target.className='strikeout');
  }
  render() {
    const listItems = this.state.todos.map(item => <li onClick={ this.updateUI.bind(this) }>{ item }</li>);
    return(
      <div>
        <button onClick={ this.handleClick.bind(this) }>CLEAR</button>
        <ul> <li> {listItems} </li> </ul>
      </div>
    )
  }


}

// const List = (props) => {
//   console.log(props);
//   const listItems = props.todos.map(item => <li> {item} </li>);
//
//   return (
//     <ul>
//       { listItems }
//     </ul>
//   )
// }
//
export default List;
