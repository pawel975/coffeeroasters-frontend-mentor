import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Plan from "../pages/Plan/Plan";
import {HamburgerContext} from '../Components/CoffeeRoasterContext'
import HamburgerMenu from '../Components/HamburgerMenu'

function Main() {

  const [hamburgerModalActive, setHamburgerModalActive] = useContext(HamburgerContext)

    return (
          <>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/plan" component={Plan}/>
            </Switch>
            {hamburgerModalActive && <HamburgerMenu/>}
          </>
    );
  }
  
  export default Main;