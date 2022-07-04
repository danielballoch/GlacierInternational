import React from "react"
import styled from '@emotion/styled';


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

export default function MobileSelectionTab({selectionStage, updateSelectionStage}){
    return(
        <SelectionTab>
            <button onClick={() => {if(selectionStage > 0){updateSelectionStage(selectionStage - 1)}}}><span className="back"/></button>
            <button className={selectionStage === 0 ? "selected" : ""} onClick={() => {updateSelectionStage(0)}}>grade</button>
            <button className={selectionStage === 1 ? "selected" : ""} onClick={() => {updateSelectionStage(1)}}>color</button>
            <button className={selectionStage === 2 ? "selected" : ""} onClick={() => {updateSelectionStage(2)}}>order</button>
            <button onClick={() => {if(selectionStage < 2){updateSelectionStage(selectionStage + 1)}}}><span className="next"/></button>
        </SelectionTab>
    )
}