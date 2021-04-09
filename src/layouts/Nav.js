import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/shared/desktop/logo.svg';
import hamburger from '../assets/shared/mobile/icon-hamburger.svg';
import styled from 'styled-components';

const NavWrapper = styled.nav`
    height: 100px;
    width:100%;
    /* outline:2px solid black; */
    display:flex;
    align-items:center;
    justify-content: space-between;
    .nav-desktop {
      display:flex;
      ul{
        display:flex;
        li{
          margin: 1em;
        }
      }
    }
    .hamburger-menu {
      display: none;
    }

    @media (max-width: 400px) {
      .nav-desktop{
        display:none;
      }
      .hamburger-menu {
      display: block;
    }
    }
` 

function Nav() {
  return (
    <>
      <NavWrapper>
          <img src={logo} alt="" />
          <div className="hamburger-menu">
            <img src={hamburger} alt="" />
          </div>
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