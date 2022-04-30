import "./App.css";
import ClassBased from "./ClassBased";
import Functional from "./Functional";

function App() {
    return(
        <div className="App">
            <ClassBased name="Harry"/>
            <br/><hr/><br/>
            <Functional name="Harry"/>
        </div>
    )
}

export default App;