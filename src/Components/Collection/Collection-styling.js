import styled from 'styled-components';

export const CollectionWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
margin:1em 0;
img{
    width:50%;
}
.description {
    /* outline:2px solid blue; */
    width:80%;
    height:90px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
}   h1 {
    margin:0;
    /* outline:2px solid red; */
    font-size: 24px;
    font-family: 'Fraunces', serif;
    font-weight:bold;
    color: #333D4B;
    height:32px;
    }
    p{
        margin:0;
        line-height:1.5em;
        /* outline:2px solid green; */
        font-family: 'Barlow', sans-serif;
        text-align:center;
        color:#333D4B;
        font-size:15px;
    }   

@media (min-width:700px) {
    width:80%;
    flex-direction:row;
    align-items:center;
    img{
        width:35%;
    }
    .description {
        margin-left:2em;
        width:70%;
        align-items:flex-start;
        }   
        
        h1 {
        margin-bottom:0.8em;
        }
        p{
            text-align:left;
        }   

@media (min-width:1250px) {
    /* outline: 2px solid green; */
    width:80%;
    flex-direction:column;
    align-items:center;
    img{
        width:60%;
        margin-bottom:4em;
        /* outline: 2px solid green; */
    }
    .description {
        margin-left:0;
        width:70%;
        height:fit-content;
        align-items: center;
        }   
        
        h1 {
            /* outline: 2px solid green; */
        margin-bottom:0.8em;
        }
        p{
            /* outline: 2px solid green; */
            text-align:center;
        }  
} 

}

`