import styled from 'styled-components';
import bgSteps from '../../assets/plan/mobile/bg-steps.png';

export const PlanWrapper = styled.div`
    width:100%;

.introduction {
    width:100%;
    position:relative;

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
        margin-top: 6em;
        display:flex;
        flex-direction:column;
        align-items:center;
        
    }

`