import React, {useState} from "react"
import { Link } from 'gatsby'
import Video from "../components/video"
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const GridHeroContainer = styled.div`
display: grid;
grid-template-columns: auto repeat(3, 30vw [col-start]) auto;
max-height: 757;
.img1, .img2, .img3 {
    height: 70vh;
    width: 100%;
    position: relative;
    placeItems: center;
    display: grid; 
    @media(max-width: 940px){
        height: 50vh !important;
        grid-row-start: 0 !important;
        grid-row-end: 1 !important;
    }
}
.img1 {
    margin-top: calc(100px + 7vw);
    grid-area: 5/2;
}
.img2 {
    grid-area: 5/3;
    margin-top: calc(100px + 2vw);
}
.img3 {
    grid-area: 5/4;
    margin-top: calc(100px + 6vw);
}
@media(max-width: 940px){
    grid-template-rows: auto auto;
}
`

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
        grid-row-start: 5;
        grid-row-end: 7;
        grid-column-start: 2;
        grid-column-end: 5;
        /* display: flex; */
    }
`
const HeroContent = styled.div`
@media(max-width: 940px){
    width: auto;
    /* margin: 180px 0; */
    margin: -20px 0 180px 0;
    padding: 20px;
    
    h1 {
    padding: 10px;
    }
    p {
        padding: 10px;
    }
    button {
        padding: 30px 60px !important;
        margin-bottom: 40px !important;
        width: 100% !important;
    }
}
background-color: rgba(255,255,255, 0.9);
color: black;
width: 500px;
margin-left: -15vw;
margin-top: 100px;
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
        height: 300px !important;
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
        width: 25%;
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
    width: 25%;
    transition: .5s;
    :hover {
        /* filter: brightness(140%); */
        cursor: pointer;
    }
    
}
`



const CareersPage = () => {
    return(
        <Layout title="Careers | Glacier International" invertNav={true}>
            <GridHeroContainer>
            <StaticImage
                src={`../images/careers/workshop.jpg`}
                alt="Tundra front on"
                className="img1"
            />
            <StaticImage
                src={`../images/about/AboutCraft.jpg`}
                alt="Tundra front on"
                className="img2"
            />
            <StaticImage
                src={`../images/careers/handshake2.jpg`}
                alt="Tundra front on"
                objectPosition="80% 100%"
                className="img3"
            />
            <Hero>
                <HeroContent>
                <h1>Working at Glacier International</h1>
                <p>Located at the Innovation and Technology Park at Highlands Cromwell. We are now accepting applications for Automotive professionals to join our team. </p>
                <a href="#positions"><button >EXPLORE ROLES</button></a>
                </HeroContent>
            </Hero>
        </GridHeroContainer>

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
                        <p>"Glacier International is a growing business based in the Innovation and Technology Park at the Highlands Cromwell and we’re on the hunt for automotive professionals to join our team”</p>
                    </div>
                </div>

                <div>
                    <span>02<div className="verticalLine"/><div className="horizontalLine"/><div className="verticalLine"/></span>
                    <div>
                    <h2>02 Community</h2>
                    <p>We're a growing tight-knit team focused on quality, and we believe the path to quality is getting the right people for the job, and doing all we can to make sure everyones interested, happy, and excited about their work.</p>
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
                At Glacier International we prioritise the customer and the team. We desire people focused, motivated team members to enhance the customer experience. 
                </p>
                <p>
                Email us your resume and why you want to work with us.  
                </p>
            </Container>

            <ContainerSplit2 id="positions">
            <Link  className="exHover" >
                <div className="textBox">
                    <h1>Automotive Engineers</h1>
                    <p>Do you have passion and experience working with Toyota vehicles? The skill to step up to the next level producing RHD Sequoia’s and Tundra’s? Work closely with our supportive independent certifier on our step by step process.</p>
                </div>
                <StaticImage
                    className="experienceImgs"
                    objectPosition={"50% 50%"}
                    src={`../images/careers/careers1.jpg`}
                    alt="Glacier engineer working on tundra"
                    
                />
            </Link>
            <Link  className="exHover" >
                <div className="textBox">
                    <h1>Auto-electrical Engineers</h1>
                    <p>If you enjoy forward thinking, joining our wiring team will bring you job satisfaction. The re manufacturing process requires the best of the best with attention to detail and workmanship. </p>
                </div>
                <StaticImage
                    className="experienceImgs"
                    objectPosition={"50% 50%"}
                    src={`../images/careers/careers1.jpg`}
                    alt="Glacier engineer working on tundra"
                    
                />
            </Link>
            <Link  className="exHover">
            <div className="textBox">
                <h1>Logistics officers</h1>
                <p>The reward of arranging logistics of Sequoia’s and Tundra’s requires self motivation and professionalism as you deliver for the customers their pride and joy from the heart of Texas. </p>
            </div>
            <StaticImage 
                className="experienceImgs"
                objectPosition={"50% 50%"}
                src={`../images/careers/careers2.jpg`}
                alt="Glacier office/yard"
                
            />
            </Link>
            <Link  className="exHover">
            <div className="textBox">
                <h1>Product Advisors</h1>
                <p>Passion for product creates success. The main role is enjoying the interactions with customers on their journey to select a hybrid Sequoia or Tundra that best suits their needs and style. </p>
            </div>
            <StaticImage 
                className="experienceImgs"
                objectPosition={"50% 0%"}
                src={`../images/careers/careers3.jpg`}
                alt="Malcom next to sold Tundra"
                
            />
            </Link>
        </ContainerSplit2>

        </Layout>
    )
}

export default CareersPage;