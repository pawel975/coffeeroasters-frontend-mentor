import React from 'react';
import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:100%;
    /* outline: 2px solid green; */
    .introduction {
        position:relative;
        width:100%;

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
                line-height:1.4em;
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
    }
    .collection {
        margin: 6em 0 0 0;
        width: 100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        /* outline: 4px solid red; */

        h1.title{
            position:relative;
            margin: 0 0 0.5em 0;
            outline:2px solid red;
            padding:0.3em 0;
            font-size:35px;
            font-weight:900;
            background: -webkit-linear-gradient(270deg,#979797,#F7F7F7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: 'Fraunces', serif;
        }
    }

    .benefits {
        outline:2px solid green;
        width:100%;
        height:1500px;
        display:flex;
        flex-direction:column;
        align-items:center;

        .intro {
            border-radius:10px;
            position:relative;
            width:100%;
            height:900px;
            background: #2C343E;
            overflow:hidden;

            &:after{
                content: "";
                position:absolute;
                background: #000;
                opacity:0.2;
                height:70%;
                width:100%;
                bottom:0;
            }
        }

        .text {
            height:177px;
            margin:auto;
            margin-top:4em;
            /* outline:2px solid red; */
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            min-width:50px;
            width:85%;
            text-align:center;

            h1{
                font-size:28px;
                font-family: "Fraunces", serif;
                margin:0;
                color:#FEFCF7;
                /* outline:2px solid yellow; */
            }

            p{
                font-size:15px;
                font-family: "Barlow", serif;
                margin:0;
                line-height:25px;
                color:#FEFCF7;
                font-weight:100;
                opacity:0.7;
                /* outline: 2px solid purple; */
            }


        }
    }

`