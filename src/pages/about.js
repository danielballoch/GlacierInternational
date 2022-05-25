import React, {useState} from "react"
import Video from "../components/video"
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const Container = styled.div`
margin-top: 100px;
color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
p {
    width: 840px;
    text-align: center;
}
`
const ContainerSplit = styled(Container)`
flex-direction: row;
` 


//video styling
const Youtube2 = styled.div`
img {
    object-position: top;
}
button {

    width: 150px;
    height: 150px;
    font-size: 2rem;
    font-weight: 100;
    border-radius: 50%;
    border: 1px solid #fff;
    color: #fff;
    background-color: rgba(0,0,0,0);
    transition: .3s;
    :hover {
        cursor: pointer ;
        background-color: rgba(355, 355, 355, 0.4)
    }
}
`

const popupStyles = ({videoOpen}) => css`
display: none;
position:fixed;
.dim {
    position: fixed;
    z-index: -100;
    top: 0;
    left: 0;
    ${'' /* transition: .3s; */}
    transition-delay: .3s;
    transition: background-color .3s, z-index .4s;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255,255,255,0);
}

${videoOpen === true &&`
display: block;

.dim {
    z-index: 50;
    transition: background-color .3s, z-index .1s;
    background-color: rgba(0,0,0,.3);
}
.overlay {
    z-index: 100;
    position: fixed;
    max-width: 900px;
    width: 100%;
    height: 100%; 
    top:15%;
    left: 50%;
    transform: translate(-50%, 0);
}

button {
    background-color: rgba(0,0,0,0);
    border: none;
    color: white;
    :hover {
        cursor: pointer;
    }
    top: -4%;
    right: -2%;
}
.hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
    background-color: rgba(0,0,0,0);
    opacity: 0.5;
    transition: .3s;
    :hover {
        opacity: 1;
    }
}
.hamburger-inner-active {
        transition: .3s;
        display: block;
        width: 20px;
        height: 3px;
        background-color: white;
        border-radius: 4px;
        position: absolute;
        top: 50%;
        transform: rotate(45deg);
        transition: top 0.075s ease,
        transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      } 
    .hamburger-inner-active::after {
        width: 20px;
        height: 3px;
        background-color: white;
        border-radius: 4px;
        position: absolute;
        content: "";
        right: 0%;
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.075s ease,
        transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
`}
`
//video styles end

const AboutPage = () => {
    const [videoOpen, setVideoOpen] = useState(false);
    return(
        <Layout>
            <Container>
                <h1>About Us</h1>
            </Container>
            <Container>
                <h2>Our Story</h2>
                <p>
                Paragraph introducting brand, the who, what, where, why. Trying to excite the reader and establish the story of Glacier International. 
                </p>
                <p>
                Integer convallis dolor vitae est gravida, vitae elementum elit porttitor. Maecenas at posuere enim, at euismod urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vitae congue ante. Nam pharetra urna id enim elementum, at vehicula turpis rutrum. Donec aliquet fermentum ex, eu vehicula nisi fermentum eget. Etiam maximus luctus justo, a mattis nibh dignissim eu. 
                </p>
                <p>
                Vivamus feugiat eros ante, in eleifend nisi elementum vel. Mauris eleifend, justo eu dictum aliquet, magna lorem dignissim odio, at imperdiet leo magna sagittis enim. Vestibulum dignissim varius massa, sit amet fermentum nunc sollicitudin sit amet. Praesent nisi urna, vestibulum vel ante eget, rhoncus imperdiet lorem.
                </p>
            </Container>
            <Youtube2 style={{ display: "grid", maxHeight: 640}} id="homeSection">
            <StaticImage
                src={`../images/SoldImage.JPG`}
                alt="Sold Tundra Image"
                style={{
                        maxHeight: "640px",
                        gridArea: "1/1",
                        position: "relative",
                        placeItems: "center",
                        display: "grid",
                        filter: "brightness(40%)"
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
                <button onClick={() => {setVideoOpen(!videoOpen)}}>PLAY</button>
            </div>
        </Youtube2>


        
        <div css={popupStyles({ videoOpen })} >
            <div class="dim"/>
            <div class="overlay">
                {/* <button onClick={() => {setVideoOpen(!videoOpen)}}>close</button> */}
                <button css={popupStyles({ videoOpen })} onClick={() => setVideoOpen(!videoOpen)} aria-label="Navigation menu toggle">
                        <span className="hamburger-box">
                            <span className="hamburger-inner-active"></span>
                        </span>
                </button>
                <iframe width="100%" height="600px" src={(videoOpen ? "https://www.youtube.com/embed/videoseries?list=PLuYwryiueK-4mtYgDOpM9ZEWnhqUsrHgB&autoplay=1" : "https://www.youtube.com/embed/videoseries?list=PLuYwryiueK-4mtYgDOpM9ZEWnhqUsrHgB")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
            </div>
        </div>  

        <ContainerSplit>
            <p>IMG</p>
            <Container>
            <h2>Our Craftsmanship</h2>
                <p>Paragraph explaining conversion and customisation, introducting vechicles more leading readers to want to learn more. Integer convallis dolor vitae est gravida, vitae elementum elit porttitor. Maecenas at posuere enim, at euismod urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vitae congue ante. Nam pharetra urna id enim elementum, at vehicula turpis rutrum.</p>
                <p>Donec aliquet fermentum ex, eu vehicula nisi fermentum eget. Etiam maximus luctus justo, a mattis nibh dignissim eu. Vivamus feugiat eros ante, in eleifend nisi elementum vel. Mauris eleifend, justo eu dictum aliquet, magna lorem dignissim odio, at imperdiet leo magna sagittis enim. Vestibulum dignissim varius massa, sit amet fermentum nunc sollicitudin sit amet. Praesent nisi urna, vestibulum vel ante eget, rhoncus imperdiet lorem.</p>
            </Container>
        </ContainerSplit>

        <ContainerSplit>
            <p>Image 1</p>
            <p>Image 2</p>
        </ContainerSplit>
        </Layout>
    )
}

export default AboutPage;