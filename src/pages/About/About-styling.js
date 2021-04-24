import styled from 'styled-components';

export const AboutWrapper = styled.div`
    width:100%;

    .introduction {
        width:100%;
        position:relative;

        .background-mobile {
            display:initial;
            width:100%;
            border-radius:10px;
        }

        .background-tablet {
            display:none;
            width:100%;
            border-radius:10px;
        }

        .background-desktop {
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

        img.commitment-mobile {
            display:initial;
            border-radius:7px;
            width:100%;
        }

        img.commitment-tablet {
            display:none;
            border-radius:7px;
            width:100%;
        }

        img.commitment-desktop {
            display:none;
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
        margin-top: 5em;
        border-radius:7px;
        overflow:visible;
        background: #2C343E;
        min-height:509px;
        display:flex;
        position:relative;
        flex-direction:column;

        img.quality-mobile {
        display:initial;
        border-radius:7px;
        width:85%;
        position:absolute;
        transform: translate(-50%,-50%);
        left:50%;
        top:0px;
        margin: auto;
        }
        img.quality-desktop {
        display:none;
        border-radius:7px;
        width:85%;
        position:absolute;
        transform: translate(-50%,-50%);
        left:50%;
        top:0px;
        margin: auto;
        }

        .description {
            margin:auto;
            margin-bottom:3em;
            width:85%;
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
                margin:0;
                margin-top:1em;
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

    .quarters {
        /* outline:2px solid red; */
        width: 100%;
        min-height: 0px;
        margin-top: 6em;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;

        h1.title {
            margin-bottom:3em;
            width:100%;
            text-align:center;
            font-size:24px;
            line-height:32px;
            color: #83888F;
            font-family: "Fraunces", serif;
        }

        .quarters-wrapper {
            display:flex;
            flex-direction:column;
        }

    }


@media (min-width:700px) {
    width:100%;

.introduction {
    width:100%;
    position:relative;

    .background-mobile {
        display:none;
        width:100%;
        border-radius:10px;
    }

    .background-tablet {
        display:block;
    }

    .background-desktop {
        display:none;
    }

    .description {
        width:60%;
        text-align:left;
        margin-left:3em;
        transform: translate(0,-50%);
        left:0;
        
        h1{
            width:100%;
            text-align:left;
        }
        
        p{
            text-align:left;
        }
    }
}

.commitment {
    margin-top: 7em;
    min-height:0px;
    border-radius:7px;
    overflow:hidden;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    img.commitment-mobile {
        display:none;
    }

    img.commitment-tablet {
        display:block;
        width:50%;
    }

    img.commitment-desktop {
        display:none;
        border-radius:7px;
        width:100%;
    }

    .description {
        min-height:0px;
        margin-left:3em;
        justify-content:space-around;
        
        h1 {
            /* outline: 2px solid green; */
            margin:0;
            padding:0;
            text-align:left;
        }

        p {
            text-align:left;
            min-height:375px;
        }
    }
}

.quality {
        margin-top: 20em;
        border-radius:7px;
        overflow:visible;
        background: #2C343E;
        min-height:509px;
        display:flex;
        position:relative;
        flex-direction:column;

        img.quality-mobile {
        display:initial;
        border-radius:7px;
        width:65%;
        position:absolute;
        transform: translate(-50%,-50%);
        left:50%;
        top:0px;
        margin: auto;
        }

        .description {
            margin:auto;
            margin-top:14em;
            margin-bottom:-2em;
            width:85%;
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
                margin:0;
                margin-top:1em;
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
.quarters {
    margin-top: 4em;

    h1.title {
        margin-bottom:1em;
        text-align:left;
    }

    .quarters-wrapper {
        width:100%;
        display:flex;
        flex-direction:row;
        }

}
}

@media (min-width:1250px) {
    width:100%;

.introduction {
    width:100%;
    position:relative;

    .background-mobile {
        display:none;
        width:100%;
        border-radius:10px;
    }

    .background-tablet {
        display:none;
    }

    .background-desktop {
        display:block;
    }

    .description {
        width:40%;
        text-align:left;
        margin-left:3em;
        transform: translate(0,-50%);
        left:0;
        
        h1{
            font-size:40px;
            width:100%;
            text-align:left;
        }
        
        p{
            font-size:16px;
            text-align:left;
        }
    }
}

.commitment {
    margin-top: 7em;
    min-height:0px;
    border-radius:7px;
    overflow:hidden;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    /* outline: 2px solid green; */

    img.commitment-mobile {
        display:none;
    }

    img.commitment-tablet {
        display:none;
        width:50%;
    }

    img.commitment-desktop {
        display:block;
        border-radius:7px;
        width:100%;
        margin:3em;
    }

    .description {
        /* outline: 2px solid green; */
        min-height:0px;
        margin-left:3em;
        justify-content:space-around;
        
        h1 {
            /* outline: 2px solid green; */
            margin:0;
            margin-top:4em;
            padding:0;
            text-align:left;
        }

        p {
            /* outline: 2px solid green; */
            width:80%;
            text-align:left;
            min-height:375px;
        }
    }
}

.quality {
    /* outline:3px solid yellow; */
    margin-top:10em;
    min-height:0px;
    img.quality-mobile {
        display:none;
        }
    img.quality-desktop {
        display:initial;
        border-radius:7px;
        width:30%;
        position:absolute;
        transform: translate(-50%,-50%);
        /* outline:3px solid yellow; */
        right:-40%;
        top:30%;
        margin: auto;
        }
        
    .description {
        margin:auto;
        margin:6em 4em;
        width:85%;
        min-height:0px;
        /* outline:3px solid yellow; */
        h1 {
            text-align:left;
        }

        p {
            margin:0px;
            color:#FEFCF7;
            /* outline:3px solid yellow; */
            opacity:0.7;
            text-align:left;
            min-height:100px;
            line-height:25px;
            width:45%;
            font-family: "Barlow", serif;
            font-size:15px;
            margin-bottom:3em;
        }
        
    }
}

.quarters {
    margin:auto;
    width:90%;
    margin-top: 4em;

    h1.title {
        margin-bottom:1em;
        text-align:left;
    }

    .quarters-wrapper {
        width:100%;
        display:flex;
        flex-direction:row;
        }

}
}
`