import React from 'react';
import { FeatureWrapper } from './Feature-styling';

const Feature = ({img, name, description}) => {
    return(
        <FeatureWrapper>
            <img src={img} alt=""/>
            <div className="description">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </FeatureWrapper>
    )
}

export default Feature;