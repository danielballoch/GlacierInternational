import React, {useState, useEffect} from "react"
import {Helmet} from 'react-helmet'
import styled from '@emotion/styled';
import Layout from "../components/layout"

import PriceFinanceBar from "../components/buildMyTundra/priceFinanceBar"
import MainImage from "../components/buildMyTundra/mainImage"
import FeatureBar from "../components/buildMyTundra/featureBar";
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

    //let 1794 images
    let Black17941 = "images/tundra/1794/1794/Black1794/Black17941.png"
    let Black17942 = "images/tundra/1794/1794/Black1794/Black17942.png"
    let Black17943 = "images/tundra/1794/1794/Black1794/Black17943.png"
    let Black17944 = "images/tundra/1794/1794/Black1794/Black17944.png"
    let Blue17941 = "images/tundra/1794/1794/Blue1794/Blue17941.png"
    let Blue17942 = "images/tundra/1794/1794/Blue1794/Blue17942.png"
    let Blue17943 = "images/tundra/1794/1794/Blue1794/Blue17943.png"
    let Blue17944 = "images/tundra/1794/1794/Blue1794/Blue17944.png"
    let Grey17941 = "images/tundra/1794/1794/Grey1794/Grey17941.png"
    let Grey17942 = "images/tundra/1794/1794/Grey1794/Grey17942.png"
    let Grey17943 = "images/tundra/1794/1794/Grey1794/Grey17943.png"
    let Grey17944 = "images/tundra/1794/1794/Grey1794/Grey17944.png"
    let Green17941 = "images/tundra/1794/1794/Green1794/Green17941.png"
    let Green17942 = "images/tundra/1794/1794/Green1794/Green17942.png"
    let Green17943 = "images/tundra/1794/1794/Green1794/Green17943.png"
    let Green17944 = "images/tundra/1794/1794/Green1794/Green17944.png"
    let Mesquite17941 = "images/tundra/1794/1794/Mesquite1794/Mesquite17941.png"
    let Mesquite17942 = "images/tundra/1794/1794/Mesquite1794/Mesquite17942.png"
    let Mesquite17943 = "images/tundra/1794/1794/Mesquite1794/Mesquite17943.png"
    let Mesquite17944 = "images/tundra/1794/1794/Mesquite1794/Mesquite17944.png"
    let Red17941 = "images/tundra/1794/1794/Red1794/Red17941.png"
    let Red17942 = "images/tundra/1794/1794/Red1794/Red17942.png"
    let Red17943 = "images/tundra/1794/1794/Red1794/Red17943.png"
    let Red17944 = "images/tundra/1794/1794/Red1794/Red17944.png"
    let Silver17941 = "images/tundra/1794/1794/Silver1794/Silver17941.png"
    let Silver17942 = "images/tundra/1794/1794/Silver1794/Silver17942.png"
    let Silver17943 = "images/tundra/1794/1794/Silver1794/Silver17943.png"
    let Silver17944 = "images/tundra/1794/1794/Silver1794/Silver17944.png"

    let Black1794Longbed1 = "images/tundra/1794/1794Longbed/Black1794/BlackLongbed17941.png"
    let Black1794Longbed2 = "images/tundra/1794/1794Longbed/Black1794/BlackLongbed17942.png"
    let Black1794Longbed3 = "images/tundra/1794/1794Longbed/Black1794/BlackLongbed17943.png"
    let Black1794Longbed4 = "images/tundra/1794/1794Longbed/Black1794/BlackLongbed17944.png"
    let Blue1794Longbed1 = "images/tundra/1794/1794Longbed/Blue1794/BlueLongbed17941.png"
    let Blue1794Longbed2 = "images/tundra/1794/1794Longbed/Blue1794/BlueLongbed17942.png"
    let Blue1794Longbed3 = "images/tundra/1794/1794Longbed/Blue1794/BlueLongbed17943.png"
    let Blue1794Longbed4 = "images/tundra/1794/1794Longbed/Blue1794/BlueLongbed17944.png"
    let Grey1794Longbed1 = "images/tundra/1794/1794Longbed/Grey1794/GreyLongbed17941.png"
    let Grey1794Longbed2 = "images/tundra/1794/1794Longbed/Grey1794/GreyLongbed17942.png"
    let Grey1794Longbed3 = "images/tundra/1794/1794Longbed/Grey1794/GreyLongbed17943.png"
    let Grey1794Longbed4 = "images/tundra/1794/1794Longbed/Grey1794/GreyLongbed17944.png"
    let Green1794Longbed1 = "images/tundra/1794/1794Longbed/Green1794/GreenLongbed17941.png"
    let Green1794Longbed2 = "images/tundra/1794/1794Longbed/Green1794/GreenLongbed17942.png"
    let Green1794Longbed3 = "images/tundra/1794/1794Longbed/Green1794/GreenLongbed17943.png"
    let Green1794Longbed4 = "images/tundra/1794/1794Longbed/Green1794/GreenLongbed17944.png"
    let Mesquite1794Longbed1 = "images/tundra/1794/1794Longbed/Mesquite1794/MesquiteLongbed17941.png"
    let Mesquite1794Longbed2 = "images/tundra/1794/1794Longbed/Mesquite1794/MesquiteLongbed17942.png"
    let Mesquite1794Longbed3 = "images/tundra/1794/1794Longbed/Mesquite1794/MesquiteLongbed17943.png"
    let Mesquite1794Longbed4 = "images/tundra/1794/1794Longbed/Mesquite1794/MesquiteLongbed17944.png"
    let Red1794Longbed1 = "images/tundra/1794/1794Longbed/Red1794/RedLongbed17941.png"
    let Red1794Longbed2 = "images/tundra/1794/1794Longbed/Red1794/RedLongbed17942.png"
    let Red1794Longbed3 = "images/tundra/1794/1794Longbed/Red1794/RedLongbed17943.png"
    let Red1794Longbed4 = "images/tundra/1794/1794Longbed/Red1794/RedLongbed17944.png"
    let Silver1794Longbed1 = "images/tundra/1794/1794Longbed/Silver1794/SilverLongbed17941.png"
    let Silver1794Longbed2 = "images/tundra/1794/1794Longbed/Silver1794/SilverLongbed17942.png"
    let Silver1794Longbed3 = "images/tundra/1794/1794Longbed/Silver1794/SilverLongbed17943.png"
    let Silver1794Longbed4 = "images/tundra/1794/1794Longbed/Silver1794/SilverLongbed17944.png"

    let Interior17941 = "images/tundra/1794/Interior1794/Interior17941.png"
    let Interior17942 = "images/tundra/1794/Interior1794/Interior17942.png"
    let Interior17943 = "images/tundra/1794/Interior1794/Interior17943.png"
    let Interior17944 = "images/tundra/1794/Interior1794/Interior17944.png"

    //let Capstone Images
    let BlackCapstone1 = "images/tundra/Capstone/Capstone/BlackCapstone/BlackCapstone1.png"
    let BlackCapstone2 = "images/tundra/Capstone/Capstone/BlackCapstone/BlackCapstone2.png"
    let BlackCapstone3 = "images/tundra/Capstone/Capstone/BlackCapstone/BlackCapstone3.png"
    let BlackCapstone4 = "images/tundra/Capstone/Capstone/BlackCapstone/BlackCapstone4.png"
    let BlueCapstone1 = "images/tundra/Capstone/Capstone/BlueCapstone/BlueCapstone1.png"
    let BlueCapstone2 = "images/tundra/Capstone/Capstone/BlueCapstone/BlueCapstone2.png"
    let BlueCapstone3 = "images/tundra/Capstone/Capstone/BlueCapstone/BlueCapstone3.png"
    let BlueCapstone4 = "images/tundra/Capstone/Capstone/BlueCapstone/BlueCapstone4.png"
    let GreyCapstone1 = "images/tundra/Capstone/Capstone/GreyCapstone/GreyCapstone1.png"
    let GreyCapstone2 = "images/tundra/Capstone/Capstone/GreyCapstone/GreyCapstone2.png"
    let GreyCapstone3 = "images/tundra/Capstone/Capstone/GreyCapstone/GreyCapstone3.png"
    let GreyCapstone4 = "images/tundra/Capstone/Capstone/GreyCapstone/GreyCapstone4.png"
    let PearlCapstone1 = "images/tundra/Capstone/Capstone/PearlCapstone/PearlCapstone1.png"
    let PearlCapstone2 = "images/tundra/Capstone/Capstone/PearlCapstone/PearlCapstone2.png"
    let PearlCapstone3 = "images/tundra/Capstone/Capstone/PearlCapstone/PearlCapstone3.png"
    let PearlCapstone4 = "images/tundra/Capstone/Capstone/PearlCapstone/PearlCapstone4.png"
    let RedCapstone1 = "images/tundra/Capstone/Capstone/RedCapstone/RedCapstone1.png"
    let RedCapstone2 = "images/tundra/Capstone/Capstone/RedCapstone/RedCapstone2.png"
    let RedCapstone3 = "images/tundra/Capstone/Capstone/RedCapstone/RedCapstone3.png"
    let RedCapstone4 = "images/tundra/Capstone/Capstone/RedCapstone/RedCapstone4.png"
    let SilverCapstone1 = "images/tundra/Capstone/Capstone/SilverCapstone/SilverCapstone1.png"
    let SilverCapstone2 = "images/tundra/Capstone/Capstone/SilverCapstone/SilverCapstone2.png"
    let SilverCapstone3 = "images/tundra/Capstone/Capstone/SilverCapstone/SilverCapstone3.png"
    let SilverCapstone4 = "images/tundra/Capstone/Capstone/SilverCapstone/SilverCapstone4.png"

    let InteriorCapstone1 = "images/tundra/Capstone/InteriorCapstone/InteriorCapstone1.png"
    let InteriorCapstone2 = "images/tundra/Capstone/InteriorCapstone/InteriorCapstone2.png"
    let InteriorCapstone3 = "images/tundra/Capstone/InteriorCapstone/InteriorCapstone3.png"
    let InteriorCapstone4 = "images/tundra/Capstone/InteriorCapstone/InteriorCapstone4.png"

    //let Limited Images
    let BlackLimited1 = "images/tundra/Limited/Limited/BlackLimited/BlackLimited1.png"
    let BlackLimited2 = "images/tundra/Limited/Limited/BlackLimited/BlackLimited2.png"
    let BlackLimited3 = "images/tundra/Limited/Limited/BlackLimited/BlackLimited3.png"
    let BlackLimited4 = "images/tundra/Limited/Limited/BlackLimited/BlackLimited4.png"
    let BlueLimited1 = "images/tundra/Limited/Limited/BlueLimited/BlueLimited1.png"
    let BlueLimited2 = "images/tundra/Limited/Limited/BlueLimited/BlueLimited2.png"
    let BlueLimited3 = "images/tundra/Limited/Limited/BlueLimited/BlueLimited3.png"
    let BlueLimited4 = "images/tundra/Limited/Limited/BlueLimited/BlueLimited4.png"
    let GreenLimited1 = "images/tundra/Limited/Limited/GreenLimited/GreenLimited1.png"
    let GreenLimited2 = "images/tundra/Limited/Limited/GreenLimited/GreenLimited2.png"
    let GreenLimited3 = "images/tundra/Limited/Limited/GreenLimited/GreenLimited3.png"
    let GreenLimited4 = "images/tundra/Limited/Limited/GreenLimited/GreenLimited4.png"
    let GreyLimited1 = "images/tundra/Limited/Limited/GreyLimited/GreyLimited1.png"
    let GreyLimited2 = "images/tundra/Limited/Limited/GreyLimited/GreyLimited2.png"
    let GreyLimited3 = "images/tundra/Limited/Limited/GreyLimited/GreyLimited3.png"
    let GreyLimited4 = "images/tundra/Limited/Limited/GreyLimited/GreyLimited4.png"
    let MesquiteLimited1 = "images/tundra/Limited/Limited/MesquiteLimited/MesquiteLimited1.png"
    let MesquiteLimited2 = "images/tundra/Limited/Limited/MesquiteLimited/MesquiteLimited2.png"
    let MesquiteLimited3 = "images/tundra/Limited/Limited/MesquiteLimited/MesquiteLimited3.png"
    let MesquiteLimited4 = "images/tundra/Limited/Limited/MesquiteLimited/MesquiteLimited4.png"
    let PearlLimited1 = "images/tundra/Limited/Limited/PearlLimited/PearlLimited1.png"
    let PearlLimited2 = "images/tundra/Limited/Limited/PearlLimited/PearlLimited2.png"
    let PearlLimited3 = "images/tundra/Limited/Limited/PearlLimited/PearlLimited3.png"
    let PearlLimited4 = "images/tundra/Limited/Limited/PearlLimited/PearlLimited4.png"
    let RedLimited1 = "images/tundra/Limited/Limited/RedLimited/RedLimited1.png"
    let RedLimited2 = "images/tundra/Limited/Limited/RedLimited/RedLimited2.png"
    let RedLimited3 = "images/tundra/Limited/Limited/RedLimited/RedLimited3.png"
    let RedLimited4 = "images/tundra/Limited/Limited/RedLimited/RedLimited4.png"
    let RockLimited1 = "images/tundra/Limited/Limited/RockLimited/RockLimited1.png"
    let RockLimited2 = "images/tundra/Limited/Limited/RockLimited/RockLimited2.png"
    let RockLimited3 = "images/tundra/Limited/Limited/RockLimited/RockLimited3.png"
    let RockLimited4 = "images/tundra/Limited/Limited/RockLimited/RockLimited4.png"
    let SilverLimited1 = "images/tundra/Limited/Limited/SilverLimited/SilverLimited1.png"
    let SilverLimited2 = "images/tundra/Limited/Limited/SilverLimited/SilverLimited2.png"
    let SilverLimited3 = "images/tundra/Limited/Limited/SilverLimited/SilverLimited3.png"
    let SilverLimited4 = "images/tundra/Limited/Limited/SilverLimited/SilverLimited4.png"
    let WhiteLimited1 = "images/tundra/Limited/Limited/WhiteLimited/WhiteLimited1.png"
    let WhiteLimited2 = "images/tundra/Limited/Limited/WhiteLimited/WhiteLimited2.png"
    let WhiteLimited3 = "images/tundra/Limited/Limited/WhiteLimited/WhiteLimited3.png"
    let WhiteLimited4 = "images/tundra/Limited/Limited/WhiteLimited/WhiteLimited4.png"


    //let Limited Longbed Images
    let BlackLimitedLongbed1 = "images/tundra/Limited/LimitedLongbed/BlackLimited/BlackLimited1.png"
    let BlackLimitedLongbed2 = "images/tundra/Limited/LimitedLongbed/BlackLimited/BlackLimited2.png"
    let BlackLimitedLongbed3 = "images/tundra/Limited/LimitedLongbed/BlackLimited/BlackLimited3.png"
    let BlackLimitedLongbed4 = "images/tundra/Limited/LimitedLongbed/BlackLimited/BlackLimited4.png"
    let BlueLimitedLongbed1 = "images/tundra/Limited/LimitedLongbed/BlueLimited/BlueLimited1.png"
    let BlueLimitedLongbed2 = "images/tundra/Limited/LimitedLongbed/BlueLimited/BlueLimited2.png"
    let BlueLimitedLongbed3 = "images/tundra/Limited/LimitedLongbed/BlueLimited/BlueLimited3.png"
    let BlueLimitedLongbed4 = "images/tundra/Limited/LimitedLongbed/BlueLimited/BlueLimited4.png"
    let GreenLimitedLongbed1 = "images/tundra/Limited/LimitedLongbed/GreenLimited/GreenLimited1.png"
    let GreenLimitedLongbed2 = "images/tundra/Limited/LimitedLongbed/GreenLimited/GreenLimited2.png"
    let GreenLimitedLongbed3 = "images/tundra/Limited/LimitedLongbed/GreenLimited/GreenLimited3.png"
    let GreenLimitedLongbed4 = "images/tundra/Limited/LimitedLongbed/GreenLimited/GreenLimited4.png"
    let GreyLimitedLongbed1 = "images/tundra/Limited/LimitedLongbed/GreyLimited/GreyLimited1.png"
    let GreyLimitedLongbed2 = "images/tundra/Limited/LimitedLongbed/GreyLimited/GreyLimited2.png"
    let GreyLimitedLongbed3 = "images/tundra/Limited/LimitedLongbed/GreyLimited/GreyLimited3.png"
    let GreyLimitedLongbed4 = "images/tundra/Limited/LimitedLongbed/GreyLimited/GreyLimited4.png"
    let MesquiteLimitedLongbed1 = "images/tundra/Limited/LimitedLongbed/MesquiteLimited/MesquiteLimited1.png"
    let MesquiteLimitedLongbed2 = "images/tundra/Limited/LimitedLongbed/MesquiteLimited/MesquiteLimited2.png"
    let MesquiteLimitedLongbed3 = "images/tundra/Limited/LimitedLongbed/MesquiteLimited/MesquiteLimited3.png"
    let MesquiteLimitedLongbed4 = "images/tundra/Limited/LimitedLongbed/MesquiteLimited/MesquiteLimited4.png"
    let PearlLimitedLongbed1 = "images/tundra/Limited/LimitedLongbed/PearlLimited/PearlLimited1.png"
    let PearlLimitedLongbed2 = "images/tundra/Limited/LimitedLongbed/PearlLimited/PearlLimited2.png"
    let PearlLimitedLongbed3 = "images/tundra/Limited/LimitedLongbed/PearlLimited/PearlLimited3.png"
    let PearlLimitedLongbed4 = "images/tundra/Limited/LimitedLongbed/PearlLimited/PearlLimited4.png"
    let RedLimitedLongbed1 = "images/tundra/Limited/LimitedLongbed/RedLimited/RedLimited1.png"
    let RedLimitedLongbed2 = "images/tundra/Limited/LimitedLongbed/RedLimited/RedLimited2.png"
    let RedLimitedLongbed3 = "images/tundra/Limited/LimitedLongbed/RedLimited/RedLimited3.png"
    let RedLimitedLongbed4 = "images/tundra/Limited/LimitedLongbed/RedLimited/RedLimited4.png"
    let RockLimitedLongbed1 = "images/tundra/Limited/LimitedLongbed/RockLimited/RockLimited1.png"
    let RockLimitedLongbed2 = "images/tundra/Limited/LimitedLongbed/RockLimited/RockLimited2.png"
    let RockLimitedLongbed3 = "images/tundra/Limited/LimitedLongbed/RockLimited/RockLimited3.png"
    let RockLimitedLongbed4 = "images/tundra/Limited/LimitedLongbed/RockLimited/RockLimited4.png"
    let SilverLimitedLongbed1 = "images/tundra/Limited/LimitedLongbed/SilverLimited/SilverLimited1.png"
    let SilverLimitedLongbed2 = "images/tundra/Limited/LimitedLongbed/SilverLimited/SilverLimited2.png"
    let SilverLimitedLongbed3 = "images/tundra/Limited/LimitedLongbed/SilverLimited/SilverLimited3.png"
    let SilverLimitedLongbed4 = "images/tundra/Limited/LimitedLongbed/SilverLimited/SilverLimited4.png"
    let WhiteLimitedLongbed1 = "images/tundra/Limited/LimitedLongbed/WhiteLimited/WhiteLimited1.png"
    let WhiteLimitedLongbed2 = "images/tundra/Limited/LimitedLongbed/WhiteLimited/WhiteLimited2.png"
    let WhiteLimitedLongbed3 = "images/tundra/Limited/LimitedLongbed/WhiteLimited/WhiteLimited3.png"
    let WhiteLimitedLongbed4 = "images/tundra/Limited/LimitedLongbed/WhiteLimited/WhiteLimited4.png"

    let InteriorLimited1 = "images/tundra/Limited/InteriorLimited/InteriorLimited1.png"
    let InteriorLimited2 = "images/tundra/Limited/InteriorLimited/InteriorLimited2.png"
    let InteriorLimited3 = "images/tundra/Limited/InteriorLimited/InteriorLimited3.png"
    let InteriorLimited4 = "images/tundra/Limited/InteriorLimited/InteriorLimited4.png"

    //let Platinum Images
    let BlackPlatinum1 = "images/tundra/Platinum/Platinum/BlackPlatinum/BlackPlatinum1.png"
    let BlackPlatinum2 = "images/tundra/Platinum/Platinum/BlackPlatinum/BlackPlatinum2.png"
    let BlackPlatinum3 = "images/tundra/Platinum/Platinum/BlackPlatinum/BlackPlatinum3.png"
    let BlackPlatinum4 = "images/tundra/Platinum/Platinum/BlackPlatinum/BlackPlatinum4.png"
    let BluePlatinum1 = "images/tundra/Platinum/Platinum/BluePlatinum/BluePlatinum1.png"
    let BluePlatinum2 = "images/tundra/Platinum/Platinum/BluePlatinum/BluePlatinum2.png"
    let BluePlatinum3 = "images/tundra/Platinum/Platinum/BluePlatinum/BluePlatinum3.png"
    let BluePlatinum4 = "images/tundra/Platinum/Platinum/BluePlatinum/BluePlatinum4.png"
    let GreyPlatinum1 = "images/tundra/Platinum/Platinum/GreyPlatinum/GreyPlatinum1.png"
    let GreyPlatinum2 = "images/tundra/Platinum/Platinum/GreyPlatinum/GreyPlatinum2.png"
    let GreyPlatinum3 = "images/tundra/Platinum/Platinum/GreyPlatinum/GreyPlatinum3.png"
    let GreyPlatinum4 = "images/tundra/Platinum/Platinum/GreyPlatinum/GreyPlatinum4.png"
    let PearlPlatinum1 = "images/tundra/Platinum/Platinum/PearlPlatinum/PearlPlatinum1.png"
    let PearlPlatinum2 = "images/tundra/Platinum/Platinum/PearlPlatinum/PearlPlatinum2.png"
    let PearlPlatinum3 = "images/tundra/Platinum/Platinum/PearlPlatinum/PearlPlatinum3.png"
    let PearlPlatinum4 = "images/tundra/Platinum/Platinum/PearlPlatinum/PearlPlatinum4.png"
    let RedPlatinum1 = "images/tundra/Platinum/Platinum/RedPlatinum/RedPlatinum1.png"
    let RedPlatinum2 = "images/tundra/Platinum/Platinum/RedPlatinum/RedPlatinum2.png"
    let RedPlatinum3 = "images/tundra/Platinum/Platinum/RedPlatinum/RedPlatinum3.png"
    let RedPlatinum4 = "images/tundra/Platinum/Platinum/RedPlatinum/RedPlatinum4.png"
    let SilverPlatinum1 = "images/tundra/Platinum/Platinum/SilverPlatinum/SilverPlatinum1.png"
    let SilverPlatinum2 = "images/tundra/Platinum/Platinum/SilverPlatinum/SilverPlatinum2.png"
    let SilverPlatinum3 = "images/tundra/Platinum/Platinum/SilverPlatinum/SilverPlatinum3.png"
    let SilverPlatinum4 = "images/tundra/Platinum/Platinum/SilverPlatinum/SilverPlatinum4.png"

    //let Platinum Longbed Images
    let BlackPlatinumLongbed1 = "images/tundra/Platinum/PlatinumLongbed/BlackPlatinumLongbed/BlackPlatinumLongbed1.png"
    let BlackPlatinumLongbed2 = "images/tundra/Platinum/PlatinumLongbed/BlackPlatinumLongbed/BlackPlatinumLongbed2.png"
    let BlackPlatinumLongbed3 = "images/tundra/Platinum/PlatinumLongbed/BlackPlatinumLongbed/BlackPlatinumLongbed3.png"
    let BlackPlatinumLongbed4 = "images/tundra/Platinum/PlatinumLongbed/BlackPlatinumLongbed/BlackPlatinumLongbed4.png"
    let BluePlatinumLongbed1 = "images/tundra/Platinum/PlatinumLongbed/BluePlatinumLongbed/BluePlatinumLongbed1.png"
    let BluePlatinumLongbed2 = "images/tundra/Platinum/PlatinumLongbed/BluePlatinumLongbed/BluePlatinumLongbed2.png"
    let BluePlatinumLongbed3 = "images/tundra/Platinum/PlatinumLongbed/BluePlatinumLongbed/BluePlatinumLongbed3.png"
    let BluePlatinumLongbed4 = "images/tundra/Platinum/PlatinumLongbed/BluePlatinumLongbed/BluePlatinumLongbed4.png"
    let GreyPlatinumLongbed1 = "images/tundra/Platinum/PlatinumLongbed/GreyPlatinumLongbed/GreyPlatinumLongbed1.png"
    let GreyPlatinumLongbed2 = "images/tundra/Platinum/PlatinumLongbed/GreyPlatinumLongbed/GreyPlatinumLongbed2.png"
    let GreyPlatinumLongbed3 = "images/tundra/Platinum/PlatinumLongbed/GreyPlatinumLongbed/GreyPlatinumLongbed3.png"
    let GreyPlatinumLongbed4 = "images/tundra/Platinum/PlatinumLongbed/GreyPlatinumLongbed/GreyPlatinumLongbed4.png"
    let PearlPlatinumLongbed1 = "images/tundra/Platinum/PlatinumLongbed/PearlPlatinumLongbed/PearlPlatinumLongbed1.png"
    let PearlPlatinumLongbed2 = "images/tundra/Platinum/PlatinumLongbed/PearlPlatinumLongbed/PearlPlatinumLongbed2.png"
    let PearlPlatinumLongbed3 = "images/tundra/Platinum/PlatinumLongbed/PearlPlatinumLongbed/PearlPlatinumLongbed3.png"
    let PearlPlatinumLongbed4 = "images/tundra/Platinum/PlatinumLongbed/PearlPlatinumLongbed/PearlPlatinumLongbed4.png"
    let RedPlatinumLongbed1 = "images/tundra/Platinum/PlatinumLongbed/RedPlatinumLongbed/RedPlatinumLongbed1.png"
    let RedPlatinumLongbed2 = "images/tundra/Platinum/PlatinumLongbed/RedPlatinumLongbed/RedPlatinumLongbed2.png"
    let RedPlatinumLongbed3 = "images/tundra/Platinum/PlatinumLongbed/RedPlatinumLongbed/RedPlatinumLongbed3.png"
    let RedPlatinumLongbed4 = "images/tundra/Platinum/PlatinumLongbed/RedPlatinumLongbed/RedPlatinumLongbed4.png"
    let SilverPlatinumLongbed1 = "images/tundra/Platinum/PlatinumLongbed/SilverPlatinumLongbed/SilverPlatinumLongbed1.png"
    let SilverPlatinumLongbed2 = "images/tundra/Platinum/PlatinumLongbed/SilverPlatinumLongbed/SilverPlatinumLongbed2.png"
    let SilverPlatinumLongbed3 = "images/tundra/Platinum/PlatinumLongbed/SilverPlatinumLongbed/SilverPlatinumLongbed3.png"
    let SilverPlatinumLongbed4 = "images/tundra/Platinum/PlatinumLongbed/SilverPlatinumLongbed/SilverPlatinumLongbed4.png"

    let InteriorPlatinum1 = "images/tundra/Platinum/InteriorPlatinum/InteriorPlatinum1.png"
    let InteriorPlatinum2 = "images/tundra/Platinum/InteriorPlatinum/InteriorPlatinum2.png"
    let InteriorPlatinum3 = "images/tundra/Platinum/InteriorPlatinum/InteriorPlatinum3.png"
    let InteriorPlatinum4 = "images/tundra/Platinum/InteriorPlatinum/InteriorPlatinum4.png"

    //let all TRDPRO images
    let BlackTRDPRO1 = "images/tundra/TRDPRO/BlackTRDPRO/BlackTRDPRO1.png"
    let BlackTRDPRO2 = "images/tundra/TRDPRO/BlackTRDPRO/BlackTRDPRO2.png"
    let BlackTRDPRO3 = "images/tundra/TRDPRO/BlackTRDPRO/BlackTRDPRO3.png"
    let BlackTRDPRO4 = "images/tundra/TRDPRO/BlackTRDPRO/BlackTRDPRO4.png"
    let GreyTRDPRO1 = "images/tundra/TRDPRO/GreyTRDPRO/GreyTRDPRO1.png"
    let GreyTRDPRO2 = "images/tundra/TRDPRO/GreyTRDPRO/GreyTRDPRO2.png"
    let GreyTRDPRO3 = "images/tundra/TRDPRO/GreyTRDPRO/GreyTRDPRO3.png"
    let GreyTRDPRO4 = "images/tundra/TRDPRO/GreyTRDPRO/GreyTRDPRO4.png"
    let SolarTRDPRO1 = "images/tundra/TRDPRO/SolarTRDPRO/SolarTRDPRO1.png"
    let SolarTRDPRO2 = "images/tundra/TRDPRO/SolarTRDPRO/SolarTRDPRO2.png"
    let SolarTRDPRO3 = "images/tundra/TRDPRO/SolarTRDPRO/SolarTRDPRO3.png"
    let SolarTRDPRO4 = "images/tundra/TRDPRO/SolarTRDPRO/SolarTRDPRO4.png"
    let WhiteTRDPRO1 = "images/tundra/TRDPRO/WhiteTRDPRO/WhiteTRDPRO1.png"
    let WhiteTRDPRO2 = "images/tundra/TRDPRO/WhiteTRDPRO/WhiteTRDPRO2.png"
    let WhiteTRDPRO3 = "images/tundra/TRDPRO/WhiteTRDPRO/WhiteTRDPRO3.png"
    let WhiteTRDPRO4 = "images/tundra/TRDPRO/WhiteTRDPRO/WhiteTRDPRO4.png"

    let InteriorTRDPRO1 = "images/tundra/TRDPRO/InteriorTRDPRO/InteriorTRDPRO1.png"
    let InteriorTRDPRO2 = "images/tundra/TRDPRO/InteriorTRDPRO/InteriorTRDPRO2.png"
    let InteriorTRDPRO3 = "images/tundra/TRDPRO/InteriorTRDPRO/InteriorTRDPRO3.png"
    let InteriorTRDPRO4 = "images/tundra/TRDPRO/InteriorTRDPRO/InteriorTRDPRO4.png"
    const grades = [
        {name: "Limited Hybrid TRD OFF ROAD", colors: ["Midnight Black Metallic","Blueprint","Army Green","Magnetic Grey Metallic","Smoked Mesquite","Wind Chill Pearl","Supersonic Red","Lunar Rock","Celestial Silver Metallic", "Ice Cap"], src: [BlackLimited1, BlueLimited1, GreenLimited1, GreyLimited1,MesquiteLimited1, PearlLimited1, RedLimited1, RockLimited1, SilverLimited1, WhiteLimited1,BlackLimited2, BlueLimited2, GreenLimited2, GreyLimited2,MesquiteLimited2, PearlLimited2, RedLimited2, RockLimited2, SilverLimited2, WhiteLimited2,BlackLimited3, BlueLimited3, GreenLimited3, GreyLimited3,MesquiteLimited3, PearlLimited3, RedLimited3, RockLimited3, SilverLimited3, WhiteLimited3,BlackLimited4, BlueLimited4, GreenLimited4, GreyLimited4,MesquiteLimited4, PearlLimited4, RedLimited4, RockLimited4, SilverLimited4, WhiteLimited4, BlackLimitedLongbed1, BlueLimitedLongbed1, GreenLimitedLongbed1, GreyLimitedLongbed1,MesquiteLimitedLongbed1, PearlLimitedLongbed1, RedLimitedLongbed1, RockLimitedLongbed1, SilverLimitedLongbed1, WhiteLimitedLongbed1, BlackLimitedLongbed2, BlueLimitedLongbed2, GreenLimitedLongbed2, GreyLimitedLongbed2,MesquiteLimitedLongbed2, PearlLimitedLongbed2, RedLimitedLongbed2, RockLimitedLongbed2, SilverLimitedLongbed2, WhiteLimitedLongbed2, BlackLimitedLongbed3, BlueLimitedLongbed3, GreenLimitedLongbed3, GreyLimitedLongbed3,MesquiteLimitedLongbed3, PearlLimitedLongbed3, RedLimitedLongbed3, RockLimitedLongbed3, SilverLimitedLongbed3, WhiteLimitedLongbed3,BlackLimitedLongbed4, BlueLimitedLongbed4, GreenLimitedLongbed4, GreyLimitedLongbed4,MesquiteLimitedLongbed4, PearlLimitedLongbed4, RedLimitedLongbed4, RockLimitedLongbed4, SilverLimitedLongbed4, WhiteLimitedLongbed4, InteriorLimited1, InteriorLimited2, InteriorLimited3, InteriorLimited4], price: 205000, cab: ["Regular (5.5ft)", "Long Box (6.5ft)"], photos: 10},
        {name: "Platinum Hybrid", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic"], src: [BlackPlatinum1, BluePlatinum1, GreyPlatinum1, PearlPlatinum1, RedPlatinum1, SilverPlatinum1,BlackPlatinum2, BluePlatinum2, GreyPlatinum2, PearlPlatinum2, RedPlatinum2, SilverPlatinum2,BlackPlatinum3, BluePlatinum3, GreyPlatinum3, PearlPlatinum3, RedPlatinum3, SilverPlatinum3,BlackPlatinum4, BluePlatinum4, GreyPlatinum4, PearlPlatinum4, RedPlatinum4, SilverPlatinum4, BlackPlatinumLongbed1, BluePlatinumLongbed1, GreyPlatinumLongbed1, PearlPlatinumLongbed1, RedPlatinumLongbed1, SilverPlatinumLongbed1, BlackPlatinumLongbed2, BluePlatinumLongbed2, GreyPlatinumLongbed2, PearlPlatinumLongbed2, RedPlatinumLongbed2, SilverPlatinumLongbed2,BlackPlatinumLongbed3, BluePlatinumLongbed3, GreyPlatinumLongbed3, PearlPlatinumLongbed3, RedPlatinumLongbed3, SilverPlatinumLongbed3,BlackPlatinumLongbed4, BluePlatinumLongbed4, GreyPlatinumLongbed4, PearlPlatinumLongbed4, RedPlatinumLongbed4, SilverPlatinumLongbed4, InteriorPlatinum1,InteriorPlatinum2,InteriorPlatinum3,InteriorPlatinum4], price: 225000, cab: ["Regular (5.5ft)", "Long Box (6.5ft)"], photos: 6},
        {name: "1794 Hybrid TRD OFF ROAD", colors: ["Midnight Black Metallic","Blueprint", "Army Green","Magnetic Grey Metallic", "Smoked Mesquite", "Supersonic Red", "Celestial Silver Metallic"], src: [Black17941, Blue17941, Green17941, Grey17941, Mesquite17941, Red17941, Silver17941, Black17942, Blue17942, Green17942, Grey17942, Mesquite17942, Red17942, Silver17942, Black17943, Blue17943, Green17943, Grey17943, Mesquite17943, Red17943, Silver17943, Black17944, Blue17944, Green17944, Grey17944, Mesquite17944, Red17944, Silver17944, Black1794Longbed1, Blue1794Longbed1, Green1794Longbed1, Grey1794Longbed1, Mesquite1794Longbed1, Red1794Longbed1, Silver1794Longbed1, Black1794Longbed2, Blue1794Longbed2, Green1794Longbed2, Grey1794Longbed2, Mesquite1794Longbed2, Red1794Longbed2, Silver1794Longbed2, Black1794Longbed3, Blue1794Longbed3, Green1794Longbed3, Grey1794Longbed3, Mesquite1794Longbed3, Red1794Longbed3, Silver1794Longbed3, Black1794Longbed4, Blue1794Longbed4, Green1794Longbed4, Grey1794Longbed4, Mesquite1794Longbed4, Red1794Longbed4, Silver1794Longbed4, Interior17941, Interior17942,Interior17943,Interior17944], price: 245000, cab: ["Regular (5.5ft)", "Long Box (6.5ft)"],photos: 7},
        {name: "TRD PRO Hybrid", colors: ["Midnight Black Metallic","Lunar Rock","Solar Octane", "Ice Cap"], src: [BlackTRDPRO1, GreyTRDPRO1, SolarTRDPRO1, WhiteTRDPRO1,BlackTRDPRO2, GreyTRDPRO2, SolarTRDPRO2, WhiteTRDPRO2,BlackTRDPRO3, GreyTRDPRO3, SolarTRDPRO3, WhiteTRDPRO3,BlackTRDPRO4, GreyTRDPRO4, SolarTRDPRO4, WhiteTRDPRO4, InteriorTRDPRO1,InteriorTRDPRO2,InteriorTRDPRO3,InteriorTRDPRO4], price: 265000,photos: 4},
        {name: "Capstone Hybrid", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic"], src: [BlackCapstone1, BlueCapstone1, GreyCapstone1, PearlCapstone1, RedCapstone1, SilverCapstone1, BlackCapstone2, BlueCapstone2, GreyCapstone2, PearlCapstone2, RedCapstone2, SilverCapstone2, BlackCapstone3, BlueCapstone3, GreyCapstone3, PearlCapstone3, RedCapstone3, SilverCapstone3,BlackCapstone4, BlueCapstone4, GreyCapstone4, PearlCapstone4, RedCapstone4, SilverCapstone4, InteriorCapstone1,InteriorCapstone2,InteriorCapstone3,InteriorCapstone4], price: 265000,photos: 6},
    ]

    const [price, setPrice] = useState(0);
    const [activeGrade, setActiveGrade] = useState(["Limited Hybrid TRD OFF ROAD",32000, 0]);
    const [activeColor, setActiveColor] = useState(["Midnight Black Metallic",100, 0]);
    const [activeBed, setActiveBed] = useState(0)
    const [activePicture, setActivePicture] = useState(0);
    const [selectionStage, setSelectionStage] = useState(0);
    const [mainImageSrc, setMainImageSrc] = useState(grades[activeGrade[2]].src[(activeColor[(2)]+activeBed*grades[activeGrade[2]].src.length-4/2)+(grades[activeGrade[2]].photos*activePicture)])
    

    


    //update price
    useEffect(() => {
        if (price !== grades[activeGrade[2]]){setPrice(grades[activeGrade[(2)]].price)};
        if (activeBed !== 0 && activeGrade[0] !== "Platinum Hybrid" && activeGrade[0] !== "1794 Hybrid TRD OFF ROAD" && activeGrade[0] !== "Limited Hybrid TRD OFF ROAD"){setActiveBed(0)};
        if (activePicture > 3){
            console.log(grades[activeGrade[2]].src.length)
            console.log("hello")
            setMainImageSrc(grades[activeGrade[2]].src[grades[activeGrade[2]].src.length - 8 + activePicture]);
        } else {
            setMainImageSrc(grades[activeGrade[2]].src[(activeColor[(2)]+(activeBed*(grades[activeGrade[2]].src.length -4)/2))+(grades[activeGrade[2]].photos*activePicture)]);
        }
    });
    if (isBrowser && window.innerWidth > 1050){
        // desktop page
  return (
        <Layout title="Build Your Tundra | Glacier International" hideFooter={true} invertNav={true}>
            <Helmet>
                <title>Build Your 2023 Toyota Tundra| Customise Toyota Tundra in NZ</title>
                <meta name='description' content='Experience the new 2023 Toyota Tundra, where luxury meets power. Customise your right-hand drive Toyota Tundra exclusively in NZ at Glacier International today!' />
            </Helmet>
            <Main style={pageStyles}>
                <PriceFinanceBar price={price}/>
                <Row>
                <MainImage src={mainImageSrc} activePicture={activePicture} updatePicture={(newPicture) => {setActivePicture(newPicture)}}/>
                    {/* <MainImage src={grades[activeGrade[2]].src[(activeColor[(2)]+activeBed*grades[activeGrade[2]].src.length/2)*activePicture]} activePicture={activePicture} updatePicture={(newPicture) => {setActivePicture(newPicture)}}/> */}
                    <FeatureBar grades={grades} activeGrade={activeGrade} activeColor={activeColor} updateActiveColor={(color) => {setActiveColor(color);}} updateActiveGrade={(grade) => {setActiveGrade(grade); setActiveColor(["Midnight Black Metallic",100, 0])}} activeBed={activeBed} updateActiveBed={(bed) => setActiveBed(bed)} price={price}/>
                </Row>
            </Main>
        </Layout>
  )
    } else if (isBrowser && window.innerWidth < 1050){
        // mobile page
        return (
            <Layout title="Build Your Tundra | Glacier International" hideFooter={true} invertNav={true}>
                <Main style={pageStyles}>
                    
                    {/* <MainImage src={grades[activeGrade[2]].src[activeColor[(2)]+activeBed*grades[activeGrade[2]].src.length/2]} /> */}
                    <MainImage src={mainImageSrc} activePicture={activePicture} updatePicture={(newPicture) => {setActivePicture(newPicture)}}/>
                    <PriceFinanceBar price={price}/>
                    <MobileSelectionTab activeGrade={activeGrade} selectionStage={selectionStage} updateSelectionStage={(newStageNumber) => {setSelectionStage(newStageNumber)}}/>
                    <MobileFeatureSection price={price} model="Tundra" selectionStage={selectionStage} grades={grades} activeGrade={activeGrade} activeColor={activeColor} updateActiveColor={(color) => {setActiveColor(color);}} updateActiveGrade={(grade) => {setActiveGrade(grade); setActiveColor(["Midnight Black Metallic",100, 0])}}  activeBed={activeBed} updateActiveBed={(bed) => {setActiveBed(bed)}}/>
                </Main>
            </Layout>
        )
    } else { return (
        <div>Loading...</div>
    )}
}

export default IndexPage