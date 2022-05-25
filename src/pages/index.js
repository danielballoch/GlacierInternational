import React, {useState} from "react"
import Video from "../components/video"
import GlacierVideo from "../images/TundraReelMed.mp4"
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Link } from 'gatsby'

// import Terms from "../components/termsPopup"





const pageStyles = {
    padding: 0,
    margin: 0,
  }

const Main = styled.div`
padding: 0;
margin: 0;
color: white;
h1 {
    color: white;
    font-family: sans-serif;
    font-size: 50px;
}
body {
    margin: 0;
    padding: 0;
}

video {
    gridArea: 1/1;
    position: relative;
    placeItems: center;
    display: grid;
    object-fit: cover;
    object-position: 32%; 
    /* filter: saturate(100%); */
    height: 100vh;
    @media(maxWidth){
        /* object-fit: cover;
        object-position: 32%; 
        height: 100vw;
        */
    }
}
`

const CenterContent = styled.div`
    max-width: 98vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-content: center; */
    /* background-color: rgba(0,0,0,0.5); */
div {
    
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
p {
    max-width: 1100px;
    margin: 40px auto;
    text-align: center;
    font-family: visby,sans-serif;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1.4px;
    font-size: 13px;
    opacity: 1;
}
a {
    margin: auto;
}
button {
    margin: auto;
    border: 1px solid white;
    color: white;
    background: rgba(0,0,0,0);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    line-height: 1.5;
    font-family: sans-serif;
    font-size: 14px;
    padding: 12px 60px;
    transition: .3s;
    :hover {
        cursor: pointer;
        background: rgba(255,255,255,1);
        color: black;
    }
}
`



const Spacer = styled.div`
height: 100px;
background-color: white;
`

const DisplaySection = styled.div`
background-color: white;
height: 955px;
width: 100%;
display: flex ;
flex-direction: row;
font-family: seguo-ui, visby, sans-serif;
div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        z-index: 100;
        font-size: 60px;
        margin: 20px 0 0 0;
        font-weight: 100;
    }
    h2 {
        position: absolute;
        font-size: 410px;
        color: rgba(0,0,0,0.07);
        font-weight: 700;
        z-index: 0;
        @media (max-width: 1800px){
            font-size: 280px;   
        }
    }
    p {
        z-index: 100;
        font-size: 14px;
        max-width: 800px;
        text-align: center;
        margin: 30px 5px 5px 0;
        letter-spacing: 1.4px;
    }
    div {
        z-index: 100;
        flex-direction: row;
        button {
            background-color: rgba(0,0,0,0);
            color: black;
            border: solid 1px black;
            border-radius: 2px;
            padding: 10px 30px;
            margin: 40px 20px;
            font-size: 16px;
            weight: 200;
            transition: .3s;
            :hover {
                cursor: pointer;
                background-color: rgba(0,0,0,1) ;
                color: white
            }
        }
        button:first-of-type {
            background-color: black;
            color: white;
        }
    }
}
`
const Button = styled(Link)`
            background-color: black;
            color: white;
            border: solid 1px black;
            border-radius: 2px;
            padding: 10px 30px;
            margin: 40px 20px;
            font-size: 16px;
            weight: 200;    
            text-decoration: none;
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


const IndexPage = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  console.log(videoOpen)
  return (
      <Layout>
        <Main style={pageStyles}>
        <title>Home Page</title>
        <div style={{ display: "grid", maxHeight: "100vh"}} id="homeSection">
            <Video
                className="videoClass"
                videoSrcURL={GlacierVideo}
                videoTitle="Glacier Hero Video"
            />
            <div
                style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "center",
                    display: "grid",
                    }}
                >
                <CenterContent>
                
                    <div>
                    <StaticImage
                        src={`../images/Logo.png`}
                        alt="Glacier International Logo"
                         style={{
                             gridArea: "1/1",
                             position: "relative",
                             placeItems: "center",
                             display: "grid",
                             opacity: "1",
                             mixBlendMode: "overlay",
                             maxWidth: "1600px",
                             width: "90vw",
                             maxHeight: "600px",
                             height: "11.5vw",
                             overflow: "visible"
                            }}
                    />  
                    <p>Glacier International is a one-stop shop for importing, right hand drive re-manufacturing, and customising your Toyota Tundra. With cutting edge technology, the 2022 Toyota Tundra is a half-ton, meticulously engineered heavy metal machine, and our goal is to deliver it to Kiwis who value reliability, performance and class over anything else.</p>
                    {/* <a href="mailto:sales@glacier.nz"><button >Scroll Down</button></a> */}
                    </div>
                </CenterContent>
            </div>
        </div>
       
        </Main>
        {/* <Spacer/> */}
        {/* Tundra section */}
        <DisplaySection>
            <div>
                <h2>2022</h2>
                <h1>2022 Toyota Tundra</h1>
                <p>"The only Hybrid truck in New Zealand. Imported, right-hand drive remanufactured, and modified to your needs, exclusively by Glacier International."</p>
                <div><Button to="/experience-tundra">Experience Tundra</Button><ButtonOutline to="/build-my-tundra">Build Your Tundra</ButtonOutline></div>
            </div>
        <div> 
            <StaticImage
                src={`../images/homepageimages/tundra.jpg`}
                alt="Glacier International Logo"
                style={{
                    height: "100%"
                    }}
                />  
        </div>
        </DisplaySection>
        {/* Sequioa section */}
        <DisplaySection>
            <div>
                <h2>2023</h2>
                <h1>2023 Toyota Sequioa</h1>
                <p>"The ultimate luxury SUV in New Zealand. Imported, right-hand drive remanufactured, and modified to your needs, exclusively by Glacier International."</p>
                <div><Button to="/experience-sequioa">Experience Sequioa</Button><ButtonOutline to="/build-my-sequioa">Build Your Sequioa</ButtonOutline></div>
            </div>
        <div> 
            <StaticImage
                src={`../images/homepageimages/sequioa.jpg`}
                alt="Glacier International Logo"
                style={{
                    height: "100%"
                    }}
                />  
        </div>
        </DisplaySection>
           
    </Layout>
  )
}

export default IndexPage
