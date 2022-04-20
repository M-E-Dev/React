import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  return (
    <div>
      <h1>Hogwarts App</h1>
      <ClassComponent name="Draco"/>
      <FunctionalComponent name="Harry" />
    </div>
  );
}

export default App;


