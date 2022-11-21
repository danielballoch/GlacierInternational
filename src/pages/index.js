import React, { useEffect, useState } from "react"
import {Helmet} from 'react-helmet'
import Video from "../components/video"
import GlacierVideo from "../images/TundraReelBrightSmall.mp4"
import GlacierVideoMobile from "../images/TundraReelMobileSmall.mp4"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Link} from 'gatsby'
import ScrollAnimation from "../components/scrollAnimation";


const pageStyles = {
    padding: 0,
    margin: 0,
  }

const Main = styled.div`
padding: 0;
margin: 0;
color: white;
.showSent {
    position: fixed;
    left: 0;
    right: 0;
    margin: calc(50vh - 150px) auto;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    align-items: center;
   
    color: black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    max-width: 500px;
    max-height: 300px;
    height: 100%;
    width: 90%;
    border-radius: 5px;
    background-color: rgba(255,255,255,0.95);
    z-index: 200;
    transition: .3s;
    p {
        transition: 1s;
        font-size: 20px;
        text-align: center;
        padding: 0 20px;
        /* padding: 80px; */
    }
}
.showSentEnd {
    opacity:0 ;
    height: 0px;
}
.dontShow {
   display: none;
}
h1 {
    color: white;
    font-family: sans-serif;
    font-size: 50px;
}
body {
    margin: 0;
    padding: 0;
}

video {
    gridArea: 1/1;
    position: relative;
    placeItems: center;
    display: grid;
    object-fit: cover;
    object-position: 32%; 
    /* filter: saturate(100%); */
    height: 100vh;
    @media(maxWidth){
        /* object-fit: cover;
        object-position: 32%; 
        height: 100vw;
        */
    }
}
`

const LogoOver = styled.div`
mix-blend-mode: darken;
opacity: .7;
width: 100%;
height: 100vh;
z-index: 2;
position: relative;
background-color: #000;
text-align: center;
border: 0;
margin: 0;
padding-bottom: 100px;
box-sizing: border-box;
.cls-1 {
    fill: #FFFFFF;
    text-anchor: middle;
    font-size: 150px;
    font-family: Cardo;
}
.cls-2 {
    fill: #FFFFFF;
    text-anchor: middle;
    font-size: 36px;
    font-family: "Open Sans";
    letter-spacing: 12px;
    margin-right: -12px;
}
/* svg {
    height: 100%;
    margin: auto;
    max-width: 80%;
    overflow: hidden;
    vertical-align: middle;
    text-align: center;
} */
    ::after, ::before {
    box-sizing: border-box;
    }
}
`

const CenterContent = styled.div`
    /* max-width: 98vw; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-content: center; */
    /* background-color: rgba(0,0,0,0.5); */
.herotext {
    display: flex;
    position: absolute;
    z-index: 2;
    opacity: .8;
    top: 60vh;
    width: 100%;
    
    justify-content: center;
    margin: 0 auto;
    p {
        max-width: 900px;
        width: 98%;
    }
}
div {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
p {
    max-width: 1100px;
    margin: 40px auto;
    text-align: center;
    /* font-family: visby,sans-serif; */
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1.4px;
    font-size: 13px;
    opacity: 1;
    color: white;
}
a {
    margin: auto;
}
button {
    margin: auto;
    border: 1px solid white;
    color: white;
    background: rgba(0,0,0,0);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    line-height: 1.5;
    font-family: sans-serif;
    font-size: 14px;
    padding: 12px 60px;
    transition: .3s;
    :hover {
        cursor: pointer;
        background: rgba(255,255,255,1);
        color: black;
    }
}
`


const DisplaySection = styled.div`
box-sizing: border-box;
background-color: white;
height: 955px;
width: 100%;
display: flex ;
flex-direction: row;
font-family: open-sans, visby, sans-serif;
@media(max-width: 940px){
    flex-direction: column-reverse;
    height: 100%;
    margin-bottom: 100px;
    h1,h2 {
        text-align: center;
    }
    h2 {
        font-size: 164px !important;
        overflow: clip;
        margin-top: 90px;
    }
    div {
        h1 {
        font-size: 40px !important;
        }
    }
}
div {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        z-index: 100;
        font-size: 60px;
        margin: 20px 0 0 0;
        font-weight: 100;
    }
    h2 {
        font-family: open-sans, visby, sans-serif;
        position: absolute;
        font-size: 410px;
        color: rgba(0,0,0,0.07);
        font-weight: 700;
        overflow: clip;
        z-index: 0;
        @media (max-width: 1800px){
            font-size: 280px;   
        }
    }
    p {
        z-index: 100;
        font-size: 14px;
        max-width: 700px;
        text-align: center;
        margin: 20px 5px 5px 0;
        letter-spacing: 1.4px;
    }
    div {
        z-index: 100;
        flex-direction: row;
        button {
            background-color: rgba(0,0,0,0);
            color: black;
            border: solid 1px black;
            border-radius: 2px;
            padding: 10px 30px;
            margin: 40px 20px;
            font-size: 16px;
            weight: 200;
            transition: .3s;
            :hover {
                cursor: pointer;
                background-color: rgba(0,0,0,1) ;
                color: white
            }
        }
        button:first-of-type {
            background-color: black;
            color: white;
        }
    }
}
`
const Button = styled(Link)`
@media(max-width: 940px){
    text-align: center;
}
            background-color: black;
            color: white;
            border: solid 1px black;
            border-radius: 2px;
            padding: 10px 30px;
            margin: 40px 20px;
            font-size: 16px;
            weight: 200;    
            text-decoration: none;
            
`
const ButtonOutline = styled (Button)` 
    background-color: rgba(0,0,0,0);
    color: black;
    transition: .3s;
            :hover {
                cursor: pointer;
                background-color: rgba(0,0,0,1) ;
                color: white
            }
`

const isBrowser = typeof window !== "undefined";

const IndexPage = ({location}) => {
  const [showSent, setShowSent] = useState({message: ""});
  let HeroVideo;
  if (isBrowser && window.innerWidth <= 450){
    HeroVideo = <Video className="videoClass" videoSrcURL={GlacierVideoMobile} videoTitle="Glacier Hero Video"/>
  } else if (isBrowser && window.innerWidth > 450) {
    HeroVideo = HeroVideo = <Video className="videoClass" videoSrcURL={GlacierVideo} videoTitle="Glacier Hero Video"/>
  }
  useEffect(() => {
    
    if (location.state && location.state.formSent && showSent.message === ""){
        setShowSent({message: "show"});
        
        setTimeout(() => {
            setShowSent({message: "shown"})
        }, 6000)
        setTimeout(() => {
            setShowSent({message: "dontShow"});
            window.history.replaceState({}, document.title);
            // navigate("", {state:{}})
        }, 6300);
    }
}, [showSent.message])

  return (
    
      <Layout title="Home | Glacier International">
        <Helmet>
            <title>2023 Toyota Sequoia & Tundra | Right Hand Drive Hybrid SUV</title>
            <meta name='description' content='Glacier International is a one-stop shop importing Toyota Hybrid SUVs and remanufacturing right-hand drive Toyota Sequoia and Tundra models in New Zealand.' />
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@graph": {
                          "0": {
                            "@type": [
                              "Organization",
                              "Place"
                            ],
                            "@id": "https://www.glacier.nz/#organization",
                            "name": "Glacier International",
                            "url": "https://www.glacier.nz/",
                            "description": "Glacier International is a one-stop shop importing Toyota Hybrid SUVs and remanufacturing right-hand drive Toyota Sequoia and Tundra models in New Zealand.",
                            "telephone": "027 288 6372",
                            "email": "sales@glacier.nz",
                            "sameAs": [
                              "https://www.facebook.com/GlacierInt",
                              "https://www.instagram.com/glacier_international/"
                            ],
                            "logo": {
                              "@id": "https://www.glacier.nz/static/c6b4c8bd2fc905a29ac1fbb6fd240f23/ccd45/glacierLogo.webp"
                            },
                            "image": {
                              "@id": "https://www.glacier.nz/static/c6b4c8bd2fc905a29ac1fbb6fd240f23/ccd45/glacierLogo.webp"
                            },
                            "openingHoursSpecification": [
                              {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                  "Monday",
                                  "Tuesday",
                                  "Wednesday",
                                  "Thursday",
                                  "Friday",
                                  "Saturday",
                                  "Sunday"
                                ],
                                "opens": "09:00",
                                "closes": "17:00"
                              }
                            ],
                            "hasMap": "https://www.google.com/maps?cid=2381938304227621672",
                            "currenciesAccepted": "NZD",
                            "paymentAccepted": "Visa, Debit Card, Paypal,",
                            "additionalProperty": "https://en.wikipedia.org/wiki/Car_dealership",
                            "priceRange": "$$$",
                            "disambiguatingDescription": "Glacier International is a one-stop shop importing Toyota Hybrid SUVs and remanufacturing right-hand drive Toyota Sequoia and Tundra models in New Zealand.",
                            "foundingDate": "13-July-2021",
                            "address": {
                              "@type": "PostalAddress",
                              "postalCode": "9384",
                              "addressRegion": "Cromwell",
                              "addressCountry": "New Zealand"
                            },
                            "contactPoint": {
                              "@type": "ContactPoint",
                              "contactType": "Customer Service",
                              "email": "sales@glacier.nz",
                              "areaServed": "['NZ']"
                            },
                            "geo": {
                              "@type": "GeoCoordinates",
                              "name": "2023 Toyota Sequoia & Tundra | Right Hand Drive Hybrid SUV",
                              "postalCode": "9384",
                              "latitude": "-45.0541547",
                              "longitude": "169.1740818",
                              "description": "Glacier International is a one-stop shop importing Toyota Hybrid SUVs and remanufacturing right-hand drive Toyota Sequoia and Tundra models in New Zealand."
                            },
                            "founder": [
                              {
                                "@type": "Person",
                                "description": "Owner of Glacier International",
                                "jobTitle": "CEO",
                                "givenName": "Malcom",
                                "familyName": "King",
                                "name": "Malcom King",
                                "alternateName": "Malcom King",
                                "gender": "Male",
                                "image": "none",
                                "url": "https://www.glacier.nz/",
                                "worksFor": "https://www.glacier.nz/",
                                "potentialAction": {
                                  "@id": "https://www.glacier.nz/support"
                                }
                              }
                            ],
                            "additionalType": [
                              "https://en.wikipedia.org/wiki/Car_dealership",
                              "http://www.productontology.org/doc/Car_dealership",
                              "https://en.wikipedia.org/wiki/Import",
                              "http://www.productontology.org/doc/Import",
                              "https://en.wikipedia.org/wiki/Toyota_Tundra",
                              "https://en.wikipedia.org/wiki/Toyota_Sequoia\r\n        "
                            ],
                            "mainEntityOfPage": "https://www.google.com/maps/place/Glacier+International/@-45.0553219,169.1749938,17.26z/data=!4m5!3m4!1s0xa82ad59b108f0d35:0x210e584484623b28!8m2!3d-45.0554971!4d169.1754634",
                            "knowsAbout": [
                              "https://en.wikipedia.org/wiki/Toyota_Tundra",
                              "https://en.wikipedia.org/wiki/Toyota_Sequoia",
                              "http://www.productontology.org/doc/Toyota",
                              "https://en.wikipedia.org/wiki/Car_dealership",
                              "http://www.productontology.org/doc/Car_dealership",
                              "https://en.wikipedia.org/wiki/Import",
                              "https://en.wikipedia.org/wiki/Remanufacturing\r\n        "
                            ],
                            "hasOfferCatalog": {
                              "@type": "OfferCatalog",
                              "name": "Build My Toyota Tundra & Sequoia",
                              "@id": "https://www.glacier.nz/",
                              "additionalType": "https://en.wikipedia.org/wiki/Toyota_Sequoia",
                              "itemListElement": [
                                {
                                  "@type": "Offer",
                                  "itemOffered": [
                                    {
                                      "@type": "Service",
                                      "name": "Experience Toyota Tundra & Sequoia",
                                      "@id": "https://www.glacier.nz/build-my-sequoia",
                                      "url": "https://www.glacier.nz/build-my-sequoia",
                                      "description": "The 2023 Toyota Sequoia is the ideal hybrid SUV for luxury design, strength, and efficiency. Available for pre-order in NZ. Experience Toyota Sequoia Today!"
                                    }
                                  ]
                                }
                              ]
                            }
                          },
                          "1": {
                            "@type": "Website",
                            "@id": "https://www.glacier.nz/#website",
                            "name": "Glacier International",
                            "url": "https://www.glacier.nz/",
                            "description": "Glacier International is a one-stop shop importing Toyota Hybrid SUVs and remanufacturing right-hand drive Toyota Sequoia and Tundra models in New Zealand.",
                            "publisher": {
                              "@id": "https://www.glacier.nz/#organization"
                            },
                            "potentialAction": [
                              {
                                "@type": "SearchAction",
                                "target": "https://www.glacier.nz/?s={search_term_string}",
                                "query-input": "required name=search_term_string"
                              }
                            ],
                            "inLanguage": "en-US"
                          },
                          "2": {
                            "@type": "ImageObject",
                            "@id": "https://www.glacier.nz/#primaryimage",
                            "inLanguage": "en-US",
                            "url": "https://www.glacier.nz/static/c6b4c8bd2fc905a29ac1fbb6fd240f23/ccd45/glacierLogo.webp",
                            "contentUrl": "https://www.glacier.nz/static/c6b4c8bd2fc905a29ac1fbb6fd240f23/ccd45/glacierLogo.webp",
                            "width": 1920,
                            "height": 1080,
                            "caption": "2023 Toyota Sequoia & Tundra | Right Hand Drive Hybrid SUV"
                          },
                          "3": {
                            "@type": "WebPage",
                            "@id": "https://www.glacier.nz/#webpage",
                            "url": "https://www.glacier.nz/",
                            "name": "2023 Toyota Sequoia & Tundra | Right Hand Drive Hybrid SUV",
                            "isPartOf": {
                              "@id": "https://www.glacier.nz/#website"
                            },
                            "about": {
                              "@id": "https://www.glacier.nz/#organization"
                            },
                            "primaryImageOfPage": {
                              "@id": "https://www.glacier.nz/#primaryimage"
                            },
                            "datePublished": "2019-04-04T09:41:41+00:00",
                            "dateModified": "2022-11-18T16:17:52+1300",
                            "description": "Glacier International is a one-stop shop importing Toyota Hybrid SUVs and remanufacturing right-hand drive Toyota Sequoia and Tundra models in New Zealand.",
                            "breadcrumb": {
                              "@id": "https://www.glacier.nz/#breadcrumb"
                            },
                            "inLanguage": "en-US",
                            "potentialAction": [
                              {
                                "@type": "ReadAction",
                                "target": [
                                  "https://www.glacier.nz/"
                                ]
                              }
                            ],
                            "video": [
                              {
                                "@id": "https://www.glacier.nz/#video"
                              }
                            ]
                          },
                          "4": {
                            "@type": "BreadcrumbList",
                            "@id": "https://www.glacier.nz/#breadcrumb",
                            "itemListElement": [
                              {
                                "@type": "ListItem",
                                "position": 1,
                                "item": {
                                  "@id": "https://www.glacier.nz/#webpage",
                                  "name": "Home"
                                }
                              }
                            ]
                          },
                          "5": {
                            "@type": "ImageObject",
                            "@id": "https://www.glacier.nz/#local-main-organization-logo",
                            "inLanguage": "en-US",
                            "url": "https://www.glacier.nz/static/c6b4c8bd2fc905a29ac1fbb6fd240f23/ccd45/glacierLogo.webp",
                            "contentUrl": "https://www.glacier.nz/static/c6b4c8bd2fc905a29ac1fbb6fd240f23/ccd45/glacierLogo.webp",
                            "width": "210",
                            "height": "50",
                            "caption": null
                          },
                          "6": {
                            "@type": "VideoObject",
                            "@id": "https://www.glacier.nz/#video",
                            "name": "2023 Toyota Sequoia | Undeniable Capability, Unmistakable Presence | Toyota",
                            "isPartOf": {
                              "@id": "https://www.glacier.nz/#webpage"
                            },
                            "thumbnailUrl": "https://youtu.be/P4I_Pus8Xc8?list=PLuYwryiueK-6dsfdxI1lQmeOX8mLf_9G0",
                            "description": "Meet the all-new redesigned 2023 Toyota Sequoia. It’s striking in design and comfortable in character; get ready to move and be moved with every drive.",
                            "uploadDate": "2022-01-26",
                            "width": 1920,
                            "height": 1080,
                            "contentUrl": "https://youtu.be/P4I_Pus8Xc8?list=PLuYwryiueK-6dsfdxI1lQmeOX8mLf_9G0",
                            "duration": "PT17S",
                            "isFamilyFriendly": "true",
                            "inLanguage": "en-US"
                          }
                        }
                      }
                `}
            </script>
        </Helmet>
        <Main style={pageStyles}>
        <div className={showSent.message === "show" ? "showSent" : showSent.message === "shown" ? "showSent showSentEnd" : "dontShow"}><p>Thank you! Your custom {location.state ? location.state.model : "Tundra/Sequoia"} build has been sent through. An invoice will be in your inbox in the next 10 minutes.</p></div>
        <div style={{ display: "grid", maxHeight: "100vh"}} id="homeSection">
            {HeroVideo}
            {/* <Video
                className="videoClass"
                videoSrcURL={HeroVideo}
                videoTitle="Glacier Hero Video"
            /> */}
            <div
                style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "center",
                    display: "grid",
                    }}
                >
                <CenterContent>
                
                    <div>
                    <LogoOver>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="89 0 700 194">
                            <text id="GLACIER" className="cls-1" transform="translate(436.953 118.261) scale(.8)"><tspan x="0">GLACIER</tspan></text>
                            <text id="_-_INTERNATIONAL_-" data-name="- INTERNATIONAL -" className="cls-2" transform="translate(441.978 159.767) scale(.8)"><tspan x="0">- INTERNATIONAL -</tspan></text>
                        </svg>
                    </LogoOver>
                    <div className="herotext">
                        {/* <button onClick={() => {setShowSent({message: "show"}); console.log("button click")}}>Test</button>  */}
                        <p>REAL LUXURY IS EXPERIENCING THE DRIVE OF YOUR LIFE, IN UNRIVALLED SAFETY, WITH A CLEAR ENVIRONMENTAL CONSCIENCE <br/><br/>
                            The Hybrid Sequoia & Tundra experience is something incredibly hard to quantify and we don't feel the word 'luxury' in the traditional sense really does it justice. There is luxury in the feel of the leather. There is luxury in technology. There is luxury in a powerfully smooth ride. There is luxury in unrivalled safety. Lastly there is luxury in looking after our planet, which kiwis recognise more than most.</p>
                    </div>
                        <ScrollAnimation/>
                    </div>
                </CenterContent>
            </div>
        </div>
       
        </Main>
         {/* Sequioa section */}
         <DisplaySection>
            <div style={{textAlign:"center", padding: "20px"}}>
                <h2>2023</h2>
                <h1>2023 Toyota Hybrid Sequoia</h1>
                <p>The ultimate luxury SUV in New Zealand. Imported, right-hand drive remanufactured, and modified to your needs, exclusively by the team at Glacier International.</p>
                <p>With their power, comes a superior towing capacity. With their hybrid technology comes fuel efficiency with enhanced torque. With their ability to take you from the beach to the mountains, in comfort like never before, comes a new drive for adventure. The new Sequoia Hybrid is unrivalled.</p>
                <div><Button to="/experience-sequoia">Experience Sequoia</Button><ButtonOutline to="/build-my-sequoia">Build Your Sequoia</ButtonOutline></div>
            </div>
        <div> 
            <StaticImage
                src={`../images/homepageimages/sequoia.jpg`}
                alt="Sequoia Image"
                style={{
                    height: "100%"
                    }}
                />  
        </div>
        </DisplaySection>
        {/* Tundra section */}
        <DisplaySection>
            <div style={{textAlign:"center", padding: "20px"}}>
                <h2>2023</h2>
                <h1>2023 Toyota Hybrid Tundra</h1>
                <p>Tough, chiselled with cutting-edge hybrid technology - the perfect truck for your off-road adventures, with an unbeatable towing capacity. Technical muscle first and foremost, the all-new Tundra has the best 4x4 capabilities of any UTE we know.</p>
                <p>Currently the safest truck on the planet. Powered with Toyota Safety Sense 2.5, you no longer have to worry about collisions. Toyota Tundra is your feature-laden friend for long drives or family adventures.</p>
                <div><Button to="/experience-tundra">Experience Tundra</Button><ButtonOutline to="/build-my-tundra">Build Your Tundra</ButtonOutline></div>
            </div>
        <div> 
            <StaticImage
                src={`../images/homepageimages/tundra.jpg`}
                alt="Tundra Image"
                style={{
                    height: "100%"
                    }}
                />  
        </div>
        </DisplaySection>
       
           
    </Layout>
  )
}

export default IndexPage
