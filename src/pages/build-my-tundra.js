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
top: calc(50vh - 250px);;
left: 20vw;
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
p {
color: black;
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

    const [model, setModel] = useState(["TRD PRO",32000])
    const [activeGrade, setActiveGrade] = useState(["1794",32000, 0])
    const [lift, setLift] = useState(0)

    const [activeColor, setActiveColor] = useState(["Red",100, 5])


    const grades = [
        {name: "1794", colors: ["Black","Blue", "Green","Grey", "Mesquite", "Pearl", "Red", "Silver"], src: [Black1794, Blue1794, Green1794, Grey1794, Mesquite1794, Pearl1794, Red1794, Silver1794]},
        {name: "Capstone", colors: ["Black","Blue","Grey","Pearl","Red","Silver"], src: [BlackCapstone, BlueCapstone, GreyCapstone, PearlCapstone, RedCapstone, SilverCapstone]},
        {name: "Limited", colors: ["Black","Blue","Green","Grey","Mesquite","Pearl","Red","Silver", "White"], src: [BlackLimited, BlueLimited, GreenLimited, GreyLimited,MesquiteLimited, PearlLimited, RedLimited, SilverLimited, WhiteLimited]},
        {name: "Platinum", colors: ["Black","Blue","Grey","Pearl","Red","Silver"], src: [BlackPlatinum, BluePlatinum, GreyPlatinum, PearlPlatinum, RedPlatinum, SilverPlatinum]},
        {name: "SR", colors: ["Black","Grey","Silver", "White"], src: [BlackSR, GreySR, SilverSR, WhiteSR]},
        {name: "SR5", colors: ["Black","Blue","Green","Grey","Red","Rock","Silver", "White"], src: [BlackSR5, BlueSR5, GreenSR5, GreySR5, RedSR5,RockSR5, SilverSR5, WhiteSR5]},
        {name: "TRDPRO", colors: ["Black","Rock","Solar", "White"], src: [BlackTRDPRO, RockTRDPRO, SolarTRDPRO, WhiteTRDPRO]},
    ]
    console.log(grades)
    console.log(activeColor[0]+activeGrade[0])
    useEffect(() => {
        if (price !== (model[1] + activeColor[1] + lift)){setPrice(model[1] + activeColor[1])}
    });
  return (
      <Layout hideFooter={true} invertNav={true}>
        <Main style={pageStyles}>
        <title>Home Page</title>
        <Price><a>Total Price: ${price} (NZD)</a><a>Finance Options</a></Price>
        <Row>
            <Center>
                {/*Get image src from grades array based on active grade & color */}
                <img src={grades[activeGrade[2]].src[activeColor[2]]} 
                // style={{width: "1100px"}}
                />
            </Center>
            <CenterLeft>
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