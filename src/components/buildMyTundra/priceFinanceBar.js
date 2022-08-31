import React, {useState} from "react"
import styled from '@emotion/styled';

const PriceFinanceContainer = styled.div`
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
const Price = styled.div`
.up {
    span {
        transform: rotate(-135deg) !important;
    }
}
.left {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 1px;
    border: none;
    padding: 3px 6px;
    border-radius: 30px;
    span {
        transition: .3s;
        display: inline-block;
        height: 1px;
        width: 1px;
        border: solid #666;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
}
a:last-of-type {
    :hover {
        cursor: pointer ;
    }
}
@media(max-width: 1050px) {
    width: 100%;
    left: 0;
    position: relative;    
}
@media(max-width: 700px) {
font-size: 14px;
}
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
box-shadow: rgba(33, 35, 38, 0.1) 0px -2px 5px -1px;
a {
    margin: 0 10px;
}
`


export default function PriceFinanceBar({price}){
    const [financePopup, setFinancePopup] = useState(false);
    let nf = new Intl.NumberFormat('en-US');
return (
        <PriceFinanceContainer>
            <div className={financePopup ? "popup" : "none"}>
                <p>Glacier International lease/loan options or any relevant information for finances.</p>
                <p>*to be updated/redesigned once more info is known here*</p>
            </div>
            <Price><a>Total Price: ${nf.format(price)} (NZD)</a>
            {/* <a onClick={() => {setFinancePopup(!financePopup)}}>Finance Options<span className={financePopup ? "left up" : "left"}><span/></span></a> */}
            </Price>
        </PriceFinanceContainer>
    )  
}
        