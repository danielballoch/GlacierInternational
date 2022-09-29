import { XeroClient, HistoryRecords, Invoice, Invoices, LineItem, Contact, Contacts, Phone, Address } from 'xero-node';
import fetch from "node-fetch"
// // let ID = "";
// let SECRET = "";
// // if (process.env.CLIENTID){ID = process.env.CLIENTID;}
// if (process.env.CLIENTSECRET){SECRET = process.env.CLIENTSECRET;}


// const xero = new XeroClient({
//     clientId: process.env.CLIENTID ?? "",
//     clientSecret: SECRET,
//     grantType: 'client_credentials'
//   });

  export default async function postNewPersonHandler(req, res) {
    // POST data to an authenticated API
    // const tokenSet = await xero.getClientCredentialsToken();

    // await xero.setTokenSet(tokenSet);

    // if(tokenSet.expired()){
    //     const validTokenSet = await xero.refreshToken();
    // }
    // console.log("req: ", req.body.ID)

    // const checkContactExists = await xero.accountingApi.getContacts('', undefined, undefined, undefined, [req.body.ID], undefined, undefined, undefined, undefined);
    // console.log(checkContactExists)
    // res.send(checkContactExists).json;
    // return res.status(200).json();

    // const url2 = `https://glacier.api-us1.com/api/3/contacts?email=${req.body.email}`;
    let ID;
    if (req.body && req.body.ID){
        ID = req.body.ID
    }
    const url2 = `https://glacier.api-us1.com/api/3/contacts/${ID}`;
    const options2 = {method: 'GET', headers: {accept: 'application/json','content-type': 'application/json',
    'Api-Token': '8acea08daabd9aac50ba58c8edda55ea9746d45b9d53451de62da2cc53b1755863530396'}};
    console.log("url2: ",url2)
    let contactID;
    //check for contact
    try {
        console.log("error1")
        const contacts = await fetch(url2, options2)
        console.log("error2")
        console.log("contacts: ", contacts)
        const response = await contacts.json()
        console.log("Response: ", response)
        return res.status(200).json(response);
        if(response && response.contacts[0]){
            contactID = response.contacts[0].id
            //if contact exists do something here
            console.log("Contact Id: ", response)
            return res.status(200).json(response);
        }
    } catch(err) {
        const error = JSON.stringify(err)
        console.log(err)
        console.log(`Problem finding contact`, error);
        return res.status(500).json(error)
    }
  }