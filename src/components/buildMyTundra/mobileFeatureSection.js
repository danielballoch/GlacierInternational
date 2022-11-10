import React from "react"
import { Link } from "gatsby";
import styled from '@emotion/styled';


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
const StyledLink = styled(Link)`
width: 80%;
margin: auto;
`


export default function MobileFeatureSection({model, selectionStage, grades, activeGrade, activeColor, updateActiveColor, updateActiveGrade, activeBed, updateActiveBed, price}){
    let featureSection;
    if (activeGrade[0] === "Platinum Hybrid" || activeGrade[0] === "1794 Hybrid TRD OFF ROAD"){
        if (selectionStage === 0){
            featureSection = <FeatureSection>
                {/*Display grade buttons, update activeGrade state onClick & if active use active class styling */}
                <div className="wrap">
                {grades.map((grade, i) => (
                    <button className={(activeGrade[0] === grade.name ? 'active' : '')} onClick={() => {updateActiveGrade([grade.name, 32000, i]);updateActiveColor(["Midnight Black Metallic",100, 0])}}>{grade.name}</button>
                ))}
                </div>
            </FeatureSection>
        } else if (selectionStage === 1){
            featureSection = <FeatureSection>

                <div className="wrap">
                    <button className={(activeBed === 0 ? 'active' : '')} onClick={() => {updateActiveBed(0)}}>Regular (5.5ft)</button> 
                    <button className={(activeBed === 1 ? 'active' : '')} onClick={() => {updateActiveBed(1)}}>Long Box (6.5ft)</button> 
                </div>
            </FeatureSection>
        } else if (selectionStage === 2){
            featureSection = <FeatureSection>
                {/*Display color buttons based on activeGrade, update activeColor state onClick & if active use active class styling */}
                <div className="wrap">
                {grades[activeGrade[2]].colors.map((color, i) => (
                    <button className={(activeColor[0] === color ? 'active' : '')} onClick={() => {updateActiveColor([color,100, i])}}>{color}</button>
                ))}
                </div>
            </FeatureSection>
        } else {
            featureSection = <FeatureSection><p>Global supply changes daily, so commit today! To secure your RHD MY{model} to be delivered by the 4th quarter of 2023 requires a 75% deposit.  Click below for more information and our payment gateway.</p><StyledLink to="/order-page" state={{model: "2023 Tundra", grade: activeGrade[0], color: activeColor[0], bed: activeBed, price: price }}><button className="orderbtn">Complete Order</button></StyledLink></FeatureSection>
        }
    }
    else {
            if (selectionStage === 0){
                featureSection = <FeatureSection>
                    {/*Display grade buttons, update activeGrade state onClick & if active use active class styling */}
                    <div className="wrap">
                    {grades.map((grade, i) => (
                        <button className={(activeGrade[0] === grade.name ? 'active' : '')} onClick={() => {updateActiveGrade([grade.name, 32000, i]);updateActiveColor(["Midnight Black Metallic",100, 0])}}>{grade.name}</button>
                    ))}
                    </div>
                </FeatureSection>
            } else if (selectionStage === 1){
                featureSection = <FeatureSection>
                    {/*Display color buttons based on activeGrade, update activeColor state onClick & if active use active class styling */}
                    <div className="wrap">
                    {grades[activeGrade[2]].colors.map((color, i) => (
                        <button className={(activeColor[0] === color ? 'active' : '') } onClick={() => {updateActiveColor([color,100, i])}}>{color}</button>
                    ))}
                    </div>
                </FeatureSection>
            } else {
                featureSection = <FeatureSection><p>To put a 75% deposit down securing your {model} build for 2023, please click the button for more info at our payment gateway.</p><StyledLink to="/order-page" state={{model: "2023 Tundra", grade: activeGrade[0], color: activeColor[0], bed: activeBed, price: price }}><button className="orderbtn">Complete Order</button></StyledLink></FeatureSection>
            }
    }
    return(
        featureSection
    )
}