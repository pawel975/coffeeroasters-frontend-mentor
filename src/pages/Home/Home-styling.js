import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:100%;
    /* outline: 2px solid green; */
    .introduction {
        position:relative;
        width:100%;

        .background-mobile {
            display:block;
            width:100%;
            border-radius:10px;
            }

        .background-tablet {
            display:none;
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
            /* outline:2px solid red; */
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
        margin-top:6em;
        /* outline:2px solid green; */
        width:100%;
        min-height:1500px;
        display:flex;
        position:relative;
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

        .features {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            position:absolute;
            bottom:0;
            /* outline:2px solid yellow; */
            height:auto;
        }
    }

    .steps {
        /* outline:2px solid red; */
        width: 100%;
        margin-top: 6em;
        display:flex;
        flex-direction:column;
        align-items:center;

        h1.title {
            width:100%;
            text-align:center;
            font-size:32px;
            line-height:32px;
            color: #83888F;
            font-family: "Fraunces", serif;
        }

        
        .steps-path {
            display:none;
        }

        button{
            margin-top:1em;
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

@media (min-width: 700px) {
    .introduction {
        display:flex;
        justify-content:flex-start;

        .background-mobile {
            display:none;
            width:100%;
            border-radius:10px;
            }

        .background-tablet {
            display:block;
            width:100%;
            border-radius:10px;
        }
        .description {
            width:50%;
            left: 35%;
            align-items:flex-start;
            
            h1{
                text-align:left;
            }
            
            p{
                text-align:left;
            }

            button{
                margin-top:1em;
            }
        }
    }
    .collection {
        h1.title{
            font-size:90px;
        }
    }

    .benefits {
        margin-top:6em;
        /* outline:2px solid green; */
        width:100%;
        min-height:885px;
        display:flex;
        position:relative;
        flex-direction:column;
        align-items:center;

        .intro {
            border-radius:10px;
            position:relative;
            width:100%;
            height:600px;
            background: #2C343E;
            overflow:hidden;

            &:after{
                content: "";
                position:absolute;
                background: #000;
                opacity:0.2;
                height:55%;
                width:100%;
                bottom:0;
            }

            .text {
                h1{
                }
                p{
                }
            }
        }

        .features {
        }
    }

    .steps {
        /* outline:2px solid red; */
        width: 100%;
        margin-top: 6em;
        display:flex;
        flex-direction:column;
        align-items:flex-start;

        h1.title {
            width:100%;
            text-align:center;
            font-size:32px;
            line-height:32px;
            color: #83888F;
            font-family: "Fraunces", serif;
        }

        .steps-path {
            position:relative;
            display:flex;
            outline:2px solid black;
            width:70%;
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
                background-color:#FEFCF7;
                z-index:1;
                border: 2px solid #0E8784;
                width:31px;
                height:31px;
                border-radius:50%;
            }
        }

        .steps-container {
            display:flex;
        }

        button{
            margin-top:1em;
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
    
`