import React, {useState} from 'react';
import styled, { keyframes } from 'styled-components';
import {RiArrowDropDownLine} from 'react-icons/ri'

const dashOpen = keyframes`
    from {transform: rotate(0deg);}
    to {transform:rotate(180deg);}
`;

const dashClose = keyframes`
    from {transform: rotate(180deg);}
    to {transform:rotate(0deg);}
`;

const DropdownWrapper = styled.div`
    /* outline:2px solid green; */
    margin:auto;
    width: 95%;
    position:relative;
    background-color:transparent;
    height:auto;

    .select {
        display: flex;
        margin:0;
        align-items:center;
        justify-content:space-between;

        h3 {
            color: #83888F;
            font-size: 24px;
            line-height:28px;
            width:75%;
            font-family:"Fraunces", serif;
        }

        .dash-icon {
            color:#0E8784;
        }

        .dash-active {
            animation: ${dashOpen} 0.2s linear;
            transform: rotate(180deg);
        }

        .dash-inactive { 
            animation: ${dashClose} 0.2s linear;
            transform: rotate(0deg);
        }
    }

    .options {
        list-style:none;
        margin:0;
        padding:0;
        margin-top:1em;
        margin-bottom:7em;
        width:100%;
        background-color: transparent;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        /* outline: 2px solid green; */

        li {
            margin:auto;
            width:auto;
            margin-bottom:1em;
            padding:0.5em 1.5em;
            color:#333D4B;
            /* outline:2px solid red; */
            background-color:#F4F1EB;
            min-height:140px;
            stroke: #979797;
            border-radius:5px;
            border: 1px lightgrey solid;
        }

        h1 {
            font-family:"Fraunces", serif;
            font-size:24px;
            line-height:32px;
        }

        p {
            font-family:"Barlow", serif;
            font-size:16px;
            line-height:26px;
        }

        h1, p {
            pointer-events:none
        }
    }
`

const Dropdown = ({state,id,aspect,click}) => {

    const {howYouDrink,typeOfCoffee,howMuch,grinded,deliver}

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(!open)
    }

    return(
        <DropdownWrapper id={id}>
             <div className="select">
                <h3>{aspect.question}</h3>
                <RiArrowDropDownLine 
                    className={`dash-icon ${open? "dash-active":"dash-inactive"}`} 
                    size="60px" onClick={handleClickOpen}>Open
                </RiArrowDropDownLine>
            </div>
            {open && (
                <ul className="options">
                    <li onClick={click} value={0}>
                        <h1>{aspect.options[0].name}</h1>
                        <p>{aspect.options[0].text}</p>
                    </li>
                    <li onClick={click} value={1}>
                        <h1>{aspect.options[1].name}</h1>
                        <p>{aspect.options[1].text}</p>
                    </li>
                    <li onClick={click} value={2}>
                        <h1>{aspect.options[2].name}</h1>
                        <p>{aspect.options[2].text}</p>
                    </li>
                </ul>
            )}
        </DropdownWrapper>
    )
}

export default Dropdown;