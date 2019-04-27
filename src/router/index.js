import React from "react";
import Loadanle from "react-loadable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Login = Loadanle({
  loader: () => import("../pages/login"),
  loading: () => <div>loading...</div>
});

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};
