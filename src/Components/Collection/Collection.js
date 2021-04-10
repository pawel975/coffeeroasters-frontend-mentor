import React from 'react';
import {CollectionWrapper} from '../Collection/Collection-styling.js'

const Collection = ({img,name,description})=> {
    return(
        <CollectionWrapper>
            <img src={img} alt=""/>
            <div className="description">
                <h1 style={
                    name === "Danche"? {textShadow:"0px 3px 5px #939393"}:null}
                    >{name}</h1>
                <p>{description}</p>
            </div>
        </CollectionWrapper>
    )
}

export default Collection;