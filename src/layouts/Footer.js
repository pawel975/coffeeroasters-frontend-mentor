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
            
        }

        
        span {
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

@media (min-width:700px) {
    min-height: 270px;

    .links-wrapper {
        flex-direction:row;
        min-height:0px;
        margin: -1em 0 1em 0;
        
        .link {
        }

        span {
            /* outline: 2px solid green; */
            margin:0 1.5em;
        }
    }
}

@media (min-width:1250px) {
    height:fit-content;
    min-height:0px;
    flex-direction:row;
    /* outline: 2px solid green; */
    img {
        /* outline: 2px solid green; */
    }
    .links-wrapper {
        flex-direction:row;
        min-height:0px;
        margin: 0;
        padding:3em 0;
        margin-right:7em;
        /* outline: 2px solid green; */
        .link {
        }

        span {
            /* outline: 2px solid green; */
            margin:0 1.5em;
        }
    }
}

`

function Footer() {
    return (
      <>
        <FooterWrapper>
            <img src={logo} alt="" />   
            <div className="links-wrapper">
                <Link className="link" to="/">
                    <span>HOME</span>
                </Link>
                <Link className="link" to="/about">
                    <span>ABOUT US</span>
                </Link>
                <Link className="link" to="/plan">
                    <span>CREATE YOUR PLAN</span>
                </Link>
            </div>
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