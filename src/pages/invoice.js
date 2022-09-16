import React, {useState, useEffect} from "react"
import {Link} from "gatsby"
import Layout from "../components/layout";
import styled from "@emotion/styled";
//try either get invoice from id or use navigate to pass props?

const Wrapper = styled.div`
max-width: 800px;
min-height: 61vh;
margin: 200px auto 100px auto;
`

export default function InvoicePage({location}){
    const [invData, setInvData] = useState();
    const [invLink, setInvLink] = useState();
    //need to add invoice string to local storage/state too fo api call
    console.log("state: ",invData)
    console.log("location: ",location)
    useEffect(()=> {
        if(location.state){
            let invoiceData = location.state.body.body.invoices[0]
            localStorage.setItem('firstName',invoiceData.contact.firstName);
            localStorage.setItem('invoiceNumber',invoiceData.invoiceNumber);
            localStorage.setItem('amountDue',invoiceData.amountDue);
            localStorage.setItem('dueDate',invoiceData.dueDate);
            localStorage.setItem('description',invoiceData.lineItems[0].description);
            localStorage.setItem('quantity',invoiceData.lineItems[0].quantity);
            localStorage.setItem('unitAmount',invoiceData.lineItems[0].unitAmount);
            localStorage.setItem('invoiceID',invoiceData.invoiceID);
            setInvData(
                {firstName: localStorage.getItem('firstName'), 
                invoiceNumber: localStorage.getItem('invoiceNumber'),
                amountDue: localStorage.getItem('amountDue'),
                dueDate: localStorage.getItem('dueDate'),
                description: localStorage.getItem('description'),
                quantity: localStorage.getItem('quantity'),
                unitAmount: localStorage.getItem('unitAmount')
                },  
            )
            GetOnlineInvoice();
        } else if (localStorage.getItem('invoiceNumber') && !location.state){
            setInvData(
                {firstName: localStorage.getItem('firstName'), 
                invoiceNumber: localStorage.getItem('invoiceNumber'),
                amountDue: localStorage.getItem('amountDue'),
                dueDate: localStorage.getItem('dueDate'),
                description: localStorage.getItem('description'),
                quantity: localStorage.getItem('quantity'),
                unitAmount: localStorage.getItem('unitAmount')
                },  
            )
            GetOnlineInvoice();
        }
    },[location]);

    //should probably check if localStorage is different from location and not empty then avoid call if I don't need it 
    async function GetOnlineInvoice(){

            fetch(`/api/xero2`, {
                method: `POST`,
                body: JSON.stringify({
                invoiceID: localStorage.getItem('invoiceID'),
                }),
                headers: {
                "content-type": `application/json`,
                },
            })
            .then(res => res.json())
            .then(body => {
                console.log(`response from API:`, body);
                if(body.body){
                    localStorage.setItem('onlineInvoiceUrl',body.body.onlineInvoices[0].onlineInvoiceUrl.onlineInvoiceUrl);
                    setInvLink(body.body.onlineInvoices[0].onlineInvoiceUrl)
                } else {
                    console.log(body)
                }
            })
    }

    return(
        <Layout invertNav={true}>
            <Wrapper>
                {invData ? 
                <div>
                    <h1>{invData.invoiceNumber} Invoice Summary:</h1>
                    <p>Hi {invData.firstName},</p>
                    <p>Thank you for your order with Glacier International.</p>
                    <p>The amount outstanding of ${invData.amountDue} (NZD) is due by {invData.dueDate.substring(0,invData.dueDate.length -14)}</p>
                    <p>Description: {invData.description}</p>
                    <p>Unit Amount: ${invData.unitAmount} , Quantity: {invData.quantity}</p>
                    <p>Tax: Inclusive</p>
                    <p>Total: ${invData.amountDue}</p>
                    <br/>
                    <p>You can view the full invoice and pay your bill online here: {invLink ? <a target="_blank" href={invLink}>{invLink}</a> : <a>Loading link...</a>} or via the same link in your email inbox.</p>
                </div> 
                : 
                <div><p>Page loading... if you have not gone through the Build Your Tundra/Sequoia process  <Link to="/">please click here.</Link></p></div>
                }
            </Wrapper>
        </Layout>
    )
}