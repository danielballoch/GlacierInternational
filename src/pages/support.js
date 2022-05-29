import React, {useState} from "react"
import Video from "../components/video"
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const Container = styled.div`
margin-top: 100px;
height: calc(100vh - 170px);
color: black;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: seguo-ui, visby, sans-serif;
`

const Social = styled.div`
display: flex;
flex-direction: row;
`

const SupportTundraPage = () => {
    return(
        <Layout invertNav={true}>
            <Container>
                <h1>Page under maintenence, please come back soon...</h1>
                <Social>
                <p>Follow us on social media for updates, showcases, and more information </p>
                <StaticImage
                    className="experienceImgs"
                    objectFit={"contain"}
                    style={{width:"40px"}}
                    src={`../images/social/instagram-icon.png`}
                    alt="Tundra front on"
                />
                <StaticImage
                    objectFit={"contain"}
                    className="experienceImgs"
                    style={{width:"40px"}}
                    src={`../images/social/youtube-icon.png`}
                    alt="Tundra front on"
                />
                <StaticImage
                    objectFit={"contain"}
                    className="experienceImgs"
                    style={{width:"40px"}}
                    src={`../images/social/facebook-icon.png`}
                    alt="Tundra front on"
                />
                </Social>
            </Container>
        </Layout>
    )
}

export default SupportTundraPage;