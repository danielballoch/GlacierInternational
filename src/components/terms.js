import React, {useState} from "react"
import { Link } from 'gatsby'
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StaticImage } from "gatsby-plugin-image";

const termsStyles = ({menuOpen}) => css`
${'' /* display: none; */}
${'' /* overflow-x: scroll; */}
${'' /* white-space: nowrap; */}
@media(max-width: 940px){

}
font-family: visby,sans-serif;
transition: .5s;
transition-delay: 0;
position: fixed;
color: white;
justify-content: flex-start;
align-items: center;
top: 0;
right:0;
opacity: 0;
z-index: -400;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
transform: translateY(-3%);
div {
    overflow-y: scroll;
    margin-top: 100px;
    padding: 100px 0;
    width: 800px;
    @media(max-width: 940px){
        width: 90%;
    }
    
}
h1 {
    color: white;
}
p {
    color: white;
}
button {
    padding: 10px 40px;
}
button:hover {
    cursor: pointer;
}
${menuOpen === true &&`
z-index: 800;
display: flex;
transition-delay: .2s;
transition: opacity .8s, transform .5s;
transition-timing-function: ease-out;
opacity: 1;
transform: translateX(0%);
`}
`
const backStyle = ({menuOpen}) => css`
    position: fixed;
    z-index: -100;
    top: 0;
    left: 0;
    ${'' /* transition: .3s; */}
    transition-delay: .3s;
    transition: background-color .3s, z-index .4s;
    width: 100%;
    height: 100vh;
    background-color: rgba(255,255,255,0);

${menuOpen === true &&`
z-index: 400;
transition: background-color .3s, z-index .1s;
background-color: rgba(0,0,0,.8);
`}
`




export default function Terms(){

    const [menuOpen, setMenuOpen] = useState(true);
    let DrawerLinks = (
        <div css={termsStyles({ menuOpen })}>
            <div>
                <h1>Terms & Conditions</h1>
                <p>
                Glacier International is an independent vehicle importer & trader, and is not affiliated in any way with Toyota Motor Corporation.  All logos, images, products and company names and trademarks including TOYOTA, TUNDRA and TRD are and remain the property of their respective owners. 
                </p>
                <p>
                All goods and services offered by Glacier International are not provided by or with the authorisation of Toyota Motor Corporation and Glacier International is not affiliated or endorsed by Toyota Motor Corporation in any way. 
                </p>
                <p>
                "TOYOTA" and "TUNDRA" are registered trademarks of Toyota Motor Corporation. TUNDRA is used in the title of this website solely to identify the subject of interest to the website. Toyota Motor Corporation, Toyota Motor Sales, U.S.A., Inc. and their affiliated companies are not responsible in any way for the contents of the site, which are solely the responsibility of the publisher. The contents of the website do not reflect the policy or opinions of Toyota Motor Corporation, Toyota Motor Sales, U.S.A., Inc. or any of Toyota's affiliated companies. This website is not affiliated with, endorsed, sponsored, or supported by Toyota Motor Corporation, Toyota Motor Sales, U.S.A., Inc. or any of Toyota's affiliated companies.
                </p>
                <button onClick={() => {setMenuOpen(false); document.cookie = "termsAccepted=true; new Date(new Date().getTime()+60*60*1000*0.001).toGMTString()"; console.log("document cookie after click: " + document.cookie)}}> Accept Terms & Enter Website</button>
            </div>
            
        </div> 
    )
    console.log(menuOpen)
    return (
    <div>    

    {DrawerLinks}
    <div css={backStyle({ menuOpen })}/>
    </div>
    )
}