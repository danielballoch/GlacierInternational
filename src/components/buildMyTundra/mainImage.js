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
@media (max-width: 1050px){
    width: 94vw;
    max-width: 660px;
    left: unset;
    margin: auto;
    margin-top: 100px;
    top: 0;
    img {
        width: 100%;
    }
    position: relative;
}
`

export default function MainImage ({src}){
    return(
        <Center>
            <img src={src}/>
        </Center>
    )
}