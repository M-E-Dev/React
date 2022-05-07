import React from "react";
import FunctionalComponent from "./FunctionalComponent";
import { useState } from "react";


export default function App() {

  const [isVisible, setVisible] = useState(true);
 
  return(
    <div className="App">

    <button onClick={()=> setVisible(!isVisible)}>Toggle</button>

    {isVisible ? <FunctionalComponent/> : null}

    </div>
  )
}