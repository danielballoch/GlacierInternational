import React, {useState, useEffect} from "react"
import styled from '@emotion/styled';
import Layout from "../components/layout"

import PriceFinanceBar from "../components/buildMyTundra/priceFinanceBar"
import MainImage from "../components/buildMyTundra/mainImage"
import FeatureBar from "../components/buildMyTundra/sequioaFeatureBar";
import MobileFeatureSection from "../components/buildMyTundra/mobileFeatureSection";
import MobileSelectionTab from "../components/buildMyTundra/mobileSelectionTab";

//import Capstone images
import BlackCapstone from "../images/sequoia/Capstone/CAPSTONEBLACK.webp"
import BlueCapstone from "../images/sequoia/Capstone/CAPSTONEBLUE.webp"
import GrayCapstone from "../images/sequoia/Capstone/CAPSTONEGRAY.webp"
import PearlCapstone from "../images/sequoia/Capstone/CAPSTONEPEARL.webp"
import RedCapstone from "../images/sequoia/Capstone/CAPSTONERED.webp"
import SilverCapstone from "../images/sequoia/Capstone/CAPSTONESILVER.webp"


//import Limited images
import BlackLimited from "../images/sequoia/Limited/LIMITEDBLACK.webp"
import BlueLimited from "../images/sequoia/Limited/LIMITEDBLUE.webp"
import GreenLimited from "../images/sequoia/Limited/LIMITEDGREEN.webp"
import GrayLimited from "../images/sequoia/Limited/LIMITEDGREY.webp"
import MesquiteLimited from "../images/sequoia/Limited/LIMITEDMESQUITE.webp"
import PearlLimited from "../images/sequoia/Limited/LIMITEDPEARL.webp"
import RedLimited from "../images/sequoia/Limited/LIMITEDRED.webp"
import SilverLimited from "../images/sequoia/Limited/LIMITEDSILVER.webp"
import WhiteLimited from "../images/sequoia/Limited/LIMITEDWHITE.webp"

//import Platinum images
import BlackPlatinum from "../images/sequoia/Platinum/PLATINUMBLACK.webp"
import BluePlatinum from "../images/sequoia/Platinum/PLATINUMBLUE.webp"
import GrayPlatinum from "../images/sequoia/Platinum/PLATINUMMETALLIC.webp"
import PearlPlatinum from "../images/sequoia/Platinum/PLATINUMPEARL.webp"
import RedPlatinum from "../images/sequoia/Platinum/PLATINUMRED.webp"
import SilverPlatinum from "../images/sequoia/Platinum/PLATINUMSILVER.webp"

//import SR5 images
import BlackSR5 from "../images/sequoia/SR5/SR5BLACK.webp"
import BlueSR5 from "../images/sequoia/SR5/SR5BLUE.webp"
import GraySR5 from "../images/sequoia/SR5/SR5GRAY.webp"
import GreenSR5 from "../images/sequoia/SR5/SR5GREEN.webp"
import MesquiteSR5 from "../images/sequoia/SR5/SR5MESQUITE.webp"
import RedSR5 from "../images/sequoia/SR5/SR5RED.webp"
import RockSR5 from "../images/sequoia/SR5/SR5ROCK.webp"
import SilverSR5 from "../images/sequoia/SR5/SR5SILVER.webp"
import WhiteSR5 from "../images/sequoia/SR5/SR5WHITE.webp"

//import TRDPRO images
import BlackTRDPRO from "../images/sequoia/TRDPRO/TRDPROBLACK.webp"
import GrayTRDPRO from "../images/sequoia/TRDPRO/TRDPROGRAY.webp"
import SolarTRDPRO from "../images/sequoia/TRDPRO/TRDPROSOLAR.webp"
import WhiteTRDPRO from "../images/sequoia/TRDPRO/TRDPROWHITE.webp"

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
const Row = styled.div`
display: flex;
justify-content: right;
flex-direction: row;
align-items: center;
`




//needed so window.width doesn't thow error
const isBrowser = typeof window !== "undefined";


const IndexPage = ({display=false}) => {
    
    const [price, setPrice] = useState(0);
    const [activeGrade, setActiveGrade] = useState(["SR5",32000, 0]);
    const [activeColor, setActiveColor] = useState(["Midnight Black Metallic",100, 5]);

    const [selectionStage, setSelectionStage] = useState(0);
    

    const grades = [
        {name: "SR5", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Army Green","Smoked Mesquite", "Supersonic Red","Rock", "Celestial Silver Metallic", "White"], src: [BlackSR5, BlueSR5, GraySR5, GreenSR5,MesquiteSR5, RedSR5,RockSR5, SilverSR5, WhiteSR5], price: 205000},
        {name: "Limited", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic", "Army Green", "Smoked Mesquite", "Wind Chill Pearl", "Supersonic Red", "Celestial Silver Metallic", "White"], src: [BlackLimited, BlueLimited, GrayLimited, GreenLimited, MesquiteLimited, PearlLimited, RedLimited, SilverLimited, WhiteLimited], price: 225000},
        {name: "Platinum", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl", "Supersonic Red", "Celestial Silver Metallic"], src: [BlackPlatinum, BluePlatinum, GrayPlatinum, PearlPlatinum, RedPlatinum, SilverPlatinum], price: 245000},
        {name: "TRD PRO", colors: ["Midnight Black Metallic","Magnetic Grey Metallic","Solar Octane", "White"], src: [BlackTRDPRO, GrayTRDPRO, SolarTRDPRO, WhiteTRDPRO], price: 265000},
        {name: "Capstone", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic"], src: [BlackCapstone, BlueCapstone, GrayCapstone, PearlCapstone, RedCapstone, SilverCapstone], price: 265000},
    ]


    //update price
    useEffect(() => {
        if (price !== grades[activeGrade[2]]){setPrice(grades[activeGrade[2]].price)}
    });
    if (isBrowser && window.innerWidth > 1050){
        // desktop page
  return (
      <Layout title="Build Your Sequoia | Glacier International" hideFooter={true} invertNav={true}>
        <Main style={pageStyles}>
        <PriceFinanceBar price={price}/>
        <Row>
            <MainImage src={grades[activeGrade[2]].src[activeColor[2]]} />
            <FeatureBar grades={grades} activeGrade={activeGrade} activeColor={activeColor} updateActiveColor={(color) => {setActiveColor(color); console.log(color);}} updateActiveGrade={(grade) => {setActiveGrade(grade); setActiveColor(["Midnight Black Metallic",100, 0])}} price={price}/>
        </Row>
        </Main>
    </Layout>
  )
    } else {
        // mobile page
        return (
            <Layout title="Build Your Sequoia | Glacier International" hideFooter={true} invertNav={true}>
                <Main style={pageStyles}>
                    <MainImage src={grades[activeGrade[2]].src[activeColor[2]]}/>
                    <PriceFinanceBar price={price}/>
                    <MobileSelectionTab selectionStage={selectionStage} updateSelectionStage={(newStageNumber) => {setSelectionStage(newStageNumber)}} activeGrade={activeGrade}/>
                    <MobileFeatureSection price={price} model="Sequoia" selectionStage={selectionStage} grades={grades} activeGrade={activeGrade} activeColor={activeColor} updateActiveColor={(color) => {setActiveColor(color); console.log(color);}} updateActiveGrade={(grade) => {setActiveGrade(grade); setActiveColor(["Midnight Black Metallic",100, 0])}} />
                </Main>
            </Layout>
        )
    }
}

export default IndexPage