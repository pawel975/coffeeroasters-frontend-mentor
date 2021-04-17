import React, {useState, createContext } from 'react';

export const CoffeeContext = createContext();

export const CoffeeProvider = ({children}) => {
    const [state, setState] = useState({
        howYouDrink: "",
        typeOfCoffee:"",
        howMuch: "",
        grinded: "",
        deliver:"",
      })

    return(
        <CoffeeContext.Provider value={[state,setState]}>
            {children}
        </CoffeeContext.Provider>
    )
};