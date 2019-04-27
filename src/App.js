import React from "react";
import { Provider } from "react-redux";
import Router from "./router";
import store from "./redux/index";

import { Button } from "antd";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Router />
          <Button loading={true}>9099</Button>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
