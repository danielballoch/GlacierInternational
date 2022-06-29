import React, {useState} from "react"
import { Link } from "gatsby"
import Video from "../components/video"
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"



const FAQ = styled.div`
@media(max-width: 940px){
    width: 80%;
    margin: 100px auto 0 auto;
}
margin-top: 100px;
/* height: calc(100vh - 170px); */
height: auto;
color: black;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: seguo-ui, visby, sans-serif;
h1 {
    margin-top: 100px;
    color: white;
}
div {
    :hover {
        cursor: pointer ;
    }
}
.toggle {
    display: none;
}
`
const ContentBox = styled.div`
@media(max-width: 940px){
    width: 100%;
}
width: 800px;
display: flex;
flex-direction: row;
margin: 10px;
padding: 20px;
background-color: white;
border-radius: 10px;
color: black;
.toggle {
    display: none;
}
img {
    border-radius: 2px;
}
div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}
p {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.arrow {
  height: 3px;
  width: 3px;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  /* transition: .3s; */
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
@media(max-width: 1000px){
    flex-direction: column;
    div {
        width: auto;
    }
}
`

const ContactForm = styled.div`
@media(max-width: 940px){
    width: 80%;
    margin: 100px auto 0 auto;
}
width: 860px;
margin: 100px 0;
text-align: center;
h1,p {
    color: white;
}

form {
    display: flex;
    flex-direction: column;
    text-align: left;
    div {
        display: flex;
        justify-content: space-between;
        label {
            width: 45%;
        }
        @media(max-width: 940px){
        flex-direction: column;
        label {
            width: 100%;
        }
        }
    }
    input, textarea {
        width: 100%;
        padding: 10px 0;
    }
    button {
        border: none;
        color: black;
        background-color: white;
        padding: 16px 0;
        margin: 10px 0;
    }
}

`

const Social = styled.div`
@media(max-width: 940px){
    width: 90%;
    margin: 100px auto 10px auto;
    flex-direction: column-reverse;
    p {
        text-align: center;
        margin-top: 10px !important;
    }
    div {
        justify-content: space-around;
        div {
            width: 100%;
        }
    }
    .socialImgs {
        width: 20% !important;
    }
}
display: flex;
flex-direction: row;
justify-content: center;
margin: 10px;
p {
    color: white;
    margin: 0;
    align-self: center;
}
div {
    display: flex;
    margin: 0 10px;
    :hover {
        cursor: pointer;
    }
}
.socialImgs {
    width: 70px;
    :hover {
        cursor: pointer;
    }
}

`

const Content = ({question, answer}) => {
    const [toggle, setToggle] = useState(true);
    return (
        <ContentBox onClick={() => {setToggle(!toggle)}}>
            <div>
                <b><p>{question}<span className={toggle ? "arrow" : "arrow down"}/></p></b>
                <p className={toggle ? "toggle" : ""}>A: {answer}</p>
            </div>
        </ContentBox>
    )
} 

const SupportTundraPage = () => {
    const Questions = [
    {question: "Are the Tundra and Sequoia mechanically insured?", answer: "All Tundras and Sequoias sold are MTA Assured for 1 year, and you can find a list on reccomended MTA service centers for any future check ups or modifications here."},
    {question: "Does Glacier International service vehicles also?", answer: "Yes. We keep up with our clients and offer the best services availible at our Queenstown base; We also have a list of trusted mechanics availivle here. For any more information please email support@glacier.co.nz"},
    {question: " Are there finance options available for the Tundra & Sequoia?", answer: "Yes, currently we offer..."}
]

    return(
        <Layout>
        
            <div style={{ display: "grid"}} id="homeSection">
            <StaticImage
                    className="experienceImgs"
                    objectFit={"cover"}
                    style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "center",
                    display: "grid",
                    height: "auto",
                    filter: "brightness(30%)"
                    }}
                    src={`../images/support/supportBG.jpg`}
                    alt="Tundra front on"
                />
            <div
                style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "center",
                    display: "grid",
                    }}
                >
                <div>
                
                <FAQ>
                <h1>Frequently Asked Questions</h1>    
                {Questions.map((question, i) => (
                    <Content question={question.question} answer={question.answer} i={i}/>
                ))}
                </FAQ>

                <ContactForm>
                    <h1>Contact Support Team</h1> 
                    <p>If you have any additional questions or suggestions please contact a member of our support team through the form below and we will be in touch to help soon.</p>
                    <form 
                    // onSubmit={handleSubmit(onSubmit)}
                    id="main-form"
                    // action="/api/sendgrid" method="POST"
                    >
                        <div>
                            <label htmlFor="name">
                                    <p>Name:</p>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        required  
                                    />
                            </label>
                            
                            <label htmlFor="phone">
                                <p>Phone:</p>
                                <input 
                                    type="phone" 
                                    name="phone" 
                                    required
                                />
                            </label>
                        </div>                        
                        <label htmlFor="email">
                            <p>Email:</p>
                            <input 
                                type="email" 
                                name="email" 
                                required
                            />
                        </label>
                        <label htmlFor="message">
                            <p>Enquiry:</p>
                            <textarea 
                                name="message" 
                                id="message" 
                                rows="5" 
                                required
                            />
                        </label>
                        <button 
                            type="submit" 
                            class="g-recaptcha"
                            data-sitekey="site_key"
                            data-callback='onSubmit'
                            data-action='submit'
                        >Submit</button>
                    </form>
                </ContactForm>


                <Social>
                <p>Follow us on social media for updates, showcases, and more information </p>
                <div>
                    <a href="https://www.instagram.com/glacier_international/">
                    <StaticImage
                        className="socialImgs"
                        objectFit={"contain"}
                        src={`../images/social/instagram-icon.png`}
                        alt="Tundra front on"
                    />
                    </a>
                    <a href="https://www.youtube.com/channel/UC2CR408AOJqt5JNUFVt-nSQ">
                    <StaticImage
                        objectFit={"contain"}
                        className="socialImgs"
                        src={`../images/social/youtube-icon.png`}
                        alt="Tundra front on"
                    />
                    </a>
                    <a href="https://www.facebook.com/GlacierInt">
                    <StaticImage
                        objectFit={"contain"}
                        className="socialImgs"
                        src={`../images/social/facebook-icon.png`}
                        alt="Tundra front on"
                    />
                    </a>
                </div>
                </Social>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default SupportTundraPage;