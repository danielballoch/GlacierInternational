import React, {useState, useEffect} from "react"
import Layout from "../components/layout";
import styled from "@emotion/styled";
//try either get invoice from id or use navigate to pass props?

const Wrapper = styled.div`
max-width: 800px;
margin: 200px auto 100px auto;
`

export default function InvoicePage({location}){
    const [invData, setInvData] = useState();
    const [invLink, setInvLink] = useState();
    //need to add invoice string to local storage/state too fo api call
    console.log(location.state.body.body.invoices[0])
    console.log(invData)

    useEffect(()=> {
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
        GetOnlineInvoice()
    },[location]);

    //should probably check if localStorage is different from location and not empty then avoid call if I don't need it 
    async function GetOnlineInvoice(){
        //so if localStorage is already there then I can use the url, but I have to check it shouldnt be updated
        //Basically if location is null and localstorage is already set, just use local storage
        //but if location is there it'll most likely be a new build so fetch api 
        //looks like it's persisting though?
        console.log("Location: ", location)
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
                localStorage.setItem('onlineInvoiceUrl',body.body.onlineInvoices[0].onlineInvoiceUrl.onlineInvoiceUrl);
                setInvLink(body.body.onlineInvoices[0].onlineInvoiceUrl)
            })
    }


    return(
        <Layout invertNav={true}>
            <Wrapper>
                <h1>Invoice Page</h1>
                {invData ? 
                <div>
                    <p>Hi {invData.firstName}</p>
                    <p>Here's an invoice summary for: {invData.invoiceNumber}</p>
                    <p>The amount outstanding of ${invData.amountDue} (NZD) is due by {invData.dueDate}</p>
                    <p>Description: {invData.description}</p>
                    <p>Unit Amount: {invData.unitAmount} , Quantity: {invData.quantity}</p>
                    <p>Tax: Inclusive</p>
                    <p>Total: ${invData.amountDue}</p>
                    <br/>
                    <p>You can view and pay your bill online: {invLink ? <a target="_blank" href={invLink}>{invLink}</a> : <a>Loading link...</a>} or by clicking the pay now button below</p>
                    <button>Pay Now</button>
                </div> 
                : 
                <div>page loading...</div>
                }
                
            </Wrapper>
        </Layout>
    )
}