import React, {useState, useEffect, useRef} from "react"
import styled from '@emotion/styled';


const SelectionTab = styled.div`
display: flex;
justify-content: center;
margin: 0 0 20px 0;
color: black;
.selectionTabInner {
overflow-x: scroll;
display: flex;
}
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

export default function MobileSelectionTab({selectionStage, updateSelectionStage, activeGrade}){
    const [selectionVar, setSelectionVar] = useState(0)
    const selectionTabInner = useRef(null)
    useEffect(() => {
        if (activeGrade[0] === "Platinum Hybrid" || activeGrade[0] === "1794 Hybrid TRD OFF ROAD"){
            setSelectionVar(1);
        } else if (selectionVar !== 0 && activeGrade[0] !== "Platinum Hybrid" && activeGrade[0] !== "1794 Hybrid TRD OFF ROAD") {
            setSelectionVar(0);
        }
        
        if (selectionStage === 0) {
            selectionTabInner.current.scrollTo({left:0})
        } else if (selectionStage === 1) {
            selectionTabInner.current.scrollTo({left: 329/4-33})
        } else if (selectionStage === 2) {
            selectionTabInner.current.scrollTo({left: 2*329/4-33})
        } else if (selectionStage === 3) {
            selectionTabInner.current.scrollTo({left: 329})
        }
    })
    return(
        <SelectionTab>
            <button onClick={() => {if(selectionStage > 0){updateSelectionStage(selectionStage - 1); }}}><span className="back"/></button>

            <div ref={selectionTabInner} className="selectionTabInner">
                <button className={selectionStage === 0 ? "selected" : ""} onClick={() => {updateSelectionStage(0)}}>grade</button>
                {activeGrade[0] === "Platinum Hybrid" || activeGrade[0] === "1794 Hybrid TRD OFF ROAD" ? 
                <button className={selectionStage === 1 ? "selected" : ""} onClick={() => {updateSelectionStage(1)}}>bed</button> : null
                }
                <button className={selectionStage === (1 + selectionVar) ? "selected" : ""} onClick={() => {updateSelectionStage(1 + selectionVar)}}>color</button>
                <button className={selectionStage === (2 + selectionVar) ? "selected" : ""} onClick={() => {updateSelectionStage(2 + selectionVar)}}>order</button>
            </div>
            <button onClick={() => {if(selectionStage < (2 + selectionVar)){updateSelectionStage(selectionStage + 1);  }}}><span className="next"/></button>
        </SelectionTab>
    )
}