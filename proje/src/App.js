import './App.css';
import Counter from './Counter';
import Recap from './Recap';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  render() {
    return (
      <div className="App">
      {/* <h2>My Counter</h2>
      <Counter/> */}
      <Recap name="Harry"/>

    </div>
    )
  }
}
