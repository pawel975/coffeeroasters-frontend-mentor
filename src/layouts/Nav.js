import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/shared/desktop/logo.svg';
import styled from 'styled-components';

const NavWrapper = styled.nav`
    width:100%;
    outline:2px solid black;
` 

function Nav() {
  return (
    <>
      <NavWrapper>
          <img src={logo} alt="" />
          <nav className="nav-desktop">         
           <ul>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/plan">
                <li>Create your plan</li>
            </Link>
          </ul>
          </nav>
      </NavWrapper>
    </>
  );
}

export default Nav;