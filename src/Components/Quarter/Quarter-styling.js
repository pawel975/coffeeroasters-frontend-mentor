import styled from 'styled-components';

export const QuarterWrapper = styled.div`
    display:flex;
    /* outline:2px solid purple; */
    flex-direction:column;
    align-items:center;
    width:100%;
    min-height:262px;
    justify-content: space-between;
    
    h1{
        font-size:28px;
        color:#333D4B;
        font-family: 'Fraunces', serif;
        /* outline:2px solid purple; */
        padding:0;
        margin:0;
        line-height:36px;
    }

    ul {
        display:flex;
        flex-direction:column;
        /* outline:2px solid purple; */
        list-style:none;
        margin:0;
        padding:0;

        li {
            font-weight:500;
            color:#333D4B;
            font-size:16px;
            font-family: "Barlow", serif;
            text-align:center;
            line-height:26px;
        }
    }
    
`