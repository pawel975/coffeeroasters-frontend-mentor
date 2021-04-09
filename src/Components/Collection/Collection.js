import React from 'react';
import {CollectionWrapper} from '../Collection/Collection-styling.js'

const Collection = ({img,name,description})=> {
    return(
        <>
        <img src={img} alt=""/>
        <h1>{name}</h1>
        <p>{description}</p>
        </>
    )
}

export default Collection;