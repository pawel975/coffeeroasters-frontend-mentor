import React from 'react';
import { StepWrapper } from './Step-styling';

const Step = ({number, name, description}) => {
    return(
        <StepWrapper>
            <h1>{number}</h1>
            <div className="description">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </StepWrapper>
    )
}

export default Step;