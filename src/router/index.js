import React from "react";
import Loadanle from "react-loadable";
import { Route, Switch } from "react-router-dom";
import {Spin} from 'antd'

const LOGIN=<div style={{width:'100vw',height:'100vh',textAlign:'center',lineHeight:'100vh'}}><Spin size='large'></Spin></div>

const Login = Loadanle({
  loader: () => import("../pages/login"),
  loading: () => LOGIN
});

const Home = Loadanle({
  loader: () => import("../pages/home"),
  loading: () => LOGIN
});


export default () => {
  return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
  );
};
