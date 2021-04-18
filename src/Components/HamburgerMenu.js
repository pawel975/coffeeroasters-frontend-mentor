import React, {useContext} from 'react';
import styled from 'styled-components';
import logo from '../assets/shared/desktop/logo.svg';
import {Link} from 'react-router-dom'
import close from '../assets/shared/mobile/icon-close.svg';
import {HamburgerContext} from '../Components/CoffeeRoasterContext';

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
            padding:1em 0.2em;
            padding-bottom:3em;
            /* outline:2px solid green; */
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

        .links-wrapper {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        list-style:none;
        padding:0;
        margin:0;
        height:150px;
        padding-bottom:3em;
        box-shadow: 0px 50px 40px rgb(254, 252, 247);
        
        .link {
            text-decoration:none;
        }

        
        li {
            text-align:center;
            font-family:"Fraunces", serif;
            /* outline: 2px solid green; */
            color:#333D4B;
            font-weight:bold;
            font-size:24px;
            line-height:32px;

            &:hover {
                color:silver;
            }
        }
    }
}

`

const HamburgerMenu = () => {

    const handleModalClose = () => {
        setHamburgerModalActive(false)
    }

    const [hamburgerModalActive, setHamburgerModalActive] = useContext(HamburgerContext)

    return(
        <HamburgerMenuWrapper>
            <div onClick={handleModalClose}className="modal-background"></div>
            <div className='modal-content'>
                <div className="modal-nav">
                    <img className="logo" src={logo} alt="" />
                    <img onClick={handleModalClose} className="close" src={close} alt="" /> 
                </div>  
                <ul className="links-wrapper">
                    <Link onClick={handleModalClose} className="link" to="/">
                        <li>HOME</li>
                    </Link>
                    <Link onClick={handleModalClose} className="link" to="/about">
                        <li>ABOUT US</li>
                    </Link>
                    <Link onClick={handleModalClose} className="link" to="/plan">
                        <li>CREATE YOUR PLAN</li>
                    </Link>
                </ul>
            </div>
        </HamburgerMenuWrapper>
    )
};

export default HamburgerMenu;