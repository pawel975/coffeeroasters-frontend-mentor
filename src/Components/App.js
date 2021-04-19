import React from 'react';
import Nav from '../layouts/Nav';
import Main from '../layouts/Main';
import Footer from '../layouts/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import styled from "styled-components";
import ScrollToTop from './ScrollToTop';
import {CoffeeProvider} from '../Components/CoffeeRoasterContext'
import {HamburgerProvider} from '../Components/CoffeeRoasterContext'


const AppWrapper = styled.div`
    position:relative;
    width:100%;
    min-height:100vh;
    background: #FEFCF7;
    display:flex;
    flex-direction:column;
    align-items:center;
    .app {
      /* outline:2px solid red; */
      width:90%;
      position:relative;
      display:flex;
      flex-direction: column;
      align-items:center;
    }
`;

function App() {

  return (
      <Router>
        <ScrollToTop/>
          <AppWrapper>
            <CoffeeProvider>
              <HamburgerProvider>
                <div className="app">
                  <Nav/>
                  <Main/>
                  <Footer/>
                </div>
              </HamburgerProvider>
            </CoffeeProvider>
          </AppWrapper>
      </Router>
  );
}

export default App;
