import styled from 'styled-components';

export const StepWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
margin:3em 0;
min-height:256px;
justify-content: space-between;

h1{
    font-size:72px;
    color:#FDD6BA;
    font-family: 'Fraunces', serif;
    /* outline:2px solid purple; */
    padding:0;
    margin:0;
    line-height:72px;
}
.description {
    padding:2px;
    min-height:156px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    /* outline:2px solid purple; */
    h2 {
        margin:0;
        /* outline:2px solid red; */
        font-size: 28px;
        font-family: 'Fraunces', serif;
        font-weight:bold;
        color: #333D4B;
        min-height:32px;
    }
    p{
        margin:0;
        line-height:25px;
        /* outline:2px solid green; */
        font-family: 'Barlow', sans-serif;
        text-align:center;
        color:#333D4B;
        font-size:15px;
        min-height:100px;
    }   
}
`