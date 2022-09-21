import React, { useEffect } from "react"
import {Helmet} from 'react-helmet'
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
        <Layout title="Privacy & Legal | Glacier International" invertNav={true}>
            <Helmet>
                <title>Privacy Policy | Glacier International</title>
                <meta name='description' content='Read the terms and conditions of Glacier International about custom build Toyota Hybrid SUVs and Trucks services in NZ.' />
            </Helmet>
            <Center>
                <h1>Terms & Conditions</h1>
                <p>
                Glacier International is an independent vehicle importer & trader, and is not affiliated in any way with Toyota Motor Corporation.  All logos, images, products and company names and trademarks including SEQUOIA, TOYOTA, TUNDRA and TRD are and remain the property of their respective owners. 
                </p>
                <p>
                All goods and services offered by Glacier International are not provided by or with the authorisation of Toyota Motor Corporation and Glacier International is not affiliated or endorsed by Toyota Motor Corporation in any way. 
                </p>
                <p>
                "TOYOTA", "SEQUOIA", and "TUNDRA" are registered trademarks of Toyota Motor Corporation. SEQUOIA and TUNDRA are used in the title of this website solely to identify the subject of interest to the website. Toyota Motor Corporation, Toyota Motor Sales, U.S.A., Inc. and their affiliated companies are not responsible in any way for the contents of the site, which are solely the responsibility of the publisher. The contents of the website do not reflect the policy or opinions of Toyota Motor Corporation, Toyota Motor Sales, U.S.A., Inc. or any of Toyota's affiliated companies. This website is not affiliated with, endorsed, sponsored, or supported by Toyota Motor Corporation, Toyota Motor Sales, U.S.A., Inc. or any of Toyota's affiliated companies.
                </p>
                <br/>
                <h1>Privacy</h1>
                <p>My Company Glacier International Ltd ("us", "we", or "our") operates http://www.glacier.nz (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.</p>
                <p>We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.</p>
                <p>Information Collection And Use</p>
                <p>While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").</p>
                <br/>
                <p>Log Data:</p>
                <p>Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").</p>
                <p>This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
                <p>In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this.</p>
                <p>The Log Data section is for businesses that use analytics or tracking services in websites or apps, like Google Analytics. </p>
                <br/>
                <p>Communications:</p>
                <p>We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that ...</p>
                <p>The Communications section is for businesses that may contact users via email (email newsletters) or other methods. </p>
                <br/>
                <p>Cookies:</p>
                <p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.</p>
                <p>Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>
                <br/>
                <p>Security:</p>
                <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
                <br/>
                <p>Changes To This Privacy Policy:</p>
                <p>This Privacy Policy is effective as of 05/10/2021 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>
                <p>We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
                <p>If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.</p>
                <br/>
                <p>Contact Us:</p>
                <p>If you have any questions about this Privacy Policy, please contact us.</p>
                
            </Center>
        </Layout>
    )
} 