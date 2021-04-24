import styled from 'styled-components';
import bgSteps from '../../assets/plan/mobile/bg-steps.png';

export const PlanWrapper = styled.div`
    width:100%;

.introduction {
    width:100%;
    position:relative;
    background-color:#F2F2F2;

    .background-introduction-mobile {
        display:initial;
        width:100%;
        border-radius:10px;
    }
    .background-introduction-tablet {
        display:none;
        width:100%;
        border-radius:10px;
    }
    .background-introduction-desktop {
        display:none;
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

    .steps-path {
            display:none;
        }

    .steps-container {
        display:flex;
        flex-direction:column;
        
    }
    
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

.modal-wrapper {
    margin:auto;
    position:fixed;
    transform:translate(-50%,0);
    width:100vw;
    top:0;
    left:50%;
    height:100%;

    .modal-background {
        margin:auto;
        position:relative;
        transform:translate(-50%,0);
        width:100vw;
        top:0;
        left:50%;
        height:100%;
        background-color:black;
        opacity:0.4;
    }

    .modal-summary {
        overflow:hidden;
        border-radius:7px;
        /* outline:3px solid red; */
        position:fixed;
        transform:translate(-50%,0);
        top:15px;
        left:50%;
        background-color:white;
        margin:auto;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:87%;

    .modal-summary-text {
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:space-between;
        background-color:#FEFCF7;
        border-radius:7px;
        padding-bottom:1.5em;
        /* outline:2px solid purple; */

        header {
            width:100%;
            background-color:#333D4B;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            
            h1 {
            /* outline:2px solid green; */
            margin: 1.2em 0.7em;
            padding:0;
            color:#FFFFFF;
            font-size:28px;
            line-height:32px;
            font-family:"Fraunces", serif;
            letter-spacing:0px;
            font-weight:700;
            }
        }

        .summary-description {
            padding:1.5em 7.5% 0 7.5%;
            margin:0;
            color:#83888F;
            font-size:24px;
            line-height:40px;
            font-family:"Fraunces", serif;
            letter-spacing:0px;
            font-weight:700;
            /* outline:3px solid green; */
            span {
                color: #0E8784;
            }
        }

        .summary-confirm {
            margin:0;
            padding:0 7.5%;
            font-size:15px;
            font-family:"Barlow", serif;
            line-height:25px;
            color: #333D4B;
            font-weight:400;
        }

        .checkout-container {
            width:85%;
            justify-content:space-between;
            align-items:center;
            margin:auto;
            display:flex;
            flex-direction:row;
            /* outline:2px solid green; */

            h1 {
                margin-left:1em;
                font-family: "Fraunces", serif;
                color: #333D4B;
                font-size:32px;
                line-height:36px;
            }

            button{
            margin:auto;
            margin-top:1em;
            /* outline:2px solid green; */
            border:none;
            background-color: #0E8784;
            color: #FEFCF7;
            font-family: 'Fraunces', serif;
            font-size:18px;
            font-weight:900;
            width:clamp(150px,85%,200px);
            height:56px;
            border-radius:10px;
        }
        }
    }
}
}

@media (min-width:700px) {
    width:100%;

.introduction {
    width:100%;
    position:relative;
    background-color:#F2F2F2;

    .background-introduction-mobile {
        display:none;
    }
    .background-introduction-tablet {
        display:initial;
    }
    .background-introduction-desktop {
        display:none;
    }

    .description {
        width:60%;
        text-align:left;
        transform: translate(0,-50%);
        left: 2em;

        h1{
            width:100%;
        }
        
        p{
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
    position:relative;
    transform:translate(-50%,0);
    left:50%;
    top:50%;
    min-height:0px;
    /* outline:2px solid red; */
    width: 100%;
    padding:0 5.5%;
    margin-bottom:6em;
    margin-top: 6em;
    display:flex;
    flex-direction:column;
    align-items:flex-start;

    .steps-path {
            margin:1em 0;
            position:relative;
            display:flex;
            /* outline:2px solid black; */
            width:72%;
            justify-content:space-between;

            .line {
                z-index:0;
                transform:translate(-50%,-50%);
                left:50%;
                top:50%;
                position:absolute;
                border:1px solid #FDD6BA;
                width:95%;
                height:0px;

            }

            .check-point {
                background-color:#2C343E;
                z-index:1;
                border: 2px solid #0E8784;
                width:31px;
                height:31px;
                border-radius:50%;
            }
        }

        .steps-container {
            flex-direction:row;
        }
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

.modal-wrapper {
    margin:auto;
    position:fixed;
    transform:translate(-50%,0);
    width:100vw;
    top:0;
    left:50%;
    height:100%;

    .modal-background {
        margin:auto;
        position:relative;
        transform:translate(-50%,0);
        width:100vw;
        top:0;
        left:50%;
        height:100%;
        background-color:black;
        opacity:0.4;
    }

    .modal-summary {
        overflow:hidden;
        border-radius:7px;
        /* outline:3px solid red; */
        position:fixed;
        transform:translate(-50%,0);
        top:15px;
        left:50%;
        background-color:white;
        margin:auto;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:clamp(200px,87%,540px);

    .modal-summary-text {
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:space-between;
        background-color:#FEFCF7;
        border-radius:7px;
        padding-bottom:1.5em;
        /* outline:2px solid purple; */

        header {
            width:100%;
            background-color:#333D4B;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            
            h1 {
            /* outline:2px solid green; */
            margin: 1.2em 0.7em;
            padding:0;
            color:#FFFFFF;
            font-size:28px;
            line-height:32px;
            font-family:"Fraunces", serif;
            letter-spacing:0px;
            font-weight:700;
            }
        }

        .summary-description {
            padding:1.5em 7.5% 0 7.5%;
            margin:0;
            color:#83888F;
            font-size:24px;
            line-height:40px;
            font-family:"Fraunces", serif;
            letter-spacing:0px;
            font-weight:700;
            /* outline:3px solid green; */
            span {
                color: #0E8784;
            }
        }

        .summary-confirm {
            margin:0;
            padding:0 7.5%;
            font-size:15px;
            font-family:"Barlow", serif;
            line-height:25px;
            color: #333D4B;
            font-weight:400;

            .checkout-container {
            width:85%;
            justify-content:space-between;
            align-items:center;
            margin:auto;
            display:flex;
            flex-direction:row;
            outline:2px solid green;

            h1 {
                font-family: "Fraunces", serif;
                color: #333D4B;
                font-size:32px;
                line-height:36px;
            }

            button{
            margin:auto;
            margin-top:1em;
            /* outline:2px solid green; */
            border:none;
            background-color: #0E8784;
            color: #FEFCF7;
            font-family: 'Fraunces', serif;
            font-size:18px;
            font-weight:900;
            width:clamp(150px,85%,200px);
            height:56px;
            border-radius:10px;
        }
        }
        }
    }
}
}
}

@media (min-width:1250px) {
    width:100%;

.introduction {
    width:100%;
    position:relative;
    background-color:#F2F2F2;

    .background-introduction-mobile {
        display:none;
    }
    .background-introduction-tablet {
        display:none;
    }
    .background-introduction-desktop {
        display:initial;
    }

    .description {
        width:40%;
        text-align:left;
        transform: translate(0,-50%);
        left: 2em;

        h1{
            font-size:70px;
            width:100%;
        }
        
        p{
            font-size:16px;
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

    * {
        h2 {
            margin: 1em 0;
            width:50%;
        }
    }
    border-radius:7px;
    background-image: url(${bgSteps}) ;
    position:relative;
    transform:translate(-50%,0);
    left:50%;
    top:50%;
    min-height:0px;
    /* outline:2px solid red; */
    width: 90%;
    padding:2em 5.5%;
    margin-bottom:6em;
    margin-top: 6em;
    display:flex;
    flex-direction:column;
    align-items:flex-start;

    .steps-path {
            margin:1em 0;
            position:relative;
            display:flex;
            /* outline:2px solid black; */
            width:72%;
            justify-content:space-between;

            .line {
                z-index:0;
                transform:translate(-50%,-50%);
                left:50%;
                top:50%;
                position:absolute;
                border:1px solid #FDD6BA;
                width:95%;
                height:0px;

            }

            .check-point {
                background-color:#2C343E;
                z-index:1;
                border: 2px solid #0E8784;
                width:31px;
                height:31px;
                border-radius:50%;
            }
        }

        .steps-container {
            flex-direction:row;
        }
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

.modal-wrapper {
    margin:auto;
    position:fixed;
    transform:translate(-50%,0);
    width:100vw;
    top:0;
    left:50%;
    height:100%;

    .modal-background {
        margin:auto;
        position:relative;
        transform:translate(-50%,0);
        width:100vw;
        top:0;
        left:50%;
        height:100%;
        background-color:black;
        opacity:0.4;
    }

    .modal-summary {
        overflow:hidden;
        border-radius:7px;
        /* outline:3px solid red; */
        position:fixed;
        transform:translate(-50%,0);
        top:15px;
        left:50%;
        background-color:white;
        margin:auto;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:clamp(200px,87%,540px);

    .modal-summary-text {
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:space-between;
        background-color:#FEFCF7;
        border-radius:7px;
        padding-bottom:1.5em;
        /* outline:2px solid purple; */

        header {
            width:100%;
            background-color:#333D4B;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            
            h1 {
            /* outline:2px solid green; */
            margin: 1.2em 0.7em;
            padding:0;
            color:#FFFFFF;
            font-size:28px;
            line-height:32px;
            font-family:"Fraunces", serif;
            letter-spacing:0px;
            font-weight:700;
            }
        }

        .summary-description {
            padding:1.5em 7.5% 0 7.5%;
            margin:0;
            color:#83888F;
            font-size:24px;
            line-height:40px;
            font-family:"Fraunces", serif;
            letter-spacing:0px;
            font-weight:700;
            /* outline:3px solid green; */
            span {
                color: #0E8784;
            }
        }

        .summary-confirm {
            margin:0;
            padding:0 7.5%;
            font-size:15px;
            font-family:"Barlow", serif;
            line-height:25px;
            color: #333D4B;
            font-weight:400;

            .checkout-container {
            width:85%;
            justify-content:space-between;
            align-items:center;
            margin:auto;
            display:flex;
            flex-direction:row;
            outline:2px solid green;

            h1 {
                font-family: "Fraunces", serif;
                color: #333D4B;
                font-size:32px;
                line-height:36px;
            }

            button{
            margin:auto;
            margin-top:1em;
            /* outline:2px solid green; */
            border:none;
            background-color: #0E8784;
            color: #FEFCF7;
            font-family: 'Fraunces', serif;
            font-size:18px;
            font-weight:900;
            width:clamp(150px,85%,200px);
            height:56px;
            border-radius:10px;
        }
        }
        }
    }
}
}
}

`