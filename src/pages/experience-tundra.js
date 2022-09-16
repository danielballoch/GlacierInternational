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
    margin-bottom: 400px;
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
        padding: 20px 30px !important;
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
a {
    button {
        background-color: rgba(0,0,0,0);
        color: white;
    }
}
button {
 border: 1px solid white;
 background-color: white;
 color: black;
 padding: 12px 30px;
 font-size: .9em;
 margin: 20px 20px;
 transition: .3s;
 :hover {
    background-color: rgba(255,255,255,1);
    color: black;
    cursor: pointer;
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
    p:last-of-type {
        margin-bottom: 20px;
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
@media(max-width: 940px){
    max-height: 100%;
    grid-template-rows: auto auto;
}
.sideimg {
    position: relative;
    place-items: center;
    display: grid;
    width: 100%;
    height: 100vh;
    overflow: visible;
    grid-area: 1/1;
    @media(max-width: 940px){
        height: 100%;
        /* Do whatever I need to do for image to fit properly like design */
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 2;
    }
}
.premText {
    position: relative;
    place-items: end;
    justify-content: start;
    display: grid;
    grid-area: 1/1;
    @media(max-width: 940px){
        height: 100%;
        background-color: black;
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 2;
    }
}

`

const Container3 = styled.div`
@media(max-width: 940px){
    width: auto !important;
    margin: 0;
    padding: 20px 30px;
    justify-content: center;
    align-items: center;
    p, h2 {
        width: auto !important;
    }
    p {
        height: 100%;
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

const EndGrid = styled.div`
display: grid;
max-height: 100%;
.tundraCollage {
    position: relative;
    place-items: center;
    display: grid;
    width: 100%;
    height: 100%;
    overflow: visible;
    grid-area: 1/1;
    @media(max-width: 940px){
        object-fit: scale-down;
    }
}
`

const Social = styled.div`
@media(max-width: 940px){
    span {
        display: none;
    }
    .experienceImgs {
        width: 60px !important;
    }
    margin-bottom: 10px;
}
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
.experienceImgs {
    width: 34px;
}
`

const isBrowser = typeof window !== "undefined";

const ExperienceTundraPage = () => {
    let bottomBackground;
    if (isBrowser && window.innerWidth > 1050){
        bottomBackground =  <StaticImage
                                src="../images/experienceTundra/collage2Re.png"
                                alt="Tundra collage"
                                className="tundraCollage"
                                objectPosition={"50% 50%"}
                            />  
    } else {
        bottomBackground = <StaticImage
                                src="../images/experienceTundra/collage2Mobile.png"
                                alt="Tundra collage"
                                className="tundraCollage"
                                objectPosition={"50% 50%"}
                            />  
    }
    return(
        <Layout title="Experience Tundra | Glacier International">
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
                        <p>"The all-new 2023 Tundra is the toughest, most capable, and advanced full-size truck we’ve ever seen."</p>
                        <iframe src="https://www.youtube.com/embed/videoseries?list=PLuYwryiueK-4mtYgDOpM9ZEWnhqUsrHgB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullscreen></iframe>
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
                            <p>The 2023 Tundra gives you the freedom to adventure from wharf to mountains without worry. Whether you need a boat towed cross country, a horse float to the local trail, or have the trailer loaded up for a work haul, the Tundra can handle it. </p>
                            <p>With a towing capacity of up to 5 tonne, the 2023 Tundra has the muscle to deliver big payloads with ease and confidence.</p>
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
                <div className="premText">
                        <Container3>
                        <h2>TOUGH ON THE OUTSIDE PREMIUM ON THE INSIDE</h2>
                        <p>Tundra’s exceptional interior stands apart with its premium materials and quality feel that both driver and passengers will enjoy</p>
                        </Container3>
                </div>
            </ExperienceContainer>
            {/* Last/link */}
            <EndGrid >

            
                {bottomBackground}
                <div
                    style={{
                        gridArea: "1/1",
                        position: "relative",
                        placeItems: "center",
                        display: "grid",
                        }}
                    >
                        <Container>
                        <h1>2023 TOYOTA TUNDRA</h1>
                        <p>Available now for pre-order in New Zealand -  exclusively from Glacier International.</p>
                        <StaticImage
                        src={`../images/experienceTundra/last.jpg`}
                        alt="Glacier International Logo"
                        objectPosition={"50% 70%"}
                        className="tundraimage"
                        />
                        <div><a href="https://www.toyota.com/tundra/ebrochure/" target="_blank"><button>Tundra Brochure</button></a><Link to="/build-my-tundra"><button>Build Your Tundra</button></Link></div> 
                        {/* <span/> */}
                        
                        </Container>
                        <Social>
                            <a href="https://www.instagram.com/glacier_international/" target="_blank">
                            <StaticImage
                                className="experienceImgs"
                                objectFit={"contain"}
                                src={`../images/social/instagramSmall.png`}
                                alt="Instagram logo"
                            />
                            </a>
                            <a href="https://www.youtube.com/channel/UC2CR408AOJqt5JNUFVt-nSQ/playlists" target="_blank">
                            <StaticImage
                                objectFit={"contain"}
                                className="experienceImgs"
                                src={`../images/social/youtubeSmall.png`}
                                alt="Youtube logo"
                            />
                            </a>
                            <a href="https://www.facebook.com/GlacierInt" target="_blank">
                            <StaticImage
                                objectFit={"contain"}
                                className="experienceImgs"
                                src={`../images/social/facebookSmall.png`}
                                alt="Facebook logo"
                            />
                            </a>
                            <span/>
                        </Social>
                </div>
            </EndGrid>
        </Layout>
    )
}

export default ExperienceTundraPage;