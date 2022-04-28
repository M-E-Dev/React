import React, { Component } from 'react'

export default class ClassBased extends Component {

// // Constructor zorunlu değil artık...
// constructor(props) {
//   super(props)

//   this.state = {
//      count: 0
//   }
// }

    // State her değiştiğinde render çalışır
    state = {
        count: 0
    }

    // Binde gerek yok, arrow kullan.
    // Class comp.da fonksiyon değil metot yazılır...
    increment = () => {
        this.setState({count: this.state.count + 1})
    }
    
  render() {
    return (
      <div>
          <button onClick={this.increment}>+</button>
          <h1>{this.state.count}</h1>
          {/* İçerde de yazabiliriz... */}
          <button onClick={() => {this.setState({count: this.state.count - 1})}}>-</button>
          <h2>{this.props.name}</h2>
      </div>
    )
  }
}
