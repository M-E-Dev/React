import React, { useEffect, useState } from "react";

export default function Functional(props) {
  // class olmadığı için dot, this vs gerekmez. func içindekini kullnabiliriz doğrudan..
  // this classa has bişey. state objesi de yok, dot nota. yok

  const [count, setCount] = useState(0);
  const [empty, setEmpty] = useState(0);

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    if (count>0) {
      setCount(count-1)
    }
  }

  // dependency yoksa her update
  // dependency varsa sadece mount
  // return varsa unmount
  useEffect( () => {
    console.log("useEffect");
    // // useEffect içinde state değiştirirsek sonsuz döngüye girer... infinit loop...
    // setEmpty(empty+1)
  })

  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement} >-</button>
      <h2>{props.name}</h2>
    </div>
  );
}
