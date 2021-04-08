import React from 'react';
import Nav from '../layouts/Nav';
import Main from '../layouts/Main';
import Footer from '../layouts/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import styled from "styled-components";


const AppWrapper = styled.div`
    position:relative;
    width:100%;
    min-height:100vh;
    background: #F2F2F2;
    display:flex;
    flex-direction:column;
    align-items:center;
    .app {
      outline:2px solid red;
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
        <AppWrapper>
          <div className="app">
            <Nav/>
            <Main/>
            <Footer/>
          </div>
        </AppWrapper>
      </Router>

  );
}

export default App;
