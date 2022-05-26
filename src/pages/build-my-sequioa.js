import React, {useState, useEffect} from "react"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

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
    margin: "100px 0",
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
`

const Center = styled.div`
display: flex;
position: fixed;
top: calc(50vh - 157px);
left: calc(35vw - 20vw);
width: 40vw;
height: 40vh
justify-content: center;
flex-direction: column;
align-items: center;
`
const CenterLeft = styled.div`
z-index: 10;
background-color: white;
width: 30vw;
height: 100vh;
margin-left: 20px;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.04);
h1 {
    margin: 60px 20px 0px 40px;
    color: black;
    font-size: 2em;
    font-weight: 100;
    text-align: left;
}
p {
color: black;
font-weight: 100;
margin: 60px 20px 0px 40px;
font-size: 1.5em;
}
display: flex;
justify-content: left;
flex-direction: column;
align-items: left;
button {
    align-self: flex-start;
    background-color: white;
    padding: 6px 20px;
    border-radius: 50px;
    margin: 10px 40px;
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
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
a {
    margin: 0 20px;
}
`


const IndexPage = ({display=false}) => {
    const [price, setPrice] = useState(0);
    console.log("Price: " + price)
    const [model, setModel] = useState(["TRD PRO",32000])
    const [activeGrade, setActiveGrade] = useState(["1794",32000, 0])
    const [lift, setLift] = useState(0)

    const [activeColor, setActiveColor] = useState(["Red",100, 5])

    const grades = [
        {name: "Capstone", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic"], src: [BlackCapstone, BlueCapstone, GrayCapstone, PearlCapstone, RedCapstone, SilverCapstone], price: "128,723"},
        {name: "Limited", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic", "Army Green", "Smoked Mesquite", "Wind Chill Pearl", "Supersonic Red", "Celestial Silver Metallic", "White"], src: [BlackLimited, BlueLimited, GrayLimited, GreenLimited, MesquiteLimited, PearlLimited, RedLimited, SilverLimited, WhiteLimited], price: "86,821"},
        {name: "Platinum", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl", "Supersonic Red", "Celestial Silver Metallic"], src: [BlackPlatinum, BluePlatinum, GrayPlatinum, PearlPlatinum, RedPlatinum, SilverPlatinum], price: "102,358"},
        {name: "SR5", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Army Green","Smoked Mesquite", "Supersonic Red","Rock", "Celestial Silver Metallic", "White"], src: [BlackSR5, BlueSR5, GraySR5, GreenSR5,MesquiteSR5, RedSR5,RockSR5, SilverSR5, WhiteSR5], price: "77,519"},
        {name: "TRD PRO", colors: ["Midnight Black Metallic","Magnetic Grey Metallic","Solar Octane", "White"], src: [BlackTRDPRO, GrayTRDPRO, SolarTRDPRO, WhiteTRDPRO], price: "117,866"},
    ]
    console.log(grades)
    console.log(activeColor[0]+activeGrade[0])
    useEffect(() => {
        if (price !== grades[activeGrade[2]]){setPrice(grades[activeGrade[2]].price)}
    });
  return (
      <Layout hideFooter={true} invertNav={true}>
        <Main style={pageStyles}>
        <title>Home Page</title>
        <Price><a>Total Price: est ${price} (NZD)</a><a>Finance Options</a></Price>
        <Row>
            <Center>
                {/*Get image src from grades array based on active grade & color */}
                <img src={grades[activeGrade[2]].src[activeColor[2]]} 
                // style={{width: "1100px"}}
                />
            </Center>
            <CenterLeft>
                <h1>2023 Toyota Sequia</h1>
                {/* <p>437 Horsepower</p>
                <p>583 Lb.-Ft. Torque</p>
                <p>9,000 Lbs. Max Towing *</p>
                <p>7-8 Seating</p> */}
                <p>Grade:</p>
                {/*Display grade buttons, update activeGrade state onClick & if active use active class styling */}
                {grades.map((grade, i) => (
                    <button className={(activeGrade[0] === grade.name ? 'active' : '')} onClick={() => setActiveGrade([grade.name, 32000, i])}>{grade.name}</button>
                ))}
                <p>Colour:</p>
                {/*Display color buttons based on activeGrade, update activeColor state onClick & if active use active class styling */}
                {grades[activeGrade[2]].colors.map((color, i) => (
                    <button className={(activeColor[0] === color ? 'active' : '') } onClick={() => {setActiveColor([color,100, i])}}>{color}</button>
                ))}
            </CenterLeft>
        </Row>
        
        
        

        </Main>
    </Layout>
  )
}

export default IndexPage