import React from "react"
import styled from '@emotion/styled';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from 'gatsby'


const Links = styled.div`
@media(max-width: 940px){
    flex-direction: column-reverse;
    justify-content: center;
    div {
        padding: 20px 0;
        a {margin: 0}
    }
    div:last-of-type {
        a {
            font-size: 1.2em;
            margin: 0;
        }
    }
    div:first-of-type {
        justify-content: space-between;
        a {
            font-size: .9em;
            padding: 0;
        }
    }
}
font-size: .9em;
min-height: 70px;
padding: 0 18px;
font-family: seguo-ui, visby, sans-serif;
color: black;
background-color: white;
display: flex;
flex-direction: row;
text-align: center;
justify-content: center;
box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
letter-spacing: 1.4px;
div {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
a {
    display: flex;
    align-items: center;
    background: none;
    color: black;
    text-decoration: none;
    border: none;
    padding: 0 18px;
    margin: 0 20px;
    /* min-height: 70px; */
    font-size: 1em;
    
}
`



const footer = ({hideFooter}) => {
    if (!hideFooter){
    return(
        <div>
                <Links>
                    <div>
                        <Link to="/">Glacier International © 2022</Link>
                        <Link to="">Privacy & Legal</Link>
                    </div>
                    <div>
                        <Link to="/about">About Us</Link>
                        <Link to="/careers">Careers</Link>
                        <Link to="/support">Support</Link> 
                    </div>    
                </Links>
        </div>
    )
    } else return(<div/>)
}
export default footer