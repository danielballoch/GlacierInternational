import React, {useState, useEffect} from "react"
import styled from '@emotion/styled';
import Layout from "../components/layout"

import PriceFinanceBar from "../components/buildMyTundra/priceFinanceBar"
import MainImage from "../components/buildMyTundra/mainImage"
import FeatureBar from "../components/buildMyTundra/featureBar";
import MobileFeatureSection from "../components/buildMyTundra/mobileFeatureSection";
import MobileSelectionTab from "../components/buildMyTundra/mobileSelectionTab";

//import 1794 images
import Black1794 from "../images/tundra/1794/Black1794.png"
import Blue1794 from "../images/tundra/1794/Blue1794.png"
import Grey1794 from "../images/tundra/1794/Grey1794.png"
import Green1794 from "../images/tundra/1794/Green1794.png"
import Mesquite1794 from "../images/tundra/1794/Mesquite1794.png"
import Pearl1794 from "../images/tundra/1794/Pearl1794.png"
import Red1794 from "../images/tundra/1794/Red1794.png"
import Silver1794 from "../images/tundra/1794/Silver1794.png"

//import 1794 Longbed images
import Black1794Longbed from "../images/tundra/1794/Longbed/Black1794Longbed.png"
import Blue1794Longbed from "../images/tundra/1794/Longbed/Blue1794Longbed.png"
import Grey1794Longbed from "../images/tundra/1794/Longbed/Grey1794Longbed.png"
import Green1794Longbed from "../images/tundra/1794/Longbed/Green1794Longbed.png"
import Mesquite1794Longbed from "../images/tundra/1794/Longbed/Mesquite1794Longbed.png"
import Pearl1794Longbed from "../images/tundra/1794/Longbed/Pearl1794Longbed.png"
import Red1794Longbed from "../images/tundra/1794/Longbed/Red1794Longbed.png"
import Silver1794Longbed from "../images/tundra/1794/Longbed/Silver1794Longbed.png"

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
import RockLimited from "../images/tundra/Limited/RockLimited.png"
import SilverLimited from "../images/tundra/Limited/SilverLimited.png"
import WhiteLimited from "../images/tundra/Limited/WhiteLimited.png"

//import Limited Longbed Images
import BlackLimitedLongbed from "../images/tundra/Limited/Longbox/BlackLimitedLongbox.png"
import BlueLimitedLongbed from "../images/tundra/Limited/Longbox/BlueLimitedLongbox.png"
import GreenLimitedLongbed from "../images/tundra/Limited/Longbox/GreenLimitedLongbox.png"
import GreyLimitedLongbed from "../images/tundra/Limited/Longbox/GreyLimitedLongbox.png"
import MesquiteLimitedLongbed from "../images/tundra/Limited/Longbox/MesquiteLimitedLongbox.png"
import PearlLimitedLongbed from "../images/tundra/Limited/Longbox/PearlLimitedLongbox.png"
import RedLimitedLongbed from "../images/tundra/Limited/Longbox/RedLimitedLongbox.png"
import RockLimitedLongbed from "../images/tundra/Limited/Longbox/RockLimitedLongbox.png"
import SilverLimitedLongbed from "../images/tundra/Limited/Longbox/SilverLimitedLongbox.png"
import WhiteLimitedLongbed from "../images/tundra/Limited/Longbox/WhiteLimitedLongbox.png"

//import Platinum Images
import BlackPlatinum from "../images/tundra/Platinum/BlackPlatinum.png"
import BluePlatinum from "../images/tundra/Platinum/BluePlatinum.png"
import GreyPlatinum from "../images/tundra/Platinum/GreyPlatinum.png"
import PearlPlatinum from "../images/tundra/Platinum/PearlPlatinum.png"
import RedPlatinum from "../images/tundra/Platinum/RedPlatinum.png"
import SilverPlatinum from "../images/tundra/Platinum/SilverPlatinum.png"

//import Platinum Longbed Images
import BlackPlatinumLongbed from "../images/tundra/Platinum/Longbed/BlackPlatinumLongbed.png"
import BluePlatinumLongbed from "../images/tundra/Platinum/Longbed/BluePlatinumLongbed.png"
import GreyPlatinumLongbed from "../images/tundra/Platinum/Longbed/GreyPlatinumLongbed.png"
import PearlPlatinumLongbed from "../images/tundra/Platinum/Longbed/PearlPlatinumLongbed.png"
import RedPlatinumLongbed from "../images/tundra/Platinum/Longbed/RedPlatinumLongbed.png"
import SilverPlatinumLongbed from "../images/tundra/Platinum/Longbed/SilverPlatinumLongbed.png"

//import SR Images
// import BlackSR from "../images/tundra/SR/BlackSR.png"
// import GreySR from "../images/tundra/SR/GreySR.png"
// import SilverSR from "../images/tundra/SR/SilverSR.png"
// import WhiteSR from "../images/tundra/SR/WhiteSR.png"

//import SR5 Images
// import BlackSR5 from "../images/tundra/SR5/BlackSR5.png"
// import BlueSR5 from "../images/tundra/SR5/BlueSR5.png"
// import GreenSR5 from "../images/tundra/SR5/GreenSR5.png"
// import GreySR5 from "../images/tundra/SR5/GreySR5.png"
// import RedSR5 from "../images/tundra/SR5/RedSR5.png"
// import RockSR5 from "../images/tundra/SR5/RockSR5.png"
// import SilverSR5 from "../images/tundra/SR5/SilverSR5.png"
// import WhiteSR5 from "../images/tundra/SR5/WhiteSR5.png"

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
    const [activeGrade, setActiveGrade] = useState(["Limited Hybrid TRD OFF ROAD",32000, 0]);
    const [activeColor, setActiveColor] = useState(["Midnight Black Metallic",100, 5]);
    const [activeBed, setActiveBed] = useState(0)

    const [selectionStage, setSelectionStage] = useState(0);
    

    const grades = [
        {name: "Limited Hybrid TRD OFF ROAD", colors: ["Midnight Black Metallic","Blueprint","Army Green","Magnetic Grey Metallic","Smoked Mesquite","Wind Chill Pearl","Supersonic Red","Lunar Rock","Celestial Silver Metallic", "White"], src: [BlackLimited, BlueLimited, GreenLimited, GreyLimited,MesquiteLimited, PearlLimited, RedLimited, RockLimited, SilverLimited, WhiteLimited, BlackLimitedLongbed, BlueLimitedLongbed, GreenLimitedLongbed, GreyLimitedLongbed,MesquiteLimitedLongbed, PearlLimitedLongbed, RedLimitedLongbed, RockLimitedLongbed, SilverLimitedLongbed, WhiteLimitedLongbed], price: 205000, cab: ["Regular (5.5ft)", "Long Box (6.5ft)"]},
        {name: "Platinum Hybrid", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic"], src: [BlackPlatinum, BluePlatinum, GreyPlatinum, PearlPlatinum, RedPlatinum, SilverPlatinum, BlackPlatinumLongbed, BluePlatinumLongbed, GreyPlatinumLongbed, PearlPlatinumLongbed, RedPlatinumLongbed, SilverPlatinumLongbed], price: 225000, cab: ["Regular (5.5ft)", "Long Box (6.5ft)"]},
        {name: "1794 Hybrid TRD OFF ROAD", colors: ["Midnight Black Metallic","Blueprint", "Army Green","Magnetic Grey Metallic", "Smoked Mesquite", "Wind Chill Pearl", "Supersonic Red", "Celestial Silver Metallic"], src: [Black1794, Blue1794, Green1794, Grey1794, Mesquite1794, Pearl1794, Red1794, Silver1794, Black1794Longbed, Blue1794Longbed, Green1794Longbed, Grey1794Longbed, Mesquite1794Longbed, Pearl1794Longbed, Red1794Longbed, Silver1794Longbed], price: 245000, cab: ["Regular (5.5ft)", "Long Box (6.5ft)"]},
        {name: "TRD PRO Hybrid", colors: ["Midnight Black Metallic","Lunar Rock","Solar Octane", "White"], src: [BlackTRDPRO, RockTRDPRO, SolarTRDPRO, WhiteTRDPRO], price: 265000},
        {name: "Capstone Hybrid", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic"], src: [BlackCapstone, BlueCapstone, GreyCapstone, PearlCapstone, RedCapstone, SilverCapstone], price: 265000},
        // {name: "SR", colors: ["Midnight Black Metallic","Magnetic Grey Metallic","Celestial Silver Metallic", "White"], src: [BlackSR, GreySR, SilverSR, WhiteSR], price: "55,490"},
        // {name: "SR5", colors: ["Midnight Black Metallic","Blueprint","Army Green","Magnetic Grey Metallic","Supersonic Red","Lunar Rock","Celestial Silver Metallic", "White"], src: [BlackSR5, BlueSR5, GreenSR5, GreySR5, RedSR5,RockSR5, SilverSR5, WhiteSR5], price: "55,490"},
    ]


    //update price
    useEffect(() => {
        if (price !== grades[activeGrade[2]]){setPrice(grades[activeGrade[(2)]].price)};
        if (activeBed !== 0 && activeGrade[0] !== "Platinum Hybrid" && activeGrade[0] !== "1794 Hybrid TRD OFF ROAD" && activeGrade[0] !== "Limited Hybrid TRD OFF ROAD"){setActiveBed(0)};
        
    });
    if (isBrowser && window.innerWidth > 1050){
        // desktop page
  return (
      <Layout title="Build Your Tundra | Glacier International" hideFooter={true} invertNav={true}>
        <Main style={pageStyles}>
        <PriceFinanceBar price={price}/>
        <Row>
            <MainImage src={grades[activeGrade[2]].src[activeColor[(2)]+activeBed*grades[activeGrade[2]].src.length/2]}/>
            <FeatureBar grades={grades} activeGrade={activeGrade} activeColor={activeColor} updateActiveColor={(color) => {setActiveColor(color); console.log(color);}} updateActiveGrade={(grade) => {setActiveGrade(grade); setActiveColor(["Midnight Black Metallic",100, 0])}} activeBed={activeBed} updateActiveBed={(bed) => setActiveBed(bed)} price={price}/>
        </Row>
        </Main>
    </Layout>
  )
    } else {
        // mobile page
        return (
            <Layout title="Build Your Tundra | Glacier International" hideFooter={true} invertNav={true}>
                <Main style={pageStyles}>
                    <MainImage src={grades[activeGrade[2]].src[activeColor[(2)]+activeBed*grades[activeGrade[2]].src.length/2]}/>
                    <PriceFinanceBar price={price}/>
                    <MobileSelectionTab activeGrade={activeGrade} selectionStage={selectionStage} updateSelectionStage={(newStageNumber) => {setSelectionStage(newStageNumber)}}/>
                    <MobileFeatureSection price={price} model="Tundra" selectionStage={selectionStage} grades={grades} activeGrade={activeGrade} activeColor={activeColor} updateActiveColor={(color) => {setActiveColor(color); console.log(color);}} updateActiveGrade={(grade) => {setActiveGrade(grade); setActiveColor(["Midnight Black Metallic",100, 0])}}  activeBed={activeBed} updateActiveBed={(bed) => {setActiveBed(bed)}} price={price}/>
                </Main>
            </Layout>
        )
    }
}

export default IndexPage