import React from 'react';
import {CollectionWrapper} from '../Collection/Collection-styling.js'

const Collection = ({img,name,description})=> {
    return(
        <CollectionWrapper>
            <img src={img} alt=""/>
            <h1>{name}</h1>
            <p>{description}</p>
            <div>{name}</div>
        </CollectionWrapper>
    )
}

export default Collection;