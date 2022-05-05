import React, { Component } from "react";


export default class Recap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hermione",
      data: [],
    };
  }

  // // propsu alıp state atamak yerine aşağıdaki yöntem
  // // state deki name'e propstaki name atandı
  // static getDerivedStateFromProps(props, state) {
  //   // state döndürmeyeceksek ---return null--- veririz
  //   return { name: props.name };
  // }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));

      this.setState({name: "component should update true"})
  }


  shouldComponentUpdate(){
    return false; // true yaparsak update olur
  }

  componentWillUnmount(){
    console.log("---- Recap Unmounted ----")
  }


  render() {
    return (
      <div>
        <p>This is {this.state.name}</p>
        <p>My name is {this.props.name}</p>
        {/* key olarak unique olan herhangi bieşey kullanılabilir... */}
        {this.state.data.map(item => <h6 key={item.id}>{item.id} - {item.name}</h6>)}
      </div>
    );
  }
}
