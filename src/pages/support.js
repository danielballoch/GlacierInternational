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
`

const SupportTundraPage = () => {
    return(
        <Layout>
            <Container>
                <h1>hello support page</h1>
                <h1>hello support page</h1>
                <h1>hello support page</h1>
            </Container>
        </Layout>
    )
}

export default SupportTundraPage;