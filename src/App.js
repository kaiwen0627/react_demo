import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import RouterConf from "./router";
import store from "./redux/index";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <RouterConf />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
