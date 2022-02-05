import './App.css';

import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
        <ClassComponent name="Draco Malfoy" />
        <FunctionalComponent name="Hermione Granger" />
    </div>
  );
}

export default App;
