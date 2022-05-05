import './App.css';
import Counter from './Counter';
import Recap from './Recap';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       show: true
    }
  }

  hide = ()=>{
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
      {/* <h2>My Counter</h2>
      <Counter/> */}
      <button onClick={()=> this.hide()}>Show-Hide</button>
      {
       this.state.show && <Counter/>
      }
      <Recap name="Harry"/>

    </div>
    )
  }
}
