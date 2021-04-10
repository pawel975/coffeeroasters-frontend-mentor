import styled from 'styled-components';

export const FeatureWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    width:85%;
    height:382px;
    margin-top: 2em;
    border-radius:7px;
    background: #0E8784;

    img {
        /* outline:2px solid yellow; */
    }

    .description {
        /* outline: 2px solid red; */
        width:80%;
        height:131px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;

        h1 {
        margin:0;
        /* outline:2px solid red; */
        font-size: 24px;
        font-family: 'Fraunces', serif;
        font-weight:bold;
        color: #FEFCF7;
        height:32px;
        }
        p{
        margin:0;
        line-height:25px;
        /* outline:2px solid green; */
        font-family: 'Barlow', sans-serif;
        text-align:center;
        color:#FEFCF7;
        font-size:15px;
        }   
    }

`