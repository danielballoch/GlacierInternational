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

const ExperienceSequioaPage = () => {
    return(
        <Layout title="Experience Sequoia | Glacier International" invertNav={true}>
            <Container>
            <h1>Page under maintenence, please come back soon...</h1>
            </Container>
        </Layout>
    )
}

export default ExperienceSequioaPage;