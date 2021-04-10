import React from 'react';
import {CollectionWrapper} from '../Collection/Collection-styling.js'

const Collection = ({img,name,description})=> {

    const styling = () => {
        if(name === "Danche") {
            return {textShadow:"0px 3px 5px #939393"}
        } else if (name === "Piccollo") {
            return {textShadow: '-1px 0 black, 0 0 1px black, 1px 0 black, 0 -1px black'}
        }
    }

    return(
        <CollectionWrapper>
            <img src={img} alt=""/>
            <div className="description">
                <h1 style={styling()}
                    >{name}</h1>
                <p>{description}</p>
            </div>
        </CollectionWrapper>
    )
}

// {
//     name === "Danche"? {textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}:null}

export default Collection;