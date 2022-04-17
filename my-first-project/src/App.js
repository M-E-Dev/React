import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  return (
    <div>
      <h1>Hogwarts App</h1>
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
