import React, { useEffect } from "react"
import Layout from "../components/layout"
import styled from '@emotion/styled';

const Center = styled.div`
margin: 200px auto;
max-width: 800px;
min-height: calc(100vh - 400px);
height: 100%;
width: 100%;
h1, p {
    padding: 0 20px;
}
`

export default function TermsPrivacy(){
    return (
        <Layout invertNav={true}>
            <title>Privacy & Legal</title>
            <Center>
                <h1>Terms & Conditions</h1>
                <p>
                Glacier International is an independent vehicle importer & trader, and is not affiliated in any way with Toyota Motor Corporation.  All logos, images, products and company names and trademarks including TOYOTA, TUNDRA and TRD are and remain the property of their respective owners. 
                </p>
                <p>
                All goods and services offered by Glacier International are not provided by or with the authorisation of Toyota Motor Corporation and Glacier International is not affiliated or endorsed by Toyota Motor Corporation in any way. 
                </p>
                <p>
                "TOYOTA" and "TUNDRA" are registered trademarks of Toyota Motor Corporation. TUNDRA is used in the title of this website solely to identify the subject of interest to the website. Toyota Motor Corporation, Toyota Motor Sales, U.S.A., Inc. and their affiliated companies are not responsible in any way for the contents of the site, which are solely the responsibility of the publisher. The contents of the website do not reflect the policy or opinions of Toyota Motor Corporation, Toyota Motor Sales, U.S.A., Inc. or any of Toyota's affiliated companies. This website is not affiliated with, endorsed, sponsored, or supported by Toyota Motor Corporation, Toyota Motor Sales, U.S.A., Inc. or any of Toyota's affiliated companies.
                </p>
                
            </Center>
        </Layout>
    )
} 