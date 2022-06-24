import React, {useState} from "react"
import { Link } from 'gatsby'
import Video from "../components/video"
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const Container = styled.div`
min-height: calc(100vh - 440px);
height: auto;
color: black;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 100px;
h1 {
    font-weight: 100;
}
p {
    width: 840px;
    text-align: center;
    @media(max-width: 940px){
        width: 90%;
    }
}
`
const Hero = styled.div`
    display: grid;
    grid-area: 5/3;
    position: relative;
    color: white;
    place-items: center;
    @media(max-width: 940px){
        /* "auto repeat(3, 30vw [col-start]) auto" */
        /* grid-row-start: 1;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 6; */
}
    }
`
const HeroContent = styled.div`
@media(max-width: 940px){
    width: 100%;
    margin: 180px 0;
}
background-color: rgba(255,255,255, 0.9);
color: black;
width: 500px;
margin-left: -15vw;
margin-top: 40px;
padding: 50px 100px;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
h1 {
    font-weight: 100;
}
p:last-of-type {
    margin-bottom: 40px;
}
button {
    background-color: black;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px 60px;
    :hover {
        cursor: pointer;
    }
}
`

const Values = styled.div`
@media(max-width: 940px){
    display: none;
}
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 15vw;
margin:  15vw 100px 0 100px;
h2 {
    font-weight: 100;
}
`

const Values2 = styled.div`
    @media(max-width: 940px){
        span {
            display: none !important;
        }
        h2 {
            display: block !important;
        }
        div {
            div {
                border: none !important;
            }
        }
    }
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 5vw;
h2 {
    display: none;
}
span {
    align-self: center;
    padding: 22px 0;
    /* display: flex; */
    /* align-items: flex-end; */
}
.verticalLine {
    height: 120px;
    /* max-height: 200px; */
    border-left: solid rgba(0,0,0,0.5) 1px;
    margin: 0;
    margin-left: 8px;

}
.horizontalLine {
    width: 150px;
    border-top: solid rgba(0,0,0,0.5) 1px;
    margin: 0;
    margin-left: 8px;
}
.horizontalLine:last-of-type {
    display: none;
}
.last {
    visibility: hidden;
}
div {
    display: flex;
    align-items: center;
    div {
    flex-direction: column;
    margin: 40px 0;
    padding: 0 20px;
    max-width: 500px;
    border-left: solid rgba(0,0,0, 0.5) 1px;
    }
}

`


const ContainerSplit2 = styled.div`
@media(max-width: 940px){
    flex-direction: column;
    height: auto;
    .exHover {
        width: 100% !important;
    }
    .textBox {
        width: 100% !important;
    }
    .experienceImgs {
        max-height: 300px !important;
    }
}
height: 350px;
width: 100%;
flex-direction: row;
color: black;
display: flex;
justify-content: center;
align-items: center;
.experienceImgs {
    max-height: 70vh;
    height: 100%;
    width: 100%;
    filter: brightness(40%); 
}
.textBox {
        position: absolute;
        z-index: 100;
        text-align: left;
        width: 33%;
        text-decoration: underline solid 1px rgba(255,255,255,0);
        p,h1 {
            margin: 10px 20px;
            text-align: center;
        }
        h1 {
            font-weight: 100;
            color: white;
        }
        p {
            color: white;
        }
    }
.exHover {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 33.33%;
    transition: .5s;
    :hover {
        /* filter: brightness(140%); */
        cursor: pointer;
    }
    
}
`


const CareersPage = () => {
    return(
        <Layout invertNav={true}>
            <div style={{ display: "grid", gridTemplateColumns: "auto repeat(3, 30vw [col-start]) auto", maxHeight: 757}}>
            <StaticImage
                src={`../images/careers/workshop.jpg`}
                alt="Tundra front on"
                style={{
                        height: "70vh",
                        gridArea: "5/2",
                        width: "100%",
                        position: "relative",
                        placeItems: "center",
                        display: "grid",
                        marginTop: "calc(100px + 7vw)"
                    }}
            />
            <StaticImage
                src={`../images/about/AboutCraft.jpg`}
                alt="Tundra front on"
                style={{
                        height: "70vh",
                        gridArea: "5/3",
                        width: "100%",
                        position: "relative",
                        placeItems: "center",
                        display: "grid",
                        marginTop: "calc(100px + 2vw)"

                    }}
            />
            <StaticImage
                src={`../images/careers/handshake2.jpg`}
                alt="Tundra front on"
                objectPosition="80% 100%"
                style={{
                        height: "70vh",
                        gridArea: "5/4",
                        width: "100%",
                        position: "relative",
                        placeItems: "center",
                        display: "grid",
                        marginTop: "calc(100px + 6vw)"
                    }}
            />
            <Hero>
                <HeroContent>
                <h1>Working at Glacier International</h1>
                <p>Glacier International is a growing business based in Queenstown and we're on the hunt for automotive professionals to join our team.</p>
                <p>We're working with state of the art machinary and are passionate about helping our customers, likewise were looking for people who are great at their craft, eager to learn, and have the same enthusiasim to get these high class machines out to all the thrill seekers and smart buyers across New Zealand.</p>
                <button>EXPLORE ROLES</button>
                </HeroContent>
            </Hero>
        </div>
            <Values>
                <h2>01 Freedom & Responsibility</h2>
                <h2>02 Community</h2>
                <h2>03 "Where do I sign!?"</h2>
            </Values>
            <Values2>
                <div>
                    <span>01<div className="verticalLine"/><div className="horizontalLine"/><div className="verticalLine"/></span>
                    <div>
                        <h2>01 Freedom & Responsibility</h2>
                        <p>Glacier International is a growing business based in Queenstown and we're on the hunt for automotive professionals to join our team.</p>
                        <p>We're working with state of the art machinary and are passionate about helping our customers, likewise were looking for people who are great at their craft, eager to learn, and have the same enthusiasim to get these high class machines out to all the thrill seekers and smart buyers across New Zealand.</p>
                    </div>
                </div>

                <div>
                    <span>02<div className="verticalLine"/><div className="horizontalLine"/><div className="verticalLine"/></span>
                    <div>
                    <h2>02 Community</h2>
                    <p>We're a growing tight-knit team focused on quality, and we believe the path to quality is getting the right people for the job, and doing all we can to make sure everyones interested, happy, and excited about what their work.</p>
                    </div>
                </div>

                <div>
                    <span>03<div className="verticalLine"/><div className="horizontalLine"/><div className="verticalLine last"/></span>
                    <div>
                        <h2>03 "Where do I sign!?"</h2>
                        <p>"Where do I sign" is our expression for passion, enthusiasim, attention to detail, and prioritisation.</p>
                        <p>Whether your in the workshop, on the phone, or in the courtyard, the goal should always be to push toward a great customer experience - our aim is always to make our customers line up, with smiles stretching across their face, and say things like "where do I sign!?"</p>
                    </div>
                </div>
            </Values2>
            <Container>
                <h1>How To Apply</h1>
                <p>
                Paragraph explaining conversion and customisation, introducting vechicles more leading readers to want to learn more. Integer convallis dolor vitae est gravida, vitae elementum elit porttitor. Maecenas at posuere enim, at euismod urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vitae congue ante. Nam pharetra urna id enim elementum, at vehicula turpis rutrum. 
                </p>
                <p>
                Donec aliquet fermentum ex, eu vehicula nisi fermentum eget. Etiam maximus luctus justo, a mattis nibh dignissim eu. Vivamus feugiat eros ante, in eleifend nisi elementum vel. Mauris eleifend, justo eu dictum aliquet, magna lorem dignissim odio, at imperdiet leo magna sagittis enim. Vestibulum dignissim varius massa, sit amet fermentum nunc sollicitudin sit amet. Praesent nisi urna, vestibulum vel ante eget, rhoncus imperdiet lorem. 
                </p>
                <p>
                Send us your resume and why you want to work for us at careers@glacier.nz
                </p>
            </Container>

            <ContainerSplit2>
            <Link to={"/experience-tundra"} className="exHover" >
                <div className="textBox">
                    <h1>Auto-electrical Engineers</h1>
                    <p>Short paragraph explaining position,learn more here.</p>
                </div>
                <StaticImage
                    className="experienceImgs"
                    objectPosition={"50% 50%"}
                    src={`../images/careers/careers1.jpg`}
                    alt="Tundra front on"
                    
                />
            </Link>
            <Link to={"/experience-sequoia"} className="exHover">
            <div className="textBox">
                <h1>Logistics officers</h1>
                <p>Short paragraph explaining position, learn more here.</p>
            </div>
            <StaticImage 
                className="experienceImgs"
                objectPosition={"50% 50%"}
                src={`../images/careers/careers2.jpg`}
                alt="Sequoia front on"
                
            />
            </Link>
            <Link to={"/experience-sequoia"} className="exHover">
            <div className="textBox">
                <h1>Product Advisors</h1>
                <p>Short paragraph explaining position, learn more here.</p>
            </div>
            
            <StaticImage 
                className="experienceImgs"
                objectPosition={"50% 0%"}
                src={`../images/about/Soldimage.JPG`}
                alt="Sequoia front on"
                
            />
            </Link>
        </ContainerSplit2>

        </Layout>
    )
}

export default CareersPage;