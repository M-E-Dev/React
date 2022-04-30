import React from "react";
import Card from "./component/Card";
import { useEffect, useState } from "react";
// import data from "./data.json";
import axios from "axios"

export default function App() {
  const [itemList, setItemList] = useState([]);

  useEffect(()=>{
    // fetch('https://breakingbadapi.com/api/characters')
    // .then(response => response.json())
    // .then((data) => setItemList(data));
    axios
    .get('https://breakingbadapi.com/api/characters')
    .then(response => setItemList(response.data))
  
  }, [])

  
  return(
    <div className="App">
      <header className="header">
        <img src="https://avatars.dicebear.com/v2/avataaars/59.svg" alt="header image"/>
      </header>
  
      <div className="cards">
        {itemList.map((item) => (
          <Card key={item.char_id} item={item} />
        ))}
      </div>

    </div>
  )
}