import React from "react"
import styled from '@emotion/styled';

const ScrollContainer = styled.div`
@media (max-width: 980px){
    display: none !important;
}
width: 60px;
height: 108px;
margin-top: -54px;
margin-left: -54px;
position: absolute;
z-index: 10;
left: calc(50% - 30px);
top: 80%;
transform: scale(.5) ;

.scroll-msg-inner {
    width: 52px;
    height: 100px;
    position: relative;
    border-radius: 34px;
    border: 4px solid white;
  }
.scroll-msg-wheel {
    position: relative;
    top: 10%;
    left: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background-color: white;
    animation-duration: 2s;
    animation-name: mouse-scroll;
    animation-iteration-count: infinite;
    @keyframes mouse-scroll {
        0%   { top: 10%; opacity: 1; }
        80% { opacity: 1; }
        100% { top: 30%; opacity: 0; }
        position: absolute;
        }
      }
`

export default function ScrollAnimation(){
    return (
        <ScrollContainer>
            <div class="scroll-msg-inner">
                <div class="scroll-msg-wheel">
                </div>
            </div>
        </ScrollContainer>
    )
}