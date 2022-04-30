import React, { useEffect, useState } from "react";

export default function Functional(props) {
  // class olmadığı için dot, this vs gerekmez. func içindekini kullnabiliriz doğrudan..
  // this classa has bişey. state objesi de yok, dot nota. yok

  const [count, setCount] = useState(0);
  const [empty, setEmpty] = useState(0);
  const [full, setFull] = useState(0);

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
  // [] içinde değişken varsa, o değiştiğinde render
  // return varsa unmount
  useEffect( () => {
    console.log("useEffect");
    // // useEffect içinde state değiştirirsek sonsuz döngüye girer... infinit loop...
    // setEmpty(empty+1)
    return() => {console.log("Hoççagalın")}
  }, 
  // [count] // sadece count değiştiğinde render eder...
  [empty, full]  // ikisinin değişiminde de render alır...
  )



  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement} >-</button> <hr/>
      <button onClick={() => {setEmpty(empty+1)}} >+</button> 
      <h2>{empty}</h2> <hr/>
      <button onClick={() => {setFull(full+1)}} >+</button>
      <h2>{full}</h2>
    </div>
  );
}
