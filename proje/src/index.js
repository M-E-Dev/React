import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { myStore } from "./redux";
import { Provider } from "react-redux";

const store = myStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
      <Todo/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
