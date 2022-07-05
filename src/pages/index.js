import React, {useState} from "react"
import Video from "../components/video"
import GlacierVideo from "../images/TundraReelBrightSmall.mp4"
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

const LogoOver = styled.div`
mix-blend-mode: darken;
opacity: .7;
width: 100%;
height: 100vh;
z-index: 2;
position: relative;
background-color: #000;
text-align: center;
border: 0;
margin: 0;
.cls-1 {
    fill: #FFFFFF;
    text-anchor: middle;
    font-size: 150px;
    font-family: Cardo;
}
.cls-2 {
    fill: #FFFFFF;
    text-anchor: middle;
    font-size: 36px;
    font-family: "Open Sans";
    letter-spacing: 12px;
}
/* svg {
    height: 100%;
    margin: auto;
    max-width: 80%;
    overflow: hidden;
    vertical-align: middle;
    text-align: center;
} */
    ::after, ::before {
    box-sizing: border-box;
    }
}
`

const CenterContent = styled.div`
    /* max-width: 98vw; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-content: center; */
    /* background-color: rgba(0,0,0,0.5); */
.herotext {
    display: flex;
    position: absolute;
    z-index: 2;
    opacity: .8;
    top: 67vh;
    width: 100%;
    
    justify-content: center;
    margin: 0 auto;
    p {
        max-width: 900px;
        width: 98%;
    }
}
div {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
p {
    max-width: 1100px;
    margin: 40px auto;
    text-align: center;
    /* font-family: visby,sans-serif; */
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1.4px;
    font-size: 13px;
    opacity: 1;
    color: white;
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
font-family: open-sans, visby, sans-serif;
@media(max-width: 940px){
    flex-direction: column-reverse;
    height: 100%;
    margin-bottom: 100px;
    h1,h2 {
        text-align: center;
    }
    h2 {
        font-size: 164px !important;
        overflow: clip;
        margin-top: 90px;
    }
    div {
        h1 {
        font-size: 40px !important;
        }
    }
}
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
        font-family: open-sans, visby, sans-serif;
        position: absolute;
        font-size: 410px;
        color: rgba(0,0,0,0.07);
        font-weight: 700;
        overflow: clip;
        z-index: 0;
        @media (max-width: 1800px){
            font-size: 280px;   
        }
    }
    p {
        z-index: 100;
        font-size: 14px;
        max-width: 700px;
        text-align: center;
        margin: 20px 5px 5px 0;
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
@media(max-width: 940px){
    text-align: center;
}
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
                    {/* <StaticImage
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
                    />   */}
                    <LogoOver>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="98vw" height="100vh" viewBox="89 0 700 194">
                        <text id="GLACIER" class="cls-1" transform="translate(436.953 118.261) scale(.8)"><tspan x="0">GLACIER</tspan></text>
                        <text id="_-_INTERNATIONAL_-" data-name="- INTERNATIONAL -" class="cls-2" transform="translate(438.978 159.767) scale(.8)"><tspan x="0">- INTERNATIONAL -</tspan></text>
                    </svg>

                    </LogoOver>
                    <div className="herotext">
                        <p>Glacier International is a one-stop shop for importing, right hand drive re-manufacturing, and customising your Toyota Tundra. With cutting edge technology, the 2022 Toyota Tundra is a half-ton, meticulously engineered heavy metal machine, and our goal is to deliver it to Kiwis who value reliability, performance and class over anything else.</p>
                    </div>
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
