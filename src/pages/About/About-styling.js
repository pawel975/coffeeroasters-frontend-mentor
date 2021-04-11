import styled from 'styled-components';

export const AboutWrapper = styled.div`
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
                font-size:28px;
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

    .commitment {
        margin-top: 7em;
        width:100%;
        min-height:900px;
        /* outline: 2px solid red; */
        border-radius:7px;
        overflow:hidden;
        display:flex;
        flex-direction:column;
        justify-content:space-between;

        img {
            border-radius:7px;
            width:100%;
        }

        .description {
            /* outline: 2px solid blue; */
            min-height:453px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            
            h1 {
                /* outline: 2px solid green; */
                margin:0;
                color:#333D4B;
                font-family: 'Fraunces', serif;
                min-height: 48px;
                width:100%;
                text-align:center;
            }

            p {
                margin:0px;
                color:#333D4B;
                /* outline:2px solid yellow; */
                font-weight:500;
                text-align:center;
                min-height:375px;
                line-height:25px;
                font-family: "Barlow", serif;
                font-size:15px;
            }
        }
    }

    .quality {
        margin-top: 7em;
        width:100%;
        min-height:587px;
        /* outline: 2px solid red; */
        border-radius:7px;
        overflow:hidden;
        display:flex;
        position:relative;
        flex-direction:column;
        justify-content:flex-end;

        img {
            border-radius:7px;
            width:85%;
            position:absolute;
            transform: translate(-50%,0);
            left:50%;
            top:0px;
            margin: auto;
        }

        .background {
            border-radius:7px;
            overflow:visible;
            background: #2C343E;
            min-height:509px;
            display:flex;
            flex-direction:column;
            justify-content:flex-end;

            .description {
                margin:auto;
                margin-bottom:3em;
                width:85%;
                /* outline: 2px solid blue; */
                min-height:306px;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
            
                h1 {
                    /* outline: 2px solid green; */
                    margin:0;
                    color:#FEFCF7;
                    font-family: 'Fraunces', serif;
                    min-height: 40px;
                    line-height:28px;
                    font-size:28px;
                    width:100%;
                    text-align:center;
                }

                p {
                    margin:0px;
                    color:#FEFCF7;
                    /* outline:3px solid yellow; */
                    opacity:0.7;
                    text-align:center;
                    min-height:226px;
                    line-height:25px;
                    font-family: "Barlow", serif;
                    font-size:15px;
                }
            }
        }

    }

    .quarters {
        /* outline:2px solid red; */
        width: 100%;
        min-height: 1044px;
        margin-top: 6em;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;

        h1.title {
            /* outline: 2px solid purple; */
            width:100%;
            text-align:center;
            font-size:24px;
            line-height:32px;
            color: #83888F;
            font-family: "Fraunces", serif;
        }

    }
`