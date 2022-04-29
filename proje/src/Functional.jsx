import React, { useState } from "react";

export default function Functional(props) {
  // class olmadığı için dot, this vs gerekmez. func içindekini kullnabiliriz doğrudan..
  // this classa has bişey. state objesi de yok, dot nota. yok

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    if (count>0) {
      setCount(count-1)
    }
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement} >-</button>
      <h2>{props.name}</h2>
    </div>
  );
}
