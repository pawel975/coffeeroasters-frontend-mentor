import React from 'react';
import styled from 'styled-components';

export const HomeWrapper = styled.div`
width:100%;
outline: 2px solid green;
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
                margin:0 0 0em 0;
                color: white;
                font-family: 'Fraunces', serif;
                font-weight:800;
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
                font-weight:700;
                width:217px;
                height:56px;
                border-radius:10px;

            }
            }
        }
        .collection {
            width: 100%;
            display:flex;
            flex-direction:column;
            align-items:center;
            outline: 4px solid red;
            h1{
            margin:0.2em;
            font-size:40px;
            font-weight:900;
            color:grey;
            opacity:0.8;
            font-family: 'Fraunces', serif;
            }
            
        }

`