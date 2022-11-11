import React from "react"
import styled from '@emotion/styled';

const Center = styled.div`
display: flex;
position: fixed;
top: calc(50vh - 20vh);
left: calc(35vw - 20vw);
width: 40vw;
height: 40vh;
justify-content: center;
flex-direction: column;
align-items: center;
.mainImg {
    border-radius: 10px;
}
.buttons {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    margin-bottom: -100px;
    button {
        color: black;
        background-color: rgba(0,0,0,0);
        border: none;
        :hover {
            cursor:pointer;
        }
    }
    p {
        color: black;
        padding:0 6px;
        transition: .3s;
    }
    .activeP {
        color: white;
    }
    .arrow {
    height: 12px;
    width: 12px;
    border: solid lightgrey;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transition: .3s;
    :hover {
        border: solid grey;
        border-width: 0 5px 5px 0;
    }
    }
    .left {
    transform: rotate(-225deg);
    -webkit-transform: rotate(-225deg);
    }
    .dot {
        width: 40px;
        height: 20px;
        background-color:lightgrey;
        margin: 2px;
        transition: .3s;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        /* border-radius: 2px; */
        :hover {
            background-color:grey;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            
        }
    }
    .active {
        background-color: grey;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        
    }
}

@media (max-width: 1050px){
    width: 94vw;
    max-width: 660px;
    left: unset;
    margin: auto;
    margin-top: 100px;
    top: 0;
    position: relative;
    img {
        width: 100%;
    }
    .buttons {
        margin-bottom: 20px;
        .dot {
            width: 20px;
        }
        p {
            display: none;
        }
    }
    
}
@media (max-width: 1050px ) {
    .arrow {
        display: none!important;
    }
}
`

export default function MainImage ({src, activePicture, updatePicture}){
    //add swipe controls for mobile
    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);

    function handleTouchStart(e) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX);
        console.log(touchEnd)
    }

    function handleTouchEnd() {
        if (touchStart - touchEnd > 50) {
            // do your stuff here for left swipe
            if(activePicture<7){updatePicture(activePicture+1)}
        }

        if (touchStart - touchEnd < -50) {
            // do your stuff here for right swipe
            if(activePicture>0){updatePicture(activePicture-1)}
        }
    }
    return(
        <Center >
            <img className="mainImg" alt="Custom Sequoia/Tundra" src={src} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}/>
            <div className="buttons">
                <button onClick={() => {if(activePicture>0){updatePicture(activePicture-1)}}}><span className="arrow left"/></button>
                <p className={activePicture > 3? "activeP" : ""}>Exterior</p>
                <button onClick={() => {updatePicture(0)}} className={activePicture == 0 ? "dot active" : "dot"}/>
                <button onClick={() => {updatePicture(1)}} className={activePicture === 1 ? "dot active" : "dot"}/>
                <button onClick={() => {updatePicture(2)}} className={activePicture === 2 ? "dot active" : "dot"}/>
                <button onClick={() => {updatePicture(3)}} className={activePicture === 3 ? "dot active" : "dot"}/>
                <p className={activePicture > 3? "activeP" : ""}>Interior</p>
                <button onClick={() => {updatePicture(4)}} className={activePicture === 4 ? "dot active" : "dot"}/>
                <button onClick={() => {updatePicture(5)}} className={activePicture === 5 ? "dot active" : "dot"}/>
                <button onClick={() => {updatePicture(6)}} className={activePicture === 6 ? "dot active" : "dot"}/>
                <button onClick={() => {updatePicture(7)}} className={activePicture === 7 ? "dot active" : "dot"}/>
                <button onClick={() => {if(activePicture<7)updatePicture(activePicture+1)}}><span className="arrow"/></button>
            </div>
        </Center>
    )
}