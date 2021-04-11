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
    }
`

const Dropdown2 = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(!open)
    }

    return(
        <DropdownWrapper>
             <div className="select">
                <h3>How do your drink your coffee</h3>
                <button onClick={handleClickOpen}>Open</button>
            </div>
            {open && (
                <ul className="options">
                    <li>
                        <h1>Capsule</h1>
                        <p>Compatible with Nespresso systems and similar brewers</p>
                    </li>
                    <li>
                        <h1>Filter</h1>
                        <p>For pour over or drip methods like Aeropress, Chemex, and V60</p>
                    </li>
                    <li>
                        <h1>Espresso</h1>
                        <p>Dense and finely ground beans for an intense, flavorful experience</p>
                    </li>
                </ul>
            )}
        </DropdownWrapper>
    )
}

export default Dropdown2;