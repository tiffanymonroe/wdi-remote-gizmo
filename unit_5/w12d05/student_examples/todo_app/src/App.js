import React, { Component } from 'react';
import logo from './logo.svg';
import List from './list.js'
import Numbers from './Numbers.js'
import './App.css';

const todos = ['feed the pups', 'get coffee', 'work on project'];
const numbers = [4, 8, 15, 16, 23, 42];
//equivlant to ng-repeat


class App extends Component {
  render() {
    return (
      <div>
          <h1>ToDos</h1>
          <List todos={ todos }/>
          <Numbers numbers={ numbers }/>
      </div>
    );
  }
}

export default App;
