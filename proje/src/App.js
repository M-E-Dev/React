import Card from "./component/Card";
import data from "./data.json";

export default function App() {
  
  
  return(
    <div className="App">
      <header className="header">
        <img src="https://avatars.dicebear.com/v2/avataaars/59.svg" alt="header image"/>
      </header>
  
      <div className="cards">
        {data.map((item) => (
          <Card key={item.char_id} item={item} />
        ))}
      </div>

    </div>
  )
}