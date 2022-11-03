import React, {useState, useEffect} from "react"
import {Helmet} from 'react-helmet'
import styled from '@emotion/styled';
import Layout from "../components/layout"

import PriceFinanceBar from "../components/buildMyTundra/priceFinanceBar"
import MainImage from "../components/buildMyTundra/mainImage"
import FeatureBar from "../components/buildMyTundra/sequioaFeatureBar";
import MobileFeatureSection from "../components/buildMyTundra/mobileFeatureSection";
import MobileSelectionTab from "../components/buildMyTundra/mobileSelectionTab";

//import Capstone images
import BlackCapstone1 from "../images/sequoia/Capstone/Capstone/BlackCapstone/BlackCapstone1.png"
import BlackCapstone2 from "../images/sequoia/Capstone/Capstone/BlackCapstone/BlackCapstone2.png"
import BlackCapstone3 from "../images/sequoia/Capstone/Capstone/BlackCapstone/BlackCapstone3.png"
import BlackCapstone4 from "../images/sequoia/Capstone/Capstone/BlackCapstone/BlackCapstone4.png"
import BlueCapstone1 from "../images/sequoia/Capstone/Capstone/BlueCapstone/BlueCapstone1.png"
import BlueCapstone2 from "../images/sequoia/Capstone/Capstone/BlueCapstone/BlueCapstone2.png"
import BlueCapstone3 from "../images/sequoia/Capstone/Capstone/BlueCapstone/BlueCapstone3.png"
import BlueCapstone4 from "../images/sequoia/Capstone/Capstone/BlueCapstone/BlueCapstone4.png"
import GreyCapstone1 from "../images/sequoia/Capstone/Capstone/GreyCapstone/GreyCapstone1.png"
import GreyCapstone2 from "../images/sequoia/Capstone/Capstone/GreyCapstone/GreyCapstone2.png"
import GreyCapstone3 from "../images/sequoia/Capstone/Capstone/GreyCapstone/GreyCapstone3.png"
import GreyCapstone4 from "../images/sequoia/Capstone/Capstone/GreyCapstone/GreyCapstone4.png"
import PearlCapstone1 from "../images/sequoia/Capstone/Capstone/PearlCapstone/PearlCapstone1.png"
import PearlCapstone2 from "../images/sequoia/Capstone/Capstone/PearlCapstone/PearlCapstone2.png"
import PearlCapstone3 from "../images/sequoia/Capstone/Capstone/PearlCapstone/PearlCapstone3.png"
import PearlCapstone4 from "../images/sequoia/Capstone/Capstone/PearlCapstone/PearlCapstone4.png"
import RedCapstone1 from "../images/sequoia/Capstone/Capstone/RedCapstone/RedCapstone1.png"
import RedCapstone2 from "../images/sequoia/Capstone/Capstone/RedCapstone/RedCapstone2.png"
import RedCapstone3 from "../images/sequoia/Capstone/Capstone/RedCapstone/RedCapstone3.png"
import RedCapstone4 from "../images/sequoia/Capstone/Capstone/RedCapstone/RedCapstone4.png"
import SilverCapstone1 from "../images/sequoia/Capstone/Capstone/SilverCapstone/SilverCapstone1.png"
import SilverCapstone2 from "../images/sequoia/Capstone/Capstone/SilverCapstone/SilverCapstone2.png"
import SilverCapstone3 from "../images/sequoia/Capstone/Capstone/SilverCapstone/SilverCapstone3.png"
import SilverCapstone4 from "../images/sequoia/Capstone/Capstone/SilverCapstone/SilverCapstone4.png"

import InteriorCapstone1 from "../images/sequoia/Capstone/Capstone/InteriorCapstone/InteriorCapstone1.png"
import InteriorCapstone2 from "../images/sequoia/Capstone/Capstone/InteriorCapstone/InteriorCapstone2.png"
import InteriorCapstone3 from "../images/sequoia/Capstone/Capstone/InteriorCapstone/InteriorCapstone3.png"
import InteriorCapstone4 from "../images/sequoia/Capstone/Capstone/InteriorCapstone/InteriorCapstone4.png"


//import Limited images
import BlackLimited1 from "../images/sequoia/Limited/Limited/BlackLimited/BlackLimited1.png"
import BlackLimited2 from "../images/sequoia/Limited/Limited/BlackLimited/BlackLimited2.png"
import BlackLimited3 from "../images/sequoia/Limited/Limited/BlackLimited/BlackLimited3.png"
import BlackLimited4 from "../images/sequoia/Limited/Limited/BlackLimited/BlackLimited4.png"
import BlueLimited1 from "../images/sequoia/Limited/Limited/BlueLimited/BlueLimited1.png"
import BlueLimited2 from "../images/sequoia/Limited/Limited/BlueLimited/BlueLimited2.png"
import BlueLimited3 from "../images/sequoia/Limited/Limited/BlueLimited/BlueLimited3.png"
import BlueLimited4 from "../images/sequoia/Limited/Limited/BlueLimited/BlueLimited4.png"
import GreenLimited1 from "../images/sequoia/Limited/Limited/GreenLimited/GreenLimited1.png"
import GreenLimited2 from "../images/sequoia/Limited/Limited/GreenLimited/GreenLimited2.png"
import GreenLimited3 from "../images/sequoia/Limited/Limited/GreenLimited/GreenLimited3.png"
import GreenLimited4 from "../images/sequoia/Limited/Limited/GreenLimited/GreenLimited4.png"
import GreyLimited1 from "../images/sequoia/Limited/Limited/GreyLimited/GreyLimited1.png"
import GreyLimited2 from "../images/sequoia/Limited/Limited/GreyLimited/GreyLimited2.png"
import GreyLimited3 from "../images/sequoia/Limited/Limited/GreyLimited/GreyLimited3.png"
import GreyLimited4 from "../images/sequoia/Limited/Limited/GreyLimited/GreyLimited4.png"
import MesquiteLimited1 from "../images/sequoia/Limited/Limited/MesquiteLimited/MesquiteLimited1.png"
import MesquiteLimited2 from "../images/sequoia/Limited/Limited/MesquiteLimited/MesquiteLimited2.png"
import MesquiteLimited3 from "../images/sequoia/Limited/Limited/MesquiteLimited/MesquiteLimited3.png"
import MesquiteLimited4 from "../images/sequoia/Limited/Limited/MesquiteLimited/MesquiteLimited4.png"
import PearlLimited1 from "../images/sequoia/Limited/Limited/PearlLimited/PearlLimited1.png"
import PearlLimited2 from "../images/sequoia/Limited/Limited/PearlLimited/PearlLimited2.png"
import PearlLimited3 from "../images/sequoia/Limited/Limited/PearlLimited/PearlLimited3.png"
import PearlLimited4 from "../images/sequoia/Limited/Limited/PearlLimited/PearlLimited4.png"
import RedLimited1 from "../images/sequoia/Limited/Limited/RedLimited/RedLimited1.png"
import RedLimited2 from "../images/sequoia/Limited/Limited/RedLimited/RedLimited2.png"
import RedLimited3 from "../images/sequoia/Limited/Limited/RedLimited/RedLimited3.png"
import RedLimited4 from "../images/sequoia/Limited/Limited/RedLimited/RedLimited4.png"
import SilverLimited1 from "../images/sequoia/Limited/Limited/SilverLimited/SilverLimited1.png"
import SilverLimited2 from "../images/sequoia/Limited/Limited/SilverLimited/SilverLimited2.png"
import SilverLimited3 from "../images/sequoia/Limited/Limited/SilverLimited/SilverLimited3.png"
import SilverLimited4 from "../images/sequoia/Limited/Limited/SilverLimited/SilverLimited4.png"
import WhiteLimited1 from "../images/sequoia/Limited/Limited/WhiteLimited/WhiteLimited1.png"
import WhiteLimited2 from "../images/sequoia/Limited/Limited/WhiteLimited/WhiteLimited2.png"
import WhiteLimited3 from "../images/sequoia/Limited/Limited/WhiteLimited/WhiteLimited3.png"
import WhiteLimited4 from "../images/sequoia/Limited/Limited/WhiteLimited/WhiteLimited4.png"

import InteriorLimited1 from "../images/sequoia/Limited/Limited/InteriorLimited/InteriorLimited1.png"
import InteriorLimited2 from "../images/sequoia/Limited/Limited/InteriorLimited/InteriorLimited2.png"
import InteriorLimited3 from "../images/sequoia/Limited/Limited/InteriorLimited/InteriorLimited3.png"
import InteriorLimited4 from "../images/sequoia/Limited/Limited/InteriorLimited/InteriorLimited4.png"

//import Platinum images
import BlackPlatinum1 from "../images/sequoia/Platinum/Platinum/BlackPlatinum/BlackPlatinum1.png"
import BlackPlatinum2 from "../images/sequoia/Platinum/Platinum/BlackPlatinum/BlackPlatinum2.png"
import BlackPlatinum3 from "../images/sequoia/Platinum/Platinum/BlackPlatinum/BlackPlatinum3.png"
import BlackPlatinum4 from "../images/sequoia/Platinum/Platinum/BlackPlatinum/BlackPlatinum4.png"
import BluePlatinum1 from "../images/sequoia/Platinum/Platinum/BluePlatinum/BluePlatinum1.png"
import BluePlatinum2 from "../images/sequoia/Platinum/Platinum/BluePlatinum/BluePlatinum2.png"
import BluePlatinum3 from "../images/sequoia/Platinum/Platinum/BluePlatinum/BluePlatinum3.png"
import BluePlatinum4 from "../images/sequoia/Platinum/Platinum/BluePlatinum/BluePlatinum4.png"
import GreyPlatinum1 from "../images/sequoia/Platinum/Platinum/GreyPlatinum/GreyPlatinum1.png"
import GreyPlatinum2 from "../images/sequoia/Platinum/Platinum/GreyPlatinum/GreyPlatinum2.png"
import GreyPlatinum3 from "../images/sequoia/Platinum/Platinum/GreyPlatinum/GreyPlatinum3.png"
import GreyPlatinum4 from "../images/sequoia/Platinum/Platinum/GreyPlatinum/GreyPlatinum4.png"
import PearlPlatinum1 from "../images/sequoia/Platinum/Platinum/PearlPlatinum/PearlPlatinum1.png"
import PearlPlatinum2 from "../images/sequoia/Platinum/Platinum/PearlPlatinum/PearlPlatinum2.png"
import PearlPlatinum3 from "../images/sequoia/Platinum/Platinum/PearlPlatinum/PearlPlatinum3.png"
import PearlPlatinum4 from "../images/sequoia/Platinum/Platinum/PearlPlatinum/PearlPlatinum4.png"
import RedPlatinum1 from "../images/sequoia/Platinum/Platinum/RedPlatinum/RedPlatinum1.png"
import RedPlatinum2 from "../images/sequoia/Platinum/Platinum/RedPlatinum/RedPlatinum2.png"
import RedPlatinum3 from "../images/sequoia/Platinum/Platinum/RedPlatinum/RedPlatinum3.png"
import RedPlatinum4 from "../images/sequoia/Platinum/Platinum/RedPlatinum/RedPlatinum4.png"
import SilverPlatinum1 from "../images/sequoia/Platinum/Platinum/SilverPlatinum/SilverPlatinum1.png"
import SilverPlatinum2 from "../images/sequoia/Platinum/Platinum/SilverPlatinum/SilverPlatinum2.png"
import SilverPlatinum3 from "../images/sequoia/Platinum/Platinum/SilverPlatinum/SilverPlatinum3.png"
import SilverPlatinum4 from "../images/sequoia/Platinum/Platinum/SilverPlatinum/SilverPlatinum4.png"

import InteriorPlatinum1 from "../images/sequoia/Platinum/Platinum/InteriorPlatinum/InteriorPlatinum1.png"
import InteriorPlatinum2 from "../images/sequoia/Platinum/Platinum/InteriorPlatinum/InteriorPlatinum2.png"
import InteriorPlatinum3 from "../images/sequoia/Platinum/Platinum/InteriorPlatinum/InteriorPlatinum3.png"
import InteriorPlatinum4 from "../images/sequoia/Platinum/Platinum/InteriorPlatinum/InteriorPlatinum4.png"

//import SR5 images
import BlackSR51 from "../images/sequoia/SR5/SR5/BlackSR5/BlackSR51.png"
import BlackSR52 from "../images/sequoia/SR5/SR5/BlackSR5/BlackSR52.png"
import BlackSR53 from "../images/sequoia/SR5/SR5/BlackSR5/BlackSR53.png"
import BlackSR54 from "../images/sequoia/SR5/SR5/BlackSR5/BlackSR54.png"
import BlueSR51 from "../images/sequoia/SR5/SR5/BlueSR5/BlueSR51.png"
import BlueSR52 from "../images/sequoia/SR5/SR5/BlueSR5/BlueSR52.png"
import BlueSR53 from "../images/sequoia/SR5/SR5/BlueSR5/BlueSR53.png"
import BlueSR54 from "../images/sequoia/SR5/SR5/BlueSR5/BlueSR54.png"
import GreySR51 from "../images/sequoia/SR5/SR5/GreySR5/GreySR51.png"
import GreySR52 from "../images/sequoia/SR5/SR5/GreySR5/GreySR52.png"
import GreySR53 from "../images/sequoia/SR5/SR5/GreySR5/GreySR53.png"
import GreySR54 from "../images/sequoia/SR5/SR5/GreySR5/GreySR54.png"
import GreenSR51 from "../images/sequoia/SR5/SR5/GreenSR5/GreenSR51.png"
import GreenSR52 from "../images/sequoia/SR5/SR5/GreenSR5/GreenSR52.png"
import GreenSR53 from "../images/sequoia/SR5/SR5/GreenSR5/GreenSR53.png"
import GreenSR54 from "../images/sequoia/SR5/SR5/GreenSR5/GreenSR54.png"
import RedSR51 from "../images/sequoia/SR5/SR5/RedSR5/RedSR51.png"
import RedSR52 from "../images/sequoia/SR5/SR5/RedSR5/RedSR52.png"
import RedSR53 from "../images/sequoia/SR5/SR5/RedSR5/RedSR53.png"
import RedSR54 from "../images/sequoia/SR5/SR5/RedSR5/RedSR54.png"
import RockSR51 from "../images/sequoia/SR5/SR5/RockSR5/RockSR51.png"
import RockSR52 from "../images/sequoia/SR5/SR5/RockSR5/RockSR52.png"
import RockSR53 from "../images/sequoia/SR5/SR5/RockSR5/RockSR53.png"
import RockSR54 from "../images/sequoia/SR5/SR5/RockSR5/RockSR54.png"
import SilverSR51 from "../images/sequoia/SR5/SR5/SilverSR5/SilverSR51.png"
import SilverSR52 from "../images/sequoia/SR5/SR5/SilverSR5/SilverSR52.png"
import SilverSR53 from "../images/sequoia/SR5/SR5/SilverSR5/SilverSR53.png"
import SilverSR54 from "../images/sequoia/SR5/SR5/SilverSR5/SilverSR54.png"
import WhiteSR51 from "../images/sequoia/SR5/SR5/WhiteSR5/WhiteSR51.png"
import WhiteSR52 from "../images/sequoia/SR5/SR5/WhiteSR5/WhiteSR52.png"
import WhiteSR53 from "../images/sequoia/SR5/SR5/WhiteSR5/WhiteSR53.png"
import WhiteSR54 from "../images/sequoia/SR5/SR5/WhiteSR5/WhiteSR54.png"

import InteriorSR51 from "../images/sequoia/SR5/SR5/InteriorSR5/InteriorSR51.png"
import InteriorSR52 from "../images/sequoia/SR5/SR5/InteriorSR5/InteriorSR52.png"
import InteriorSR53 from "../images/sequoia/SR5/SR5/InteriorSR5/InteriorSR53.png"
import InteriorSR54 from "../images/sequoia/SR5/SR5/InteriorSR5/InteriorSR54.png"

//Import TRDPRO images
import BlackTRDPRO1 from "../images/sequoia/TRDPRO/TRDPRO/BlackTRDPRO/BlackTRDPRO1.png"
import BlackTRDPRO2 from "../images/sequoia/TRDPRO/TRDPRO/BlackTRDPRO/BlackTRDPRO2.png"
import BlackTRDPRO3 from "../images/sequoia/TRDPRO/TRDPRO/BlackTRDPRO/BlackTRDPRO3.png"
import BlackTRDPRO4 from "../images/sequoia/TRDPRO/TRDPRO/BlackTRDPRO/BlackTRDPRO4.png"
import GreyTRDPRO1 from "../images/sequoia/TRDPRO/TRDPRO/GreyTRDPRO/GreyTRDPRO1.png"
import GreyTRDPRO2 from "../images/sequoia/TRDPRO/TRDPRO/GreyTRDPRO/GreyTRDPRO2.png"
import GreyTRDPRO3 from "../images/sequoia/TRDPRO/TRDPRO/GreyTRDPRO/GreyTRDPRO3.png"
import GreyTRDPRO4 from "../images/sequoia/TRDPRO/TRDPRO/GreyTRDPRO/GreyTRDPRO4.png"
import SolarTRDPRO1 from "../images/sequoia/TRDPRO/TRDPRO/SolarTRDPRO/SolarTRDPRO1.png"
import SolarTRDPRO2 from "../images/sequoia/TRDPRO/TRDPRO/SolarTRDPRO/SolarTRDPRO2.png"
import SolarTRDPRO3 from "../images/sequoia/TRDPRO/TRDPRO/SolarTRDPRO/SolarTRDPRO3.png"
import SolarTRDPRO4 from "../images/sequoia/TRDPRO/TRDPRO/SolarTRDPRO/SolarTRDPRO4.png"
import WhiteTRDPRO1 from "../images/sequoia/TRDPRO/TRDPRO/WhiteTRDPRO/WhiteTRDPRO1.png"
import WhiteTRDPRO2 from "../images/sequoia/TRDPRO/TRDPRO/WhiteTRDPRO/WhiteTRDPRO2.png"
import WhiteTRDPRO3 from "../images/sequoia/TRDPRO/TRDPRO/WhiteTRDPRO/WhiteTRDPRO3.png"
import WhiteTRDPRO4 from "../images/sequoia/TRDPRO/TRDPRO/WhiteTRDPRO/WhiteTRDPRO4.png"

import InteriorTRDPRO1 from "../images/sequoia/TRDPRO/TRDPRO/InteriorTRDPRO/InteriorTRDPRO1.png"
import InteriorTRDPRO2 from "../images/sequoia/TRDPRO/TRDPRO/InteriorTRDPRO/InteriorTRDPRO2.png"
import InteriorTRDPRO3 from "../images/sequoia/TRDPRO/TRDPRO/InteriorTRDPRO/InteriorTRDPRO3.png"
import InteriorTRDPRO4 from "../images/sequoia/TRDPRO/TRDPRO/InteriorTRDPRO/InteriorTRDPRO4.png"

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
    const [activePicture, setActivePicture] = useState(1);
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