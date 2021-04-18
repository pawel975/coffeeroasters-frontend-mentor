import React from 'react';
import styled from 'styled-components';
import logo from '../assets/shared/desktop/logo.svg';
import {Link} from 'react-router-dom'
import close from '../assets/shared/mobile/icon-close.svg'

const HamburgerMenuWrapper = styled.div`
    width:100vw;
    margin:auto;
    position:fixed;
    transform:translate(-50%,0);
    top:0;
    left:50%;
    height:100%;

    .modal-background {
        margin:auto;
        position:absolute;
        transform:translate(-50%,0);
        width:100vw;
        top:0;
        left:50%;
        height:100%;
        background-color:#FEFCF7;
        opacity:0.9;
    }

    .modal-content {
        width:100%;
        position: absolute;
        background-color:#FEFCF7;

        .modal-nav {
            outline:2px solid green;
            display:flex;
            align-items:center;
            justify-content:space-between;

            img {
                padding:1em;
            }

            img.logo {
                height:18px;
            }
        }
    }




    
`

const HamburgerMenu = () => {
    return(
        <HamburgerMenuWrapper>
            <div className="modal-background"></div>
            <div className='modal-content'>
                <div className="modal-nav">
                    <img className="logo" src={logo} alt="" />
                    <img className="close" src={close} alt="" /> 
                </div>  
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
            </div>
        </HamburgerMenuWrapper>
    )
};

export default HamburgerMenu;