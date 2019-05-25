import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'

import RouterConf from "./router";
import  Store from "./redux/index";

import "./App.less";

function App() {
  return (
    <Provider store={Store().store}>
      <PersistGate loading={null} persistor={Store().persistor}>
      <Router>
        <div className="App">
          <RouterConf />
        </div>
      </Router>
       </PersistGate>
     
    </Provider>
  );
}

export default App;
