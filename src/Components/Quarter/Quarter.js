import React from 'react';
import { QuarterWrapper } from './Quarter-styling';


const Quarter = ({img,country,street,city,postCode,tel}) => {
    return(
        <QuarterWrapper>
            <img src={img} alt="" />
            <h1>{country}</h1>
            <ul>
                <li>{street}</li>
                <li>{city}</li>
                <li>{postCode}</li>
                <li>{tel}</li>
            </ul>
        </QuarterWrapper>
    )
}

export default Quarter;