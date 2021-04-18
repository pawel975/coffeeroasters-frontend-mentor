import styled from 'styled-components';
import bgSteps from '../../assets/plan/mobile/bg-steps.png';

export const PlanWrapper = styled.div`
    width:100%;

.introduction {
    width:100%;
    position:relative;
    background-color:#F2F2F2;

    .background {
        width:100%;
        border-radius:10px;
    }

    .description {
        width:80%;
        text-align:center;
        position:absolute;
        transform: translate(-50%,-50%);
        top:50%;
        left: 50%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;
        
        h1{
            margin:0 0 0 0;
            color: white;
            font-family: 'Fraunces', serif;
            font-weight:900;
            font-size:40px;
        }
        
        p{
            font-family: 'Barlow', sans-serif;
            color: white;
            opacity:0.8;
            color: #FEFCF7;
            font-weight:300;
            font-size:15px;
            line-height:25px;
        }

    }

}
.steps {
    * p,h2{
        color:#FFFFFF;
    }

    * p {
        opacity:0.8;
    }
    border-radius:7px;
    background-image: url(${bgSteps}) ;
    min-height:1028px;
    /* outline:2px solid red; */
    width: 100%;
    margin-bottom:6em;
    margin-top: 6em;
    display:flex;
    flex-direction:column;
    align-items:center;
    
}

.summary {
    margin:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:95%;

    .summary-text {
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:space-between;
        background-color:#2C343E;
        border-radius:7px;
        padding:0em 7.5%;
        margin-bottom:3em;

        h1 {
            margin: 1.5em 0 0.5em 0 ;
            padding:0;
            color:#FFFFFF;
            font-size:16px;
            line-height:26px;
            font-family:"Barlow", serif;
            letter-spacing:0px;
            opacity:0.5;
            font-weight:300;
        }

        p {
            margin-top:0;
            color:#FFFFFF;
            font-size:24px;
            line-height:40px;
            font-family:"Fraunces", serif;
            letter-spacing:0px;
            font-weight:700;

            span {
                color: #0E8784;
            }
        }
    }
    button{
        border:none;
        background-color: #0E8784;
        color: #FEFCF7;
        font-family: 'Fraunces', serif;
        font-size:18px;
        font-weight:900;
        width:217px;
        height:56px;
        border-radius:10px;
        }
    }

`