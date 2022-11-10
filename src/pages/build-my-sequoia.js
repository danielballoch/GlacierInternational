import React, {useState, useEffect} from "react"
import {Helmet} from 'react-helmet'
import styled from '@emotion/styled';
import Layout from "../components/layout"

import PriceFinanceBar from "../components/buildMyTundra/priceFinanceBar"
import MainImage from "../components/buildMyTundra/mainImage"
import FeatureBar from "../components/buildMyTundra/sequioaFeatureBar";
import MobileFeatureSection from "../components/buildMyTundra/mobileFeatureSection";
import MobileSelectionTab from "../components/buildMyTundra/mobileSelectionTab";


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
    //reference images
    // previously imported but will keep structure for clean code 
    //reference Capstone images
    let BlackCapstone1 = "images/sequoia/Capstone/Capstone/BlackCapstone/BlackCapstone1.png"
    let BlackCapstone2 = "images/sequoia/Capstone/Capstone/BlackCapstone/BlackCapstone2.png"
    let BlackCapstone3 = "images/sequoia/Capstone/Capstone/BlackCapstone/BlackCapstone3.png"
    let BlackCapstone4 = "images/sequoia/Capstone/Capstone/BlackCapstone/BlackCapstone4.png"
    let BlueCapstone1 = "images/sequoia/Capstone/Capstone/BlueCapstone/BlueCapstone1.png"
    let BlueCapstone2 = "images/sequoia/Capstone/Capstone/BlueCapstone/BlueCapstone2.png"
    let BlueCapstone3 = "images/sequoia/Capstone/Capstone/BlueCapstone/BlueCapstone3.png"
    let BlueCapstone4 = "images/sequoia/Capstone/Capstone/BlueCapstone/BlueCapstone4.png"
    let GreyCapstone1 = "images/sequoia/Capstone/Capstone/GreyCapstone/GreyCapstone1.png"
    let GreyCapstone2 = "images/sequoia/Capstone/Capstone/GreyCapstone/GreyCapstone2.png"
    let GreyCapstone3 = "images/sequoia/Capstone/Capstone/GreyCapstone/GreyCapstone3.png"
    let GreyCapstone4 = "images/sequoia/Capstone/Capstone/GreyCapstone/GreyCapstone4.png"
    let PearlCapstone1 = "images/sequoia/Capstone/Capstone/PearlCapstone/PearlCapstone1.png"
    let PearlCapstone2 = "images/sequoia/Capstone/Capstone/PearlCapstone/PearlCapstone2.png"
    let PearlCapstone3 = "images/sequoia/Capstone/Capstone/PearlCapstone/PearlCapstone3.png"
    let PearlCapstone4 = "images/sequoia/Capstone/Capstone/PearlCapstone/PearlCapstone4.png"
    let RedCapstone1 = "images/sequoia/Capstone/Capstone/RedCapstone/RedCapstone1.png"
    let RedCapstone2 = "images/sequoia/Capstone/Capstone/RedCapstone/RedCapstone2.png"
    let RedCapstone3 = "images/sequoia/Capstone/Capstone/RedCapstone/RedCapstone3.png"
    let RedCapstone4 = "images/sequoia/Capstone/Capstone/RedCapstone/RedCapstone4.png"
    let SilverCapstone1 = "images/sequoia/Capstone/Capstone/SilverCapstone/SilverCapstone1.png"
    let SilverCapstone2 = "images/sequoia/Capstone/Capstone/SilverCapstone/SilverCapstone2.png"
    let SilverCapstone3 = "images/sequoia/Capstone/Capstone/SilverCapstone/SilverCapstone3.png"
    let SilverCapstone4 = "images/sequoia/Capstone/Capstone/SilverCapstone/SilverCapstone4.png"

    let InteriorCapstone1 = "images/sequoia/Capstone/Capstone/InteriorCapstone/InteriorCapstone1.png"
    let InteriorCapstone2 = "images/sequoia/Capstone/Capstone/InteriorCapstone/InteriorCapstone2.png"
    let InteriorCapstone3 = "images/sequoia/Capstone/Capstone/InteriorCapstone/InteriorCapstone3.png"
    let InteriorCapstone4 = "images/sequoia/Capstone/Capstone/InteriorCapstone/InteriorCapstone4.png"


    //reference Limited images
    let BlackLimited1 = "images/sequoia/Limited/Limited/BlackLimited/BlackLimited1.png"
    let BlackLimited2 = "images/sequoia/Limited/Limited/BlackLimited/BlackLimited2.png"
    let BlackLimited3 = "images/sequoia/Limited/Limited/BlackLimited/BlackLimited3.png"
    let BlackLimited4 = "images/sequoia/Limited/Limited/BlackLimited/BlackLimited4.png"
    let BlueLimited1 = "images/sequoia/Limited/Limited/BlueLimited/BlueLimited1.png"
    let BlueLimited2 = "images/sequoia/Limited/Limited/BlueLimited/BlueLimited2.png"
    let BlueLimited3 = "images/sequoia/Limited/Limited/BlueLimited/BlueLimited3.png"
    let BlueLimited4 = "images/sequoia/Limited/Limited/BlueLimited/BlueLimited4.png"
    let GreenLimited1 = "images/sequoia/Limited/Limited/GreenLimited/GreenLimited1.png"
    let GreenLimited2 = "images/sequoia/Limited/Limited/GreenLimited/GreenLimited2.png"
    let GreenLimited3 = "images/sequoia/Limited/Limited/GreenLimited/GreenLimited3.png"
    let GreenLimited4 = "images/sequoia/Limited/Limited/GreenLimited/GreenLimited4.png"
    let GreyLimited1 = "images/sequoia/Limited/Limited/GreyLimited/GreyLimited1.png"
    let GreyLimited2 = "images/sequoia/Limited/Limited/GreyLimited/GreyLimited2.png"
    let GreyLimited3 = "images/sequoia/Limited/Limited/GreyLimited/GreyLimited3.png"
    let GreyLimited4 = "images/sequoia/Limited/Limited/GreyLimited/GreyLimited4.png"
    let MesquiteLimited1 = "images/sequoia/Limited/Limited/MesquiteLimited/MesquiteLimited1.png"
    let MesquiteLimited2 = "images/sequoia/Limited/Limited/MesquiteLimited/MesquiteLimited2.png"
    let MesquiteLimited3 = "images/sequoia/Limited/Limited/MesquiteLimited/MesquiteLimited3.png"
    let MesquiteLimited4 = "images/sequoia/Limited/Limited/MesquiteLimited/MesquiteLimited4.png"
    let PearlLimited1 = "images/sequoia/Limited/Limited/PearlLimited/PearlLimited1.png"
    let PearlLimited2 = "images/sequoia/Limited/Limited/PearlLimited/PearlLimited2.png"
    let PearlLimited3 = "images/sequoia/Limited/Limited/PearlLimited/PearlLimited3.png"
    let PearlLimited4 = "images/sequoia/Limited/Limited/PearlLimited/PearlLimited4.png"
    let RedLimited1 = "images/sequoia/Limited/Limited/RedLimited/RedLimited1.png"
    let RedLimited2 = "images/sequoia/Limited/Limited/RedLimited/RedLimited2.png"
    let RedLimited3 = "images/sequoia/Limited/Limited/RedLimited/RedLimited3.png"
    let RedLimited4 = "images/sequoia/Limited/Limited/RedLimited/RedLimited4.png"
    let SilverLimited1 = "images/sequoia/Limited/Limited/SilverLimited/SilverLimited1.png"
    let SilverLimited2 = "images/sequoia/Limited/Limited/SilverLimited/SilverLimited2.png"
    let SilverLimited3 = "images/sequoia/Limited/Limited/SilverLimited/SilverLimited3.png"
    let SilverLimited4 = "images/sequoia/Limited/Limited/SilverLimited/SilverLimited4.png"
    let WhiteLimited1 = "images/sequoia/Limited/Limited/WhiteLimited/WhiteLimited1.png"
    let WhiteLimited2 = "images/sequoia/Limited/Limited/WhiteLimited/WhiteLimited2.png"
    let WhiteLimited3 = "images/sequoia/Limited/Limited/WhiteLimited/WhiteLimited3.png"
    let WhiteLimited4 = "images/sequoia/Limited/Limited/WhiteLimited/WhiteLimited4.png"

    let InteriorLimited1 = "images/sequoia/Limited/Limited/InteriorLimited/InteriorLimited1.png"
    let InteriorLimited2 = "images/sequoia/Limited/Limited/InteriorLimited/InteriorLimited2.png"
    let InteriorLimited3 = "images/sequoia/Limited/Limited/InteriorLimited/InteriorLimited3.png"
    let InteriorLimited4 = "images/sequoia/Limited/Limited/InteriorLimited/InteriorLimited4.png"

    //reference Platinum images
    let BlackPlatinum1 = "images/sequoia/Platinum/Platinum/BlackPlatinum/BlackPlatinum1.png"
    let BlackPlatinum2 = "images/sequoia/Platinum/Platinum/BlackPlatinum/BlackPlatinum2.png"
    let BlackPlatinum3 = "images/sequoia/Platinum/Platinum/BlackPlatinum/BlackPlatinum3.png"
    let BlackPlatinum4 = "images/sequoia/Platinum/Platinum/BlackPlatinum/BlackPlatinum4.png"
    let BluePlatinum1 = "images/sequoia/Platinum/Platinum/BluePlatinum/BluePlatinum1.png"
    let BluePlatinum2 = "images/sequoia/Platinum/Platinum/BluePlatinum/BluePlatinum2.png"
    let BluePlatinum3 = "images/sequoia/Platinum/Platinum/BluePlatinum/BluePlatinum3.png"
    let BluePlatinum4 = "images/sequoia/Platinum/Platinum/BluePlatinum/BluePlatinum4.png"
    let GreyPlatinum1 = "images/sequoia/Platinum/Platinum/GreyPlatinum/GreyPlatinum1.png"
    let GreyPlatinum2 = "images/sequoia/Platinum/Platinum/GreyPlatinum/GreyPlatinum2.png"
    let GreyPlatinum3 = "images/sequoia/Platinum/Platinum/GreyPlatinum/GreyPlatinum3.png"
    let GreyPlatinum4 = "images/sequoia/Platinum/Platinum/GreyPlatinum/GreyPlatinum4.png"
    let PearlPlatinum1 = "images/sequoia/Platinum/Platinum/PearlPlatinum/PearlPlatinum1.png"
    let PearlPlatinum2 = "images/sequoia/Platinum/Platinum/PearlPlatinum/PearlPlatinum2.png"
    let PearlPlatinum3 = "images/sequoia/Platinum/Platinum/PearlPlatinum/PearlPlatinum3.png"
    let PearlPlatinum4 = "images/sequoia/Platinum/Platinum/PearlPlatinum/PearlPlatinum4.png"
    let RedPlatinum1 = "images/sequoia/Platinum/Platinum/RedPlatinum/RedPlatinum1.png"
    let RedPlatinum2 = "images/sequoia/Platinum/Platinum/RedPlatinum/RedPlatinum2.png"
    let RedPlatinum3 = "images/sequoia/Platinum/Platinum/RedPlatinum/RedPlatinum3.png"
    let RedPlatinum4 = "images/sequoia/Platinum/Platinum/RedPlatinum/RedPlatinum4.png"
    let SilverPlatinum1 = "images/sequoia/Platinum/Platinum/SilverPlatinum/SilverPlatinum1.png"
    let SilverPlatinum2 = "images/sequoia/Platinum/Platinum/SilverPlatinum/SilverPlatinum2.png"
    let SilverPlatinum3 = "images/sequoia/Platinum/Platinum/SilverPlatinum/SilverPlatinum3.png"
    let SilverPlatinum4 = "images/sequoia/Platinum/Platinum/SilverPlatinum/SilverPlatinum4.png"

    let InteriorPlatinum1 = "images/sequoia/Platinum/Platinum/InteriorPlatinum/InteriorPlatinum1.png"
    let InteriorPlatinum2 = "images/sequoia/Platinum/Platinum/InteriorPlatinum/InteriorPlatinum2.png"
    let InteriorPlatinum3 = "images/sequoia/Platinum/Platinum/InteriorPlatinum/InteriorPlatinum3.png"
    let InteriorPlatinum4 = "images/sequoia/Platinum/Platinum/InteriorPlatinum/InteriorPlatinum4.png"

    //reference SR5 images
    let BlackSR51 = "images/sequoia/SR5/SR5/BlackSR5/BlackSR51.png"
    let BlackSR52 = "images/sequoia/SR5/SR5/BlackSR5/BlackSR52.png"
    let BlackSR53 = "images/sequoia/SR5/SR5/BlackSR5/BlackSR53.png"
    let BlackSR54 = "images/sequoia/SR5/SR5/BlackSR5/BlackSR54.png"
    let BlueSR51 = "images/sequoia/SR5/SR5/BlueSR5/BlueSR51.png"
    let BlueSR52 = "images/sequoia/SR5/SR5/BlueSR5/BlueSR52.png"
    let BlueSR53 = "images/sequoia/SR5/SR5/BlueSR5/BlueSR53.png"
    let BlueSR54 = "images/sequoia/SR5/SR5/BlueSR5/BlueSR54.png"
    let GreySR51 = "images/sequoia/SR5/SR5/GreySR5/GreySR51.png"
    let GreySR52 = "images/sequoia/SR5/SR5/GreySR5/GreySR52.png"
    let GreySR53 = "images/sequoia/SR5/SR5/GreySR5/GreySR53.png"
    let GreySR54 = "images/sequoia/SR5/SR5/GreySR5/GreySR54.png"
    let GreenSR51 = "images/sequoia/SR5/SR5/GreenSR5/GreenSR51.png"
    let GreenSR52 = "images/sequoia/SR5/SR5/GreenSR5/GreenSR52.png"
    let GreenSR53 = "images/sequoia/SR5/SR5/GreenSR5/GreenSR53.png"
    let GreenSR54 = "images/sequoia/SR5/SR5/GreenSR5/GreenSR54.png"
    let RedSR51 = "images/sequoia/SR5/SR5/RedSR5/RedSR51.png"
    let RedSR52 = "images/sequoia/SR5/SR5/RedSR5/RedSR52.png"
    let RedSR53 = "images/sequoia/SR5/SR5/RedSR5/RedSR53.png"
    let RedSR54 = "images/sequoia/SR5/SR5/RedSR5/RedSR54.png"
    let RockSR51 = "images/sequoia/SR5/SR5/RockSR5/RockSR51.png"
    let RockSR52 = "images/sequoia/SR5/SR5/RockSR5/RockSR52.png"
    let RockSR53 = "images/sequoia/SR5/SR5/RockSR5/RockSR53.png"
    let RockSR54 = "images/sequoia/SR5/SR5/RockSR5/RockSR54.png"
    let SilverSR51 = "images/sequoia/SR5/SR5/SilverSR5/SilverSR51.png"
    let SilverSR52 = "images/sequoia/SR5/SR5/SilverSR5/SilverSR52.png"
    let SilverSR53 = "images/sequoia/SR5/SR5/SilverSR5/SilverSR53.png"
    let SilverSR54 = "images/sequoia/SR5/SR5/SilverSR5/SilverSR54.png"
    let WhiteSR51 = "images/sequoia/SR5/SR5/WhiteSR5/WhiteSR51.png"
    let WhiteSR52 = "images/sequoia/SR5/SR5/WhiteSR5/WhiteSR52.png"
    let WhiteSR53 = "images/sequoia/SR5/SR5/WhiteSR5/WhiteSR53.png"
    let WhiteSR54 = "images/sequoia/SR5/SR5/WhiteSR5/WhiteSR54.png"

    let InteriorSR51 = "images/sequoia/SR5/SR5/InteriorSR5/InteriorSR51.png"
    let InteriorSR52 = "images/sequoia/SR5/SR5/InteriorSR5/InteriorSR52.png"
    let InteriorSR53 = "images/sequoia/SR5/SR5/InteriorSR5/InteriorSR53.png"
    let InteriorSR54 = "images/sequoia/SR5/SR5/InteriorSR5/InteriorSR54.png"

    //reference TRDPRO images
    let BlackTRDPRO1 = "images/sequoia/TRDPRO/TRDPRO/BlackTRDPRO/BlackTRDPRO1.png"
    let BlackTRDPRO2 = "images/sequoia/TRDPRO/TRDPRO/BlackTRDPRO/BlackTRDPRO2.png"
    let BlackTRDPRO3 = "images/sequoia/TRDPRO/TRDPRO/BlackTRDPRO/BlackTRDPRO3.png"
    let BlackTRDPRO4 = "images/sequoia/TRDPRO/TRDPRO/BlackTRDPRO/BlackTRDPRO4.png"
    let GreyTRDPRO1 = "images/sequoia/TRDPRO/TRDPRO/GreyTRDPRO/GreyTRDPRO1.png"
    let GreyTRDPRO2 = "images/sequoia/TRDPRO/TRDPRO/GreyTRDPRO/GreyTRDPRO2.png"
    let GreyTRDPRO3 = "images/sequoia/TRDPRO/TRDPRO/GreyTRDPRO/GreyTRDPRO3.png"
    let GreyTRDPRO4 = "images/sequoia/TRDPRO/TRDPRO/GreyTRDPRO/GreyTRDPRO4.png"
    let SolarTRDPRO1 = "images/sequoia/TRDPRO/TRDPRO/SolarTRDPRO/SolarTRDPRO1.png"
    let SolarTRDPRO2 = "images/sequoia/TRDPRO/TRDPRO/SolarTRDPRO/SolarTRDPRO2.png"
    let SolarTRDPRO3 = "images/sequoia/TRDPRO/TRDPRO/SolarTRDPRO/SolarTRDPRO3.png"
    let SolarTRDPRO4 = "images/sequoia/TRDPRO/TRDPRO/SolarTRDPRO/SolarTRDPRO4.png"
    let WhiteTRDPRO1 = "images/sequoia/TRDPRO/TRDPRO/WhiteTRDPRO/WhiteTRDPRO1.png"
    let WhiteTRDPRO2 = "images/sequoia/TRDPRO/TRDPRO/WhiteTRDPRO/WhiteTRDPRO2.png"
    let WhiteTRDPRO3 = "images/sequoia/TRDPRO/TRDPRO/WhiteTRDPRO/WhiteTRDPRO3.png"
    let WhiteTRDPRO4 = "images/sequoia/TRDPRO/TRDPRO/WhiteTRDPRO/WhiteTRDPRO4.png"

    let InteriorTRDPRO1 = "images/sequoia/TRDPRO/TRDPRO/InteriorTRDPRO/InteriorTRDPRO1.png"
    let InteriorTRDPRO2 = "images/sequoia/TRDPRO/TRDPRO/InteriorTRDPRO/InteriorTRDPRO2.png"
    let InteriorTRDPRO3 = "images/sequoia/TRDPRO/TRDPRO/InteriorTRDPRO/InteriorTRDPRO3.png"
    let InteriorTRDPRO4 = "images/sequoia/TRDPRO/TRDPRO/InteriorTRDPRO/InteriorTRDPRO4.png"
    
    const grades = [
        {name: "SR5", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Army Green", "Supersonic Red","Rock", "Celestial Silver Metallic", "Ice Cap"], src: [BlackSR51, BlueSR51, GreySR51, GreenSR51, RedSR51,RockSR51, SilverSR51, WhiteSR51, BlackSR52, BlueSR52, GreySR52, GreenSR52, RedSR52,RockSR52, SilverSR52, WhiteSR52, BlackSR53, BlueSR53, GreySR53, GreenSR53, RedSR53,RockSR53, SilverSR53, WhiteSR53, BlackSR54, BlueSR54, GreySR54, GreenSR54, RedSR54,RockSR54, SilverSR54, WhiteSR54, InteriorSR51, InteriorSR52, InteriorSR53, InteriorSR54], price: 205000, photos: 8},
        {name: "Limited", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic", "Army Green", "Smoked Mesquite", "Wind Chill Pearl", "Supersonic Red", "Celestial Silver Metallic", "White"], src: [BlackLimited1, BlueLimited1, GreyLimited1, GreenLimited1, MesquiteLimited1, PearlLimited1, RedLimited1, SilverLimited1, WhiteLimited1, BlackLimited2, BlueLimited2, GreyLimited2, GreenLimited2, MesquiteLimited2, PearlLimited2, RedLimited2, SilverLimited2, WhiteLimited2, BlackLimited3, BlueLimited3, GreyLimited3, GreenLimited3, MesquiteLimited3, PearlLimited3, RedLimited3, SilverLimited3, WhiteLimited3, BlackLimited4, BlueLimited4, GreyLimited4, GreenLimited4, MesquiteLimited4, PearlLimited4, RedLimited4, SilverLimited4, WhiteLimited4, InteriorLimited1, InteriorLimited2, InteriorLimited3, InteriorLimited4], price: 225000, photos: 9},
        {name: "Platinum", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl", "Supersonic Red", "Celestial Silver Metallic"], src: [BlackPlatinum1, BluePlatinum1, GreyPlatinum1, PearlPlatinum1, RedPlatinum1, SilverPlatinum1, BlackPlatinum2, BluePlatinum2, GreyPlatinum2, PearlPlatinum2, RedPlatinum2, SilverPlatinum2, BlackPlatinum3, BluePlatinum3, GreyPlatinum3, PearlPlatinum3, RedPlatinum3, SilverPlatinum3, BlackPlatinum4, BluePlatinum4, GreyPlatinum4, PearlPlatinum4, RedPlatinum4, SilverPlatinum4, InteriorPlatinum1, InteriorPlatinum2, InteriorPlatinum3, InteriorPlatinum4], price: 245000, photos: 6},
        {name: "TRD PRO", colors: ["Midnight Black Metallic","Magnetic Grey Metallic","Solar Octane", "Ice Cap"], src: [BlackTRDPRO1, GreyTRDPRO1, SolarTRDPRO1, WhiteTRDPRO1, BlackTRDPRO2, GreyTRDPRO2, SolarTRDPRO2, WhiteTRDPRO2, BlackTRDPRO3, GreyTRDPRO3, SolarTRDPRO3, WhiteTRDPRO3, BlackTRDPRO4, GreyTRDPRO4, SolarTRDPRO4, WhiteTRDPRO4, InteriorTRDPRO1, InteriorTRDPRO2, InteriorTRDPRO3, InteriorTRDPRO4], price: 265000, photos: 4},
        {name: "Capstone", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic"], src: [BlackCapstone1, BlueCapstone1, GreyCapstone1, PearlCapstone1, RedCapstone1, SilverCapstone1, BlackCapstone2, BlueCapstone2, GreyCapstone2, PearlCapstone2, RedCapstone2, SilverCapstone2, BlackCapstone3, BlueCapstone3, GreyCapstone3, PearlCapstone3, RedCapstone3, SilverCapstone3, BlackCapstone4, BlueCapstone4, GreyCapstone4, PearlCapstone4, RedCapstone4, SilverCapstone4, InteriorCapstone1, InteriorCapstone2, InteriorCapstone3, InteriorCapstone4], price: 265000, photos: 6},
    ]

    const [price, setPrice] = useState(0);
    const [activeGrade, setActiveGrade] = useState(["SR5",32000, 0]);
    const [activeColor, setActiveColor] = useState(["Midnight Black Metallic",100, 0]);
    const [activePicture, setActivePicture] = useState(0);
    const [selectionStage, setSelectionStage] = useState(0);
    const [mainImageSrc, setMainImageSrc] = useState(grades[activeGrade[2]].src[activeColor[2] + (grades[activeGrade[2]].photos*activePicture)])
    

   //if over images then show interior
   //problem is I can't add to formula because images are all the same 
   //what I need is that if the active picture is more than 4 (or 3?) then the url needs to just be the last 4 images 
   //aka whole formula + active picture - 4 (or 3) 


    //update price
    useEffect(() => {
        if (price !== grades[activeGrade[2]]){setPrice(grades[activeGrade[2]].price)}
        
        if (activePicture > 3){
            console.log(grades[activeGrade[2]].src.length)
            setMainImageSrc(grades[activeGrade[2]].src[grades[activeGrade[2]].src.length - 8 + activePicture]);
        } else {
            setMainImageSrc(grades[activeGrade[2]].src[activeColor[2] + (grades[activeGrade[2]].photos*activePicture)]);
        }
    });
    if (isBrowser && window.innerWidth > 1050){
        // desktop page
  return (
      <Layout title="Build Your Sequoia | Glacier International" hideFooter={true} invertNav={true}>
        <Helmet>
            <title>Build Your 2023 Toyota Sequoia | Customise Hybrid SUV</title>
            <meta name='description' content='The 2023 Toyota Sequoia is the ideal hybrid SUV for luxury design, strength, and efficiency. Available for pre-order in NZ. Experience Toyota Sequoia Today!' />
        </Helmet>
        <Main style={pageStyles}>
        <PriceFinanceBar price={price}/>
        <Row>
            <MainImage src={mainImageSrc} activePicture={activePicture} updatePicture={(newPicture) => {setActivePicture(newPicture)}}/>
            <FeatureBar grades={grades} activeGrade={activeGrade} activeColor={activeColor} updateActiveColor={(color) => {setActiveColor(color);}} updateActiveGrade={(grade) => {setActiveGrade(grade); setActiveColor(["Midnight Black Metallic",100, 0])}} price={price}/>
        </Row>
        </Main>
    </Layout>
  )
    } else if (isBrowser && window.innerWidth < 1050) {
        // mobile page
        return (
            <Layout title="Build Your Sequoia | Glacier International" hideFooter={true} invertNav={true}>
                <Main style={pageStyles}>
                    <MainImage src={mainImageSrc} activePicture={activePicture} updatePicture={(newPicture) => {setActivePicture(newPicture)}}/>
                    <PriceFinanceBar price={price}/>
                    <MobileSelectionTab selectionStage={selectionStage} updateSelectionStage={(newStageNumber) => {setSelectionStage(newStageNumber)}} activeGrade={activeGrade}/>
                    <MobileFeatureSection price={price} model="Sequoia" selectionStage={selectionStage} grades={grades} activeGrade={activeGrade} activeColor={activeColor} updateActiveColor={(color) => {setActiveColor(color);}} updateActiveGrade={(grade) => {setActiveGrade(grade); setActiveColor(["Midnight Black Metallic",100, 0])}} />
                </Main>
            </Layout>
        )
    } else { return (
        <div>Loading...</div>
    )}
}

export default IndexPage