import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/shared/desktop/logo.svg';
import hamburger from '../assets/shared/mobile/icon-hamburger.svg';
import styled from 'styled-components';
import { HamburgerContext } from '../Components/CoffeeRoasterContext';
import HamburgerMenu from '../Components/HamburgerMenu';

const NavWrapper = styled.nav`
    height: 18px;
    padding:2em 0;
    width:100%;
    /* outline:2px solid black; */
    display:flex;
    align-items:center;
    justify-content: space-between;

    img {
      height:18px;
    }

    .nav-desktop {
      display:none;
    }
    .hamburger-menu {
      display: block;
    }

    @media (min-width: 700px) {
      .nav-desktop{
        display:flex;
        ul{
          display:flex;
          list-style:none;
        li{
          margin: 1em;
          text-decoration:none;
        }
      }
      }
      .hamburger-menu {
      display: none;
    }
    }
` 

function Nav() {

  const [hamburgerModalActive, setHamburgerModalActive] = useContext(HamburgerContext)

  const handleHamburgerModalOpen = () => {
    setHamburgerModalActive(true)
  }

  return (
    <>
      <NavWrapper>
          <img src={logo} alt="" />
          <div onClick={handleHamburgerModalOpen} className="hamburger-menu">
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