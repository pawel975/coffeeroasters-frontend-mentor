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
        div{
          display:flex;
          list-style:none;
          
          .navigation {
            text-decoration:none;
            margin-left:3em;
            color:#83888F;
            font-family:"Barlow", serif;
            font-weight:700;
            font-size:12px;
            line-height:15px;
            letter-spacing:0.92px;
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
           <div>
            <Link className="navigation" to="/">
                <span>HOME</span>
            </Link>
            <Link className="navigation" to="/about">
                <span>ABOUT US</span>
            </Link>
            <Link className="navigation" to="/plan">
                <span>CREATE YOUR PLAN</span>
            </Link>
          </div>
          </nav>
      </NavWrapper>
    </>
  );
}

export default Nav;