import React, {useState, useEffect} from "react"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

//import 1794 images
import Black1794 from "../images/tundra/1794/Black1794.png"
import Blue1794 from "../images/tundra/1794/Blue1794.png"
import Grey1794 from "../images/tundra/1794/Grey1794.png"
import Green1794 from "../images/tundra/1794/Green1794.png"
import Mesquite1794 from "../images/tundra/1794/Mesquite1794.png"
import Pearl1794 from "../images/tundra/1794/Pearl1794.png"
import Red1794 from "../images/tundra/1794/Red1794.png"
import Silver1794 from "../images/tundra/1794/Silver1794.png"

//import Capstone Images
import BlackCapstone from "../images/tundra/Capstone/BlackCapstone.png"
import BlueCapstone from "../images/tundra/Capstone/BlueCapstone.png"
import GreyCapstone from "../images/tundra/Capstone/GreyCapstone.png"
import PearlCapstone from "../images/tundra/Capstone/PearlCapstone.png"
import RedCapstone from "../images/tundra/Capstone/RedCapstone.png"
import SilverCapstone from "../images/tundra/Capstone/SilverCapstone.png"

//import Limited Images
import BlackLimited from "../images/tundra/Limited/BlackLimited.png"
import BlueLimited from "../images/tundra/Limited/BlueLimited.png"
import GreenLimited from "../images/tundra/Limited/GreenLimited.png"
import GreyLimited from "../images/tundra/Limited/GreyLimited.png"
import MesquiteLimited from "../images/tundra/Limited/MesquiteLimited.png"
import PearlLimited from "../images/tundra/Limited/PearlLimited.png"
import RedLimited from "../images/tundra/Limited/RedLimited.png"
import SilverLimited from "../images/tundra/Limited/SilverLimited.png"
import WhiteLimited from "../images/tundra/Limited/WhiteLimited.png"

//import Platinum Images
import BlackPlatinum from "../images/tundra/Platinum/BlackPlatinum.png"
import BluePlatinum from "../images/tundra/Platinum/BluePlatinum.png"
import GreyPlatinum from "../images/tundra/Platinum/GreyPlatinum.png"
import PearlPlatinum from "../images/tundra/Platinum/PearlPlatinum.png"
import RedPlatinum from "../images/tundra/Platinum/RedPlatinum.png"
import SilverPlatinum from "../images/tundra/Platinum/SilverPlatinum.png"

//import SR Images
import BlackSR from "../images/tundra/SR/BlackSR.png"
import GreySR from "../images/tundra/SR/GreySR.png"
import SilverSR from "../images/tundra/SR/SilverSR.png"
import WhiteSR from "../images/tundra/SR/WhiteSR.png"

//import SR5 Images
import BlackSR5 from "../images/tundra/SR5/BlackSR5.png"
import BlueSR5 from "../images/tundra/SR5/BlueSR5.png"
import GreenSR5 from "../images/tundra/SR5/GreenSR5.png"
import GreySR5 from "../images/tundra/SR5/GreySR5.png"
import RedSR5 from "../images/tundra/SR5/RedSR5.png"
import RockSR5 from "../images/tundra/SR5/RockSR5.png"
import SilverSR5 from "../images/tundra/SR5/SilverSR5.png"
import WhiteSR5 from "../images/tundra/SR5/WhiteSR5.png"

//import TRDPRO Images
import BlackTRDPRO from "../images/tundra/TRDPRO/BlackTRDPRO.png"
import RockTRDPRO from "../images/tundra/TRDPRO/RockTRDPRO.png"
import SolarTRDPRO from "../images/tundra/TRDPRO/SolarTRDPRO.png"
import WhiteTRDPRO from "../images/tundra/TRDPRO/WhiteTRDPRO.png"

const pageStyles = {
    padding: 0,
    margin: "100px 0 0 0",
    backgroundColor: "white"
  }

const Main = styled.div`
padding: 0;
font-family: 'visby',sans-serif;
color: white;
h1 {
    /* margin-top: 100px; */
    text-align: center;
    color: white;
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
    height: 100vh;
    @media(maxWidth){
        /* object-fit: cover;
        object-position: 32%; 
        height: 100vw;
        */
    }
}
.popup {
    @media (max-width: 1050px){
        top: 15%;
        width: 80%;
        left: 10%;
    }
    left: calc(35vw - 350px);
    text-align: center;
    width: 700px;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 60%;
    z-index: 100;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    /* margin: 10px; */
    /* padding: 20px; */
    background-color: white;
    border-radius: 10px;
    color: black;
    p {
        padding: 20px;
    }
    a {
        margin: 20px;
    }
}
.none {
    display: none;
}
`

const Center = styled.div`
display: flex;
position: fixed;
top: calc(50vh - 20vh);
left: calc(35vw - 20vw);
width: 40vw;
height: 40vh;
justify-content: center;
flex-direction: column;
align-items: center;
@media (max-width: 1050px){
    width: 94vw;
    max-width: 660px;
    /* left: calc(50vw - 47vw); */
    left: unset;
    margin: auto;
    /* top: calc(40vh - 20vh); */
    margin-top: 100px;
    top: 0;
    img {
        width: 100%;
    }
    position: relative;
}
`
const CenterLeft = styled.div`
z-index: 10;
background-color: white;
width: 30vw;
min-height: 100vh;
margin-left: 20px;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.04);
h1 {
    margin: 60px 20px 0px 40px;
    color: rgba(0,0,0,0.9);
    font-size: 3em;
    font-weight: 100;
    text-align: left;
}
p {
color: black;
margin: 60px 20px 0px 40px;
font-size: 1.5em;
}
.infoText {
    font-size: 1em;
}
.features {
    margin: 40px 20px 0px 26px;
    display: flex;
    flex-wrap: wrap;
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: black;
        padding: 10px 14px;
        text-align: center;
        h2 {
            margin: 0;
            color: #252525;
        }
        p {
            margin: 0;
            font-size: 0.9rem;
        }
    }
}
.orderbtn {
    background-color: #75ba75;
    color: white;
    width: 80%;
    font-size: 20px;
    letter-spacing: 1.4px;
    padding: 14px;
    font-weight: 600;
    font-family: 'Heebo',sans-serif;
    border: none;
    margin: 40px auto 40px auto;
    :hover {
        border: none;
        background-color: #4C974C;
    }
}

display: flex;
justify-content: left;
flex-direction: column;
align-items: left;
.wrap {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 20px 0px 34px;
    
}
button {
    align-self: flex-start;
    background-color: white;
    padding: 6px 20px;
    border-radius: 50px;
    margin: 10px 10px;
    border: none;
    transition: .3s;
    border: solid 1px white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    :hover {
        cursor: pointer;
        border: solid 1px #0952BE;
    }
}
.active {
    border: solid 1px #0952BE;
}
`

const Row = styled.div`
display: flex;
justify-content: right;
flex-direction: row;
align-items: center;
`

const Price = styled.div`
.up {
    span {
        transform: rotate(-135deg) !important;
    }
}
.left {
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 1px;
    border: none;
    padding: 3px 6px;
    border-radius: 30px;
    span {
        transition: .3s;
        display: inline-block;
        /* vertical-align: middle; */
        height: 1px;
        width: 1px;
        border: solid #666;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        /* transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg); */
    }
}
a:last-of-type {
    :hover {
        cursor: pointer ;
    }
}
@media(max-width: 1050px) {
    width: 100%;
    left: 0;
    /* top: calc(20vw + 300px); */
    /* bottom: calc(30vh); */
    /* height 40vh top: calc(40vh - 20vh); */
    position: relative;
    
}
@media(max-width: 700px) {
font-size: 14px;
}
position: fixed;
display: flex;
justify-content: center;
align-items: center;
bottom: 0;
left: calc(35vw - 350px);
text-align: center;
width: 700px;
height: 100px;
background-color: white;
color: black;
border-radius: 50px 50px 0 0;
/* border-top: solid 1px black; */
box-shadow: rgba(33, 35, 38, 0.1) 0px -2px 5px -1px;
/* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
a {
    margin: 0 10px;
   
}
`

const FeatureSection = styled.div`
width: 80%;
margin: 0 auto 30vh auto;
display: flex;
flex-direction: column;
justify-content: center;
p {
    margin: 10px;
}
.wrap {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
button {
    color: black;
    align-self: flex-start;
    background-color: white;
    padding: 22px 30px;
    border-radius: 10px;
    margin: 6px 2px;
    border: none;
    transition: .3s;
    border: solid 1px white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    :hover {
        cursor: pointer;
        border: solid 1px #0952BE;
    }
}
.orderbtn {
    background-color: #75ba75;
    color: white;
    width: 100%;
    font-size: 18px;
    letter-spacing: 1.4px;
    font-weight: 600;
    font-family: 'Heebo',sans-serif;
    border: none;
    margin: 20px auto 0 auto;
    :hover {
        border: none;
        background-color: #4C974C;
    }
}
.active {
    border: solid 1px #0952BE;
}
`
const SelectionTab = styled.div`
display: flex;
justify-content: center;
margin: 40px 0 20px 0;
color: black;

button {
    margin: 4px;
    background: none;
    border: none;
    font-size: 16px;
    padding: 10px 20px;
    color: #666;
    :hover {
        cursor: pointer;
    }
}
.next, .back {
    /* border: solid 1px #0952BE;
    border-radius: 50px; */
    height: 3px;
    width: 3px;
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
}
.back {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
}
.selected {
    color: black;
}
`



const isBrowser = typeof window !== "undefined";




const IndexPage = ({display=false}) => {
    
    const [price, setPrice] = useState(0);

    const [model, setModel] = useState(["TRD PRO",32000]);
    const [activeGrade, setActiveGrade] = useState(["1794",32000, 0]);
    const [lift, setLift] = useState(0);

    const [activeColor, setActiveColor] = useState(["Supersonic Red",100, 5]);

    const [selectionStage, setSelectionStage] = useState(0);
    const [financePopup, setFinancePopup] = useState(false);
    

    const grades = [
        {name: "1794", colors: ["Midnight Black Metallic","Blueprint", "Army Green","Magnetic Grey Metallic", "Smoked Mesquite", "Wind Chill Pearl", "Supersonic Red", "Celestial Silver Metallic"], src: [Black1794, Blue1794, Green1794, Grey1794, Mesquite1794, Pearl1794, Red1794, Silver1794], price: "89,091"},
        {name: "Capstone", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic"], src: [BlackCapstone, BlueCapstone, GreyCapstone, PearlCapstone, RedCapstone, SilverCapstone], price: "113,553"},
        {name: "Limited", colors: ["Midnight Black Metallic","Blueprint","Army Green","Magnetic Grey Metallic","Smoked Mesquite","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic", "White"], src: [BlackLimited, BlueLimited, GreenLimited, GreyLimited,MesquiteLimited, PearlLimited, RedLimited, SilverLimited, WhiteLimited], price: "72,351"},
        {name: "Platinum", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic"], src: [BlackPlatinum, BluePlatinum, GreyPlatinum, PearlPlatinum, RedPlatinum, SilverPlatinum], price: "88,520"},
        {name: "SR", colors: ["Midnight Black Metallic","Magnetic Grey Metallic","Celestial Silver Metallic", "White"], src: [BlackSR, GreySR, SilverSR, WhiteSR], price: "55,490"},
        {name: "SR5", colors: ["Midnight Black Metallic","Blueprint","Army Green","Magnetic Grey Metallic","Supersonic Red","Lunar Rock","Celestial Silver Metallic", "White"], src: [BlackSR5, BlueSR5, GreenSR5, GreySR5, RedSR5,RockSR5, SilverSR5, WhiteSR5], price: "55,490"},
        {name: "TRDPRO", colors: ["Midnight Black Metallic","Lunar Rock","Solar Octane", "White"], src: [BlackTRDPRO, RockTRDPRO, SolarTRDPRO, WhiteTRDPRO], price: "103,115"},
    ]
    console.log(grades)
    console.log(activeColor[0]+activeGrade[0])
    useEffect(() => {
        if (price !== grades[activeGrade[2]]){setPrice(grades[activeGrade[2]].price)}
    });
    if (isBrowser && window.innerWidth > 1050){
  return (
      <Layout hideFooter={true} invertNav={true}>
        <Main style={pageStyles}>
        <title>Home Page</title>
        
        <div className={financePopup ? "popup" : "none"}>
            <p>Glacier International lease/loan options or any relevant information for finances.</p>
            <p>*to be updated/redesigned once more info is known here*</p>
        </div>
        <Price><a>Total Price: ${price} (NZD)</a><a onClick={() => {setFinancePopup(!financePopup)}}>Finance Options<span className={financePopup ? "left up" : "left"}><span/></span></a></Price>
        <Row>
            <Center>
                {/*Get image src from grades array based on active grade & color */}
                <img src={grades[activeGrade[2]].src[activeColor[2]]} 
                // style={{width: "1100px"}}
                />
            </Center>
            <CenterLeft>
                <h1>2022 Toyota Tundra</h1>
                <div className="features">
                    <div><h2>437 HP/583 Lb.-Ft.</h2><p>i-FORCE MAX Engine</p></div>
                    <div><h2>389 HP/479 Lb.-Ft.</h2><p>i-FORCE Engine </p></div>
                    <div><h2>12,000 Lbs. *</h2><p>Max Towing *</p></div>
                    <div><h2>1,940 Lbs. *</h2><p>Max Payload </p></div>
                </div>
                <p>Grade:</p>
                {/*Display grade buttons, update activeGrade state onClick & if active use active class styling */}
                <div className="wrap">
                {grades.map((grade, i) => (
                    <button className={(activeGrade[0] === grade.name ? 'active' : '')} onClick={() => {setActiveGrade([grade.name, 32000, i]);setActiveColor(["Midnight Black Metallic",100, 0])}}>{grade.name}</button>
                ))}
                </div>
                <p>Colour:</p>
                {/*Display color buttons based on activeGrade, update activeColor state onClick & if active use active class styling */}
                <div className="wrap">
                {grades[activeGrade[2]].colors.map((color, i) => (
                    <button className={(activeColor[0] === color ? 'active' : '') } onClick={() => {setActiveColor([color,100, i])}}>{color}</button>
                ))}
                </div>
                
                <p className="infoText">To put a 10% deposit down securing your Tundra build for 2022, please click the button for more info at our payment gateway.</p>
                <button className="orderbtn">Complete Order</button>
            </CenterLeft>
        </Row>
        
        
        

        </Main>
    </Layout>
  )
    } else {

        let featureSection;
        if (selectionStage === 0){
            featureSection = <FeatureSection>
                {/*Display grade buttons, update activeGrade state onClick & if active use active class styling */}
                <div className="wrap">
                {grades.map((grade, i) => (
                    <button className={(activeGrade[0] === grade.name ? 'active' : '')} onClick={() => {setActiveGrade([grade.name, 32000, i]);setActiveColor(["Midnight Black Metallic",100, 0])}}>{grade.name}</button>
                ))}
                </div>
            </FeatureSection>
        } else if (selectionStage === 1){
            featureSection = <FeatureSection>
                {/*Display color buttons based on activeGrade, update activeColor state onClick & if active use active class styling */}
                <div className="wrap">
                {grades[activeGrade[2]].colors.map((color, i) => (
                    <button className={(activeColor[0] === color ? 'active' : '') } onClick={() => {setActiveColor([color,100, i])}}>{color}</button>
                ))}
                </div>
            </FeatureSection>
        } else {
            featureSection = <FeatureSection><p>To put a 10% deposit down securing your Tundra build for 2022, please click the button for more info at our payment gateway.</p><button className="orderbtn">Complete Order</button></FeatureSection>
        }
        return (
            <Layout hideFooter={true} invertNav={true}>
                <Main style={pageStyles}>
                    <title>Home Page</title>
                    <Center>
                        {/*Get image src from grades array based on active grade & color */}
                        <img src={grades[activeGrade[2]].src[activeColor[2]]} 
                        // style={{width: "1100px"}}
                        />
                    </Center>

                    <div className={financePopup ? "popup" : "none"}>
                        <p>Glacier International lease/loan options or any relevant information for finances.</p>
                        <p>*to be updated/redesigned once more info is known here*</p>
                    </div>
                    <Price><a>Total Price: ${price} (NZD)</a><a onClick={() => {setFinancePopup(!financePopup)}}>Finance Options <span className={financePopup ? "left up" : "left"}><span/></span></a></Price>
                    
                    <SelectionTab>
                        <button onClick={() => {if(selectionStage > 0){setSelectionStage(selectionStage - 1)}}}><span className="back"/></button>
                        <button className={selectionStage === 0 ? "selected" : ""} onClick={() => {setSelectionStage(0)}}>grade</button>
                        <button className={selectionStage === 1 ? "selected" : ""} onClick={() => {setSelectionStage(1)}}>color</button>
                        <button className={selectionStage === 2 ? "selected" : ""} onClick={() => {setSelectionStage(2)}}>order</button>
                        <button onClick={() => {if(selectionStage < 2){setSelectionStage(selectionStage + 1)}}}><span className="next"/></button>
                    </SelectionTab>
                    {featureSection}
                    {/* <ButtonSection></ButtonSection> */}
                    
                    
                    {/* <p>{selectionStage}</p> */}
                </Main>
            </Layout>
        )
    }
}

export default IndexPage