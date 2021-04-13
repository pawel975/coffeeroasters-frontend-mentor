import React, {useState} from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
    width: 100%;
    position:relative;
    background-color:green;
    height:auto;

    .select {
        display: flex;
        margin:0;
    }

    .options {
        list-style:none;
        margin:0;
        padding:0;
        background-color: lightblue;
        display:flex;
        flex-direction:column;

        li {
            width:100%;
            background-color:yellow;
        }

        h1, p {
            pointer-events:none
        }
    }
`

const Dropdown = ({id,aspect,click}) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(!open)
        console.log(aspect.question)
    }

    return(
        <DropdownWrapper id={id}>
             <div className="select">
                <h3>{aspect.question}</h3>
                <button onClick={handleClickOpen}>Open</button>
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