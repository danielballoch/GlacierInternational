import React, {useState, useEffect} from "react"
import { css } from '@emotion/react';
import { Link } from 'gatsby'

const termsStyles = ({menuOpen}) => css`
${'' /* display: none; */}
${'' /* overflow-x: scroll; */}
${'' /* white-space: nowrap; */}
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
@media(max-width: 940px){
    div {
        flex-direction: column;
        p {
            padding: 0 10px;
        }
    }
button {
    padding: 30px 20px !important;
    margin-top: 20px;
    width: 98%;
    font-size: 18px;
    color: black;
    border-radius: 4px;
    border: none;
}
}
font-family: visby,sans-serif;
transition: .5s;
transition-delay: 0;
position: fixed;
background-color: rgba(355,355,355,0.98);
color: black;
justify-content: flex-start;
align-items: center;
bottom: 0;
right:0;
opacity: 0;
z-index: -400;
width: 100%;
display: flex;
flex-direction: column;
transform: translateY(-3%);
div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    max-width: 900px;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
h1 {
    color: black;
}
p {
    color: black;
}
button {
    transition: .3s;
    background-color: #439c43;
    color: white;
    border: none;
    border-radius: 2px;
    padding: 0 70px;
    ${'' /* margin: 40px 20px; */}
    height: 60px;
    margin: 0 40px;
    font-size: 16px;
    weight: 200;    
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
button:hover {
    cursor: pointer;
    background-color: #49aa49;
}
transform: translateY(100%);
${menuOpen === true &&`
z-index: 800;
display: flex;
transition-delay: .2s;
transition: opacity .8s, transform .5s;
transition-timing-function: ease-out;
opacity: 1;
transform: translateY(0%);
`}
`





export default function Terms(){
    useEffect (() => {
        if(sessionStorage.getItem('terms') !== 'accepted'){
            setMenuOpen(true);
        }
    })
 
    const [menuOpen, setMenuOpen] = useState(false);
    let DrawerLinks = (
        <div css={termsStyles({ menuOpen })}>
            <div>
                <p>
                We use cookies to ensure that we give you the best experience on our website. If you continue to use this website you also agree to our <Link to="/privacy&legal">terms and conditions</Link>.
                </p>
                <button crossorgin='anonymous' onClick={() => {setMenuOpen(false); sessionStorage.setItem('terms','accepted');}}>Accept</button>
            </div>
            
        </div> 
    )
    return (
    <div>    
        {DrawerLinks}
    </div>
    )
}