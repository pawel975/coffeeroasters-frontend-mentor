import React, {useState, useRef} from 'react';
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
        margin-bottom:2em;
        width:100%;
        background-color: transparent;
        display:flex;
        flex-direction:column;
        justify-content:space-around;

        li {
            margin:auto;
            width:clamp(150px,75%,400px);
            margin-bottom:1em;
            padding:0.5em 1.5em;
            color:#333D4B;
            /* outline:2px solid red; */
            background-color:#F4F1EB;
            min-height:140px;
            border-radius:5px;
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

    .closed {
            display:none !important;
    }
`

    const Dropdown = ({state, setState, id,aspect}) => {

    const [open, setOpen] = useState(false);

    const initialStyling = useRef()

    const handleClickOpen = () => {
        setOpen(!open)
    }

    const colorReset = ()=> {
        const LiList = initialStyling.current.childNodes;
        const LiArray = Array(...LiList)
        LiArray.map(li => {
            return(
                li.style.color = "#333D4B",
                li.style.backgroundColor = "#F4F1EB"
            )
        })
    }

    const handleClickOption = (e) => {
        colorReset()
        const optionLi = e.target
        const option = Number(e.target.value)
        const aspect = Number(e.target.parentNode.parentNode.id)
        optionLi.style.color ="white";
        optionLi.style.backgroundColor ="#0E8784";
    
        switch (aspect) {
          case 0:
            setState({
              ...state,
              howYouDrink: option
            })
            break;
          case 1:
            setState({
              ...state,
              typeOfCoffee: option
            })
            break;
          case 2:
            setState({
              ...state,
              howMuch: option
            })
            break;
          case 3:
          setState({
            ...state,
            grinded: option
          })
          break;
          case 4:
          setState({
            ...state,
            deliver: option
          })
          break;
          default:
            break;
        }
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
                <ul ref={initialStyling} className={`options ${open ? "":"closed"} `}>
                    <li onClick={handleClickOption} value={0} >
                        <h1>{aspect.options[0].name }</h1>
                        <p>{aspect.options[0].text}</p>
                    </li>
                    <li onClick={handleClickOption} value={1}>
                        <h1>{aspect.options[1].name}</h1>
                        <p>{aspect.options[1].text}</p>
                    </li>
                    <li onClick={handleClickOption} value={2}>
                        <h1>{aspect.options[2].name}</h1>
                        <p>{aspect.options[2].text}</p>
                    </li>
                </ul>
        </DropdownWrapper>
    )
}

export default Dropdown;