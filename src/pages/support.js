import React, {useState} from "react"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"



const Faq = styled.div`
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
h1,p, a {
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
        padding: 10px;
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
    a {
        width: 100%;
        display: flex;
    }
    .socialImgs {
        width: 100% !important;
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
    /* margin: 0 10px; */
    :hover {
        cursor: pointer;
    }
}
.socialImgs {
    width: 50px;
    margin: 0 10px;
    :hover {
        cursor: pointer;
    }
}

`

const Content = ({question, answer}) => {
    const [toggle, setToggle] = useState(true);
    return (
        <ContentBox itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" onClick={() => {setToggle(!toggle)}}>
            <div>
                <b itemprop="name"><p>{question}<span className={toggle ? "arrow" : "arrow down"}/></p></b>
                <p itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" className={toggle ? "toggle" : ""}>A: {answer}</p>
            </div>
        </ContentBox>
    )
} 

const SupportTundraPage = () => {
    const Questions = [
    {question: "Why is there such a price difference from USA to NZ?", answer: "Due to Covid 19 pandemic causing global chip shortage there is a large supply and demand challenge with ripple effects for the next 4 years. The result of this is that on most occasions if we don’t act within 12 hours a Sequoia or Tundra is sold to one of our 374 million Family members in North America so if we say 'act fast' its not due to fear of missing out, you just will miss out that day, so that’s why we encourage 12 hour commitment. Due to the supply challenges there are more expenses involved over and about the USD to NZD exchange rate, international shipping and compliance in NZ. Our price is your out the door price all inclusive NZD."},
    {question: "Are the RHD Sequoia and Tundra under warranty and insured?", answer: "Yes. Glacier International matches Canadian OEM powertrain warranty. All RHD Sequoia and Tundras we sell are sold with a 3 year 60,000KM comprehensive warranty. Also 3 year 100,000km powertrain warranty including the Hybrid battery. We have comprehensive insurance during the international logistics process."},
    {question: "Does Glacier International service vehicles also?", answer: "Yes. We keep up with our clients and offer the best services available at our Innovation and Technology Park Highlands base. We also have a list of trusted MTA assured service providers nationwide. For any more information please email support!"},
    {question: " Are there finance options available for the Tundra & Sequoia?", answer: "No, generally a finance company will require registration plates, the plate are not issued until the Right Hand Drive Re-manufacturing is complete. You will need to find an alternative for finance. We are a service provider and Re-manufacture, not a finance company."}
]

    return(
        <Layout title="Support | Glacier International" >
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
                
                <Faq itemscope itemtype="https://schema.org/FAQPage">
                <h1>Frequently Asked Questions</h1>    
                {Questions.map((question, i) => (
                    <Content question={question.question} answer={question.answer} i={i}/>
                ))}
                </Faq>

                <ContactForm>
                    <h1>Contact Support Team</h1> 
                    <p>If you have any additional questions or suggestions please contact a member of our support team through the form below and we will be in touch to help shortly. <a href="https://www.youtube.com/watch?v=ZcqURqtJGjc&list=PLuYwryiueK-4mtYgDOpM9ZEWnhqUsrHgB">Click here</a> for some breathtaking Tundra action in the meantime!</p>
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
                            className="g-recaptcha"
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
                        src="../images/social/instagramSmall.png"
                        alt="Instagram Logo"
                    />
                    </a>
                    <a href="https://www.youtube.com/channel/UC2CR408AOJqt5JNUFVt-nSQ">
                    <StaticImage
                        objectFit={"contain"}
                        className="socialImgs"
                        src="../images/social/youtubeSmall.png"
                        alt="Youtube Logo"
                    />
                    </a>
                    <a href="https://www.facebook.com/GlacierInt">
                    <StaticImage
                        objectFit={"contain"}
                        className="socialImgs"
                        src="../images/social/facebookSmall.png"
                        alt="Facebook Logo"
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