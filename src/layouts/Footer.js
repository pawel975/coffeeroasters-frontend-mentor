import React from 'react';
import logo from '../assets/shared/desktop/logo-white.svg';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import facebook from '../assets/shared/desktop/icon-facebook.svg';
import twitter from '../assets/shared/desktop/icon-twitter.svg';
import instagram from '../assets/shared/desktop/icon-instagram.svg';

const FooterWrapper = styled.div`
    width:95%;
    min-height: 346px;
    margin-top:7em;
    margin-bottom:5em;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    background: #2C343E;

    img{
        height:22.15px;
    }

    .links-wrapper {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        list-style:none;
        padding:0;
        margin:0;
        min-height:93px;
        
        .link {
            text-decoration:none;
        }

        
        li {
            /* outline: 2px solid green; */
            color:#83888F;
            font-weight:bold;
            font-size:12px;
            line-height:15px;
        }
    }

    .logos-wrapper {
        width:120px;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
`

function Footer() {
    return (
      <>
        <FooterWrapper>
            <img src={logo} alt="" />   
            <ul className="links-wrapper">
                <Link className="link" to="/">
                    <li>HOME</li>
                </Link>
                <Link className="link" to="/about">
                    <li>ABOUT US</li>
                </Link>
                <Link className="link" to="/plan">
                    <li>CREATE YOUR PLAN</li>
                </Link>
            </ul>
            <div className="logos-wrapper">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
            </div>
        </FooterWrapper>
      </>
    );
  }
  
  export default Footer;