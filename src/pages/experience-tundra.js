import React, {useState} from "react"
import Video from "../components/video"
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Container = styled.div`
/* margin-top: 100px; */
@media(max-width: 940px){
    p {
        width: auto !important;
        text-align: center;
        padding: 0 20px;
        margin: 0 0 20px 0;
    }
    iframe {
        width: 96% !important;
        height: 60vw !important;
    }
    .tundraimage {
        width: auto !important;
    }
    h1 {
        text-align: center;
        margin: 0;
    }
    button {
        width: 100%;
        margin: 20px auto !important;
    }
}
.tundraimage {
    width: 760px;
    height: 350px;
}
h1 {
    margin-top: 100px;
    color: white;
}
p {
    color: white;
}
height: 100%;
width: 100%;
color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: seguo-ui, visby, sans-serif;
iframe {
    width: 60%;
    height: 60%;
}

span {
    position: absolute;
    width: 1px;
    height: calc(2vw);
    background-color: white; 
    margin-right: 209px;
    bottom: 0;
    }

button {
 border: 1px solid white;
 color: white;
 padding: 12px 30px;
 font-size: .9em;
 background-color: rgba(0,0,0,0);
 margin: 20px 20px;
 transition: .3s;
 :hover {
    background-color: rgba(255,255,255,1);
    color: black;
    cursor: pointer;
 }
 :1st-of-type{
    background-color: white;
    color: black;
 }
}
`

const Container2 = styled.div`
@media(max-width: 940px){
    width: auto;
    p, h2 {
        padding: 0 40px !important;
        /* text-align: center !important; */
    }
    background-color: rgba(0,0,0,0) !important;
}
background-color: rgba(0,0,0,0.8);
color: white;
/* width: 30%; */
width: 438px;
padding: 40px;
margin-left: calc(58% - 256px);
h2 {
    font-size: 36px;
    color: white;
}
p {
    text-align: justify;
    color: white;
}
`
const ExperienceContainer = styled.div`
display: grid; 
max-height: 100vh;
.sideimg {
    position: relative;
    place-items: center;
    display: grid;
    width: 100%;
    height: 100vh;
    overflow: visible;
    grid-area: 1/1;
    @media(max-width: 940px){
        /* Do whatever I need to do for image to fit properly like design */
    }
}

`

const Container3 = styled.div`
@media(max-width: 940px){
    width: auto !important;
    margin: 0;
    padding: 20px 30px;
    p, h2 {
        width: auto !important;
    }
    p {
        margin: 44px 0px 0 0 !important;
    }
}
background-color: rgba(0,0,0,0.8);
color: white;
padding: 40px;
display: flex;
margin: 10vh 10vw;
h2 {
    /* margin: 0; */
    text-align: right;
    width: 250px;
    font-size: 36px;
    color: white;
    line-height: 45px;
}
p {
    margin: 0;
    text-align: left;
    width: 150px;
    letter-spacing: 1px;
    padding: 7px 7px;
    color: white;
}
`

const Social = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-self: left;
align-self: flex-end;
margin-left: 10px;
div {
    margin: 10px;
    filter: grayscale(100%);
    transition: .3s;
    :hover {
        filter: grayscale(50%);
        cursor: pointer;
    }
}
span {
    width: 1px;
    height: 300px;
    background-color: white; 
    margin: auto;
}
`

const ExperienceTundraPage = () => {
    return(
        <Layout>
        {/* hero/video */}
             <div style={{ display: "grid", maxHeight: "100vh"}} id="homeSection">
             <StaticImage
                        src={`../images/experienceTundra/platinum.jpg`}
                        alt="Glacier International Logo"
                         style={{
                             gridArea: "1/1",
                             position: "relative",
                             placeItems: "center",
                             display: "grid",
                             width: "100%",
                             height: "100vh",
                             overflow: "visible"
                            }}
                    />  
                <div
                    style={{
                        gridArea: "1/1",
                        position: "relative",
                        placeItems: "center",
                        display: "grid",
                        }}
                    >
                        <Container>
                        <h1>EXPERIENCE TUNDRA</h1>
                        <p>"The all-new 2022 Tundra is the toughest, most capable, and advanced full-size truck we’ve ever seen."</p>
                        <iframe src="https://www.youtube.com/embed/videoseries?list=PLuYwryiueK-4mtYgDOpM9ZEWnhqUsrHgB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                        </Container>
                </div>
            </div>
            {/* Luxury */}
            <div style={{ display: "grid", maxHeight: "100vh"}} id="homeSection">
             <StaticImage
                        src={`../images/experienceTundra/collage1.png`}
                        alt="Glacier International Logo"
                        objectPosition={"60% 50%"}
                         style={{
                             gridArea: "1/1",
                             position: "relative",
                             placeItems: "center",
                             display: "grid",
                             width: "100%",
                             height: "100vh",
                             overflow: "visible"
                            }}
                    />  
                <div
                    style={{
                        gridArea: "1/1",
                        position: "relative",
                        placeItems: "center",
                        display: "grid",
                        }}
                    >
                        <Container2>
                            <h2>LUXURY MEETS POWER</h2>
                            <p>The 2022 Tundra gives you the freedom to adventure from wharf to mountains without worry. Weather you need a boat towed cross country, a horse float to the local trail, or have the trailer loaded up for a work haul, the Tundra can handle it. </p>
                            <p>With a towing capacity of up to 12,000 lb, the 2022 Tundra has the muscle to deliver big payloads with ease and confidence.</p>
                            <p>Put simply less worry, more fun, and all the braging rights.</p>
                        </Container2>
                </div>
            </div>
            {/* Sideview */}
            <ExperienceContainer >
             <StaticImage
                        src={`../images/experienceTundra/side.jpg`}
                        alt="Glacier International Logo"
                        objectPosition={"50% 100%"}
                        className={"sideimg"}
                    />  
                <div
                    style={{
                        gridArea: "1/1",
                        position: "relative",
                        placeItems: "end",
                        justifyContent: "start",
                        display: "grid",
                        }}
                    >
                        <Container3>
                        <h2>TOUGH ON THE OUTSIDE PREMIUM ON THE INSIDE</h2>
                        <p>Tundra’s exceptional interior stands apart with its premium materials and quality feel that both driver and passengers will enjoy</p>
                        </Container3>
                </div>
            </ExperienceContainer>
            {/* Last/link */}
            <div style={{ display: "grid", maxHeight: "100%"}}>
             <StaticImage
                        src={`../images/experienceTundra/collage2.png`}
                        alt="Glacier International Logo"
                         style={{
                             gridArea: "1/1",
                             position: "relative",
                             placeItems: "center",
                             display: "grid",
                             width: "100%",
                             height: "100%",
                             overflow: "visible"
                            }}
                    />  
                <div
                    style={{
                        gridArea: "1/1",
                        position: "relative",
                        placeItems: "center",
                        display: "grid",
                        }}
                    >
                        <Container>
                        <h1>2022 TOYOTA TUNDRA</h1>
                        <p>Available now for pre-order in New Zealand -  exclusively from Glacier International.</p>
                        <StaticImage
                        src={`../images/experienceTundra/last.jpg`}
                        alt="Glacier International Logo"
                        objectPosition={"50% 70%"}
                        className="tundraimage"
                        
                        />
                        <div><Link to="/build-my-tundra"><button>Build Your Tundra</button></Link> <button>Tundra Brochure</button></div> 
                        {/* <span/> */}
                        
                        </Container>
                        <Social>
                            <StaticImage
                                className="experienceImgs"
                                objectFit={"contain"}
                                style={{width:"34px"}}
                                src={`../images/social/instagram-icon.png`}
                                alt="Tundra front on"
                            />
                            <StaticImage
                                objectFit={"contain"}
                                className="experienceImgs"
                                style={{width:"34px"}}
                                src={`../images/social/youtube-icon.png`}
                                alt="Tundra front on"
                            />
                            <StaticImage
                                objectFit={"contain"}
                                className="experienceImgs"
                                style={{width:"34px"}}
                                src={`../images/social/facebook-icon.png`}
                                alt="Tundra front on"
                            />
                            <span/>
                        </Social>
                </div>
            </div>
        </Layout>
    )
}

export default ExperienceTundraPage;