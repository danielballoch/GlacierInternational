import { XeroClient, HistoryRecords, Invoice, Invoices, LineItem, Contact, Contacts, Phone, Address } from 'xero-node';

// let ID = "";
let SECRET = "";
// if (process.env.CLIENTID){ID = process.env.CLIENTID;}
if (process.env.CLIENTSECRET){SECRET = process.env.CLIENTSECRET;}

const xero = new XeroClient({
    clientId: process.env.CLIENTID ?? "",
    clientSecret: SECRET,
    grantType: 'client_credentials'
  });


  export default async function postNewPersonHandler(req, res) {
    // POST data to an authenticated API
    const tokenSet = await xero.getClientCredentialsToken();

    await xero.setTokenSet(tokenSet);

    if(tokenSet.expired()){
        const validTokenSet = await xero.refreshToken();
    }
    try {
        const onlineInvoice = await xero.accountingApi.getOnlineInvoice('',req.body.invoiceID)
        console.log(onlineInvoice)
        res.send(onlineInvoice);
        return res.status(200).json()
    } catch (err) {
        const error = JSON.stringify(err.response.body, null, 2)
        console.log(`Problem getting invoiceID`, error);
    }
    
}