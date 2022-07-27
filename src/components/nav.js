import React, {useState, useEffect} from "react"
import { Link } from 'gatsby'
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StaticImage } from "gatsby-plugin-image";

//Nav

const styles = ({menuOpen}) => css`
    display: block;
    padding: 15px;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
.hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
}
.hamburger-inner {
        display: block;
        top: 70%;
        ${'' /* margin-top: 4px; */}
        width: 40px;
        height: 3px;
        background-color: white;
        border-radius: 4px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;

        transition-duration: 0.075s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);    
}

.hamburger-inner:after {
        transition: bottom 0.075s 0.12s ease,
        transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        content: "";
        left: 0;
        bottom: 10px;
        width: 40px;
        height: 3px;
        background-color: white;
        border-radius: 4px;
        position: absolute;
}

${menuOpen === true &&`
.hamburger-inner-active {
        top: 50%;
        transform: rotate(45deg);
        ${'' /* transition-delay: 0.12s; */}
        transition: top 0.075s ease,
        transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        ${'' /* transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); */}
      } 
    .hamburger-inner-active::after {
        content: "";
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.075s ease,
        transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }


`}
`

const sidebarStyles = ({menuOpen}) => css`
${'' /* display: none; */}
overflow-x: none;
overflow-y: scroll;
white-space: nowrap;
transition: .5s;
transition-delay: 0;
position: fixed;
top: 0;
right:0;
opacity: 0;
z-index: -400;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transform: translateY(-3%);
button:hover {
    cursor: pointer;
}
${menuOpen === true &&`
z-index: 210;
display: flex;
transition-delay: .2s;
transition: opacity .8s, transform .5s;
transition-timing-function: ease-out;
opacity: 1;
transform: translateX(0%);
`}
`
const backdropStyle = ({menuOpen}) => css`
    position: fixed;
    z-index: -100;
    top: 0;
    left: 0;
    ${'' /* transition: .3s; */}
    transition-delay: .3s;
    transition: background-color .3s, z-index .4s;
    width: 100%;
    overflow: auto
    padding: 0;
    margin: 0;
    overflow: hidden;
    height: 100vh;
    background-color: rgba(255,255,255,0);

${menuOpen === true &&`
z-index: 200;
transition: background-color .3s, z-index .1s;
background-color: rgba(255,255,255,.95);
`}
`


const Navbar = styled.div`
.invertNav{
    filter: invert(1);
}
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
margin: auto;
justify-content: center;
width: 100%;
z-index: 1000;
/* background-color: rgba(255, 255, 255, 0.92);  */
/* inset */
/* box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;  */
/* min github */
/*  */
`
const NavContent = styled.div`
/* max-width: 960px; */
z-index: 1000;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 100px;
height: 100px;
width: 100%;
a{
    font-size: 1em;
    font-weight: 100;
    margin: 0 10px;
    transition: .3s;
    text-decoration: none;
}
@media (max-width: 1024px){
    /* margin-top: 10px; */

}
@media (max-width: 660px){
padding: 0 10px;
}
`
const Links = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: row;
`
const NavLink = styled.a`
font-family: visby,sans-serif;
letter-spacing: 1.4px;
color: white;
border-bottom: rgba(255,255,255,0) 2px solid;
:hover{
        border-bottom: white 2px solid;
        cursor: pointer;
    }
`

const InsideDrawerLink = styled(Link)`
display: flex;
font-family: 'Open Sans';
color: black;
text-align: center;
text-decoration: none;
background: none;
border: none;
padding: 10px 20px;
font-size: 1.5em;
align-items: center;
justify-content: space-between;
width: 100%;
max-width: 700px;
@media(max-width: 850px){
    width: 80%;
    padding: 5px 20px;
    :first-of-type {
        margin-top: 120px !important;
    }
    /* margin: 0 40px; */
}
:first-of-type {
    margin-top: 50px;
}
:hover{
        cursor: pointer;
    }
    .arrow {
  height: 3px;
  width: 3px;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  /* margin-left: 400px; */
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  /* transition: .3s; */
}
`

const Button = styled(Link)`
/* width: 190px; */
text-align: center;
background-color: black;
border: solid 1px black;
border-radius: 2px;
padding: 10px 30px;
/* margin: 40px 20px; */
font-family: 'Open Sans';
font-size: 16px;
weight: 200;    
text-decoration: none;
color: white;
:hover {
    cursor: pointer;
    }
@media(max-width: 420px){
    padding: 8px 15px;
}        
`
const ButtonOutline = styled (Button)` 
    background-color: rgba(0,0,0,0);
    color: black;
    transition: .3s;
            :hover {
                cursor: pointer;
                background-color: rgba(0,0,0,1) ;
                color: white
            }
`


const Logo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
color: white;
/* margin:  0 auto 0 100px; */
font-family: 'visby',sans-serif;
h1 {
    font-weight: 500;
    font-size: 50px;
    
    margin:  0 0 -18px 0;
    letter-spacing: 2px;
}
p {
    margin: 0;
    color: #707070;
    margin-left: 20px;
}
`
const NavLower = styled.div`
display: flex;
width: 100%;
max-width: 860px;
margin-top: 80px;
@media(max-width: 850px){
flex-direction: column;
margin-top: 0;
}
`
const VehicleBox = styled.div`
display: flex;
flex-direction: column;
width: 50%;
min-width: 300px;
.imageBox {
    margin: 10px auto;
    max-height: 180px;
    width: 94%;
}
.buttonBox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
@media(max-width: 850px){
margin: auto;
}
`



export default function Nav({pageLocation, invertNav}){
    const [menuOpen, setMenuOpen] = useState(false);
    const [navInverted, setNavInverted] = useState(false);
    useEffect(() => {
        if (invertNav && !navInverted){setNavInverted(true)}
    });




    let NavigationLinks = <Links> 
        {/* <NavLink href="/build-my-tundra" >
            Build My Tundra
        </NavLink> */}
    </Links>
    if (pageLocation === "/"){
        NavigationLinks = (
            <Links> 
                <NavLink onClick={() => scrollTo("#contactSection","center")}>
                    Build My Tundra
                </NavLink>
            </Links>
        )
    } 
    let DrawerLinks = (
        <div css={sidebarStyles({ menuOpen })}  onClick={() => {setMenuOpen(false)}}>
            <InsideDrawerLink to="/">
                Home <span className="arrow"/>
            </InsideDrawerLink>
            <InsideDrawerLink to="/about">
                About Us <span className="arrow"/>
            </InsideDrawerLink>
            
            <InsideDrawerLink to="/careers">
                Careers <span className="arrow"/>
            </InsideDrawerLink>
            <InsideDrawerLink to="/support">
                Support <span className="arrow"/>
            </InsideDrawerLink>
            <NavLower>
                <VehicleBox>
                    <StaticImage className="imageBox" src={`../images/Nav/TRDSequoia.png`}/>
                    <div className="buttonBox">
                        <Button to="/experience-sequoia">Experience Sequoia</Button>
                        <ButtonOutline to="/build-my-sequoia">Build My Sequoia</ButtonOutline>
                    </div>
                </VehicleBox>
                <VehicleBox>
                    <StaticImage className="imageBox" src={`../images/Nav/TRDTundra.png`}/>
                    <div className="buttonBox">
                        <Button to="/experience-tundra">Experience Tundra</Button>
                        <ButtonOutline to="/build-my-tundra">Build My Tundra</ButtonOutline>
                    </div>
                </VehicleBox>
            </NavLower>
        </div> 
    )
    return (
    <div>    
        <Navbar>
            <NavContent className={navInverted ? "invertNav" : ""}>
                <Link to="/" aria-label="thoughtfulHQ logo" alt="thoughtfulHQ logo">
                <Logo>
                    <StaticImage height={50} src={`../images/glacierLogo.png`} alt="Glacier International Logo"/>
                </Logo>
                </Link>
                <Links> 
                    {NavigationLinks}
                    <button css={styles({ menuOpen })} onClick={() => {setMenuOpen(!menuOpen); setNavInverted(!navInverted)}} aria-label="Navigation menu toggle">
                        <span className="hamburger-box">
                            <span className={menuOpen? "hamburger-inner hamburger-inner-active" : "hamburger-inner"}></span>
                        </span>
                    </button>
                </Links>
            </NavContent>
        </Navbar>
    {DrawerLinks}
    <div css={backdropStyle({ menuOpen })}/>
    </div>
    )
}