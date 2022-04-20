import './App.css';
import Counter from './Counter';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>My Counter</h2>
      <Counter/>
    </div>
    )
  }
}
