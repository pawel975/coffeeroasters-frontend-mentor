import styled from 'styled-components';

export const FeatureWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    width:85%;
    min-height:382px;
    margin-top: 2em;
    border-radius:7px;
    background: #0E8784;

    img {
        /* outline:2px solid yellow; */
    }

    .description {
        /* outline: 2px solid red; */
        width:80%;
        min-height:131px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;

        h1 {
            text-align:center;
            margin:0.3em 0;
            /* outline:2px solid red; */
            font-size: 24px;
            font-family: 'Fraunces', serif;
            font-weight:bold;
            color: #FEFCF7;
            min-height:32px;
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

    @media (min-width:700px) {
        padding: 2em 2em;
        min-height:0;
        width:80%;
        flex-direction:row;
        align-items:center;
        img{
            width:10%;
        }
        .description {
            margin-left:2em;
            width:70%;
            align-items:flex-start;
            min-height:0; 
            
            h1 {
            margin-bottom:0.8em;
            }
            p{
            text-align:left;
            }   
      }
    }

    @media (min-width:1250px) {
        padding: 2em 0em;
        min-height:270px;
        width:30%;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        img{
            padding:1em;
            width:20%;
        }
        .description {
            margin-left:0em;
            margin-top:1em;
            width:70%;
            align-items:center;
            min-height:0; 
            
            h1 {
            width:100%;
            /* outline:2px solid green; */
            margin-bottom:0.8em;
            }
            p{
            text-align:center;
            }   
      }
    }
`