import React, { useEffect } from "react"
import { Link } from "gatsby";
import styled from '@emotion/styled';

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

const StyledLink = styled(Link)`
width: 80%;
margin: auto;
`


export default function FeatureBar ({grades, activeGrade, activeColor, updateActiveColor, updateActiveGrade, price}){

    useEffect(() => {

    })

    return(
        <CenterLeft>
                <h1>2023 Toyota Sequoia</h1>
                <div className="features">
                    <div><h2>325kw</h2><p>i-FORCE MAX Engine</p></div>
                    <div><h2>790nm</h2><p>Torque</p></div>
                    <div><h2>4 Tonne*</h2><p>Max Towing *</p></div>
                    <div><h2>{activeGrade[0] === "SR5" ? 8 : 7}</h2><p>Seats</p></div>
                </div>
                <p>Grade:</p>
                <div className="wrap">
                    {grades.map((grade, i) => (
                        <button className={(activeGrade[0] === grade.name ? 'active' : '')} 
                        onClick={() => {updateActiveGrade([grade.name, 32000, i]); console.log("updategrade run")}}
                        // onClick={() => {setActiveGrade([grade.name, 32000, i]);setActiveColor(["Midnight Black Metallic",100, 0])}}
                        >{grade.name}</button>
                    ))}
                </div>
                    
                <p>Colour:</p>
                        
                <div className="wrap">
                    {grades[activeGrade[2]].colors.map((color, i) => (
                        <button className={(activeColor[0] === color ? 'active' : '') }
                        // onClick={updateActiveColor} 
                        onClick={() => {updateActiveColor([color, 100, i]); console.log("updatecolor run")}}
                        // onClick={() => {setActiveColor([color,100, i])}}
                        >{color}</button>
                    ))}
                </div>
                
                <p className="infoText">To put a 75% deposit down securing your custom Sequoia build for 2022, please click the button below for more info at our payment gateway.</p>
                <StyledLink to="/order-page" state={{model: "2023 Sequoia", grade: activeGrade[0], color: activeColor[0], bed: 3, price: price }}><button className="orderbtn">Complete Order</button></StyledLink>
            </CenterLeft>
    )
}