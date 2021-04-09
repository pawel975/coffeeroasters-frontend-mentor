import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Plan from "../pages/Plan/Plan";

function Main() {
    return (
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/plan" component={Plan}/>
            </Switch>
    );
  }
  
  export default Main;