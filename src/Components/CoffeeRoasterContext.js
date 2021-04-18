import React, {useState, createContext } from 'react';

export const CoffeeContext = createContext();

export const CoffeeProvider = props => {
    const [state, setState] = useState({
        howYouDrink: "",
        typeOfCoffee:"",
        howMuch: "",
        grinded: "",
        deliver:"",
      })

    return(
        <CoffeeContext.Provider value={[state,setState]}>
            {props.children}
        </CoffeeContext.Provider>
    )
};

export const HamburgerContext = createContext();

export const HamburgerProvider = props => {

    const [hamburgerModalActive, setHamburgerModalActive] = useState(false);

    return(
        <HamburgerContext.Provider value={[hamburgerModalActive, setHamburgerModalActive]}>
            {props.children}
        </HamburgerContext.Provider>
    )
}