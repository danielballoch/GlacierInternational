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

    const getDate = () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = (today.getMonth() + 1);
        let yyyy = today.getFullYear();
        let currentDate = mm + '/' + dd + '/' + yyyy;
        return currentDate;
    }

    const getNextWeek = () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = (today.getMonth() + 1);
        let yyyy = today.getFullYear();
        let lastDate = (new Date(yyyy, mm, 0)).getDate();
        let nextWeek; 
        if (Number(dd) + 7 > lastDate){
            nextWeek = (mm+1) + '/' + (7 + (dd - lastDate)) + '/' + yyyy;
        } else {
            nextWeek = mm + '/' + (dd + 7) + '/' + yyyy;
        }
        return nextWeek;
    }



    //creating dates for invoices, checking if I need to add a month + days, or just 7 days to the due date for invoice (nextWeek).

   





    console.log(req.body);
    console.log(req.body.photoid)
    let bed;
    if (req.body.bed === 0){bed = " Regular (5.5ft) "} else if (req.body.bed === 1) {bed = " Longbase (6.5ft) "} else {bed = " "}
    const description = "Deposit Invoice for " + req.body.name + "'s custom " + req.body.model + " order. Order details: " + req.body.model + " " + req.body.grade + bed + req.body.color + " (" + req.body.companyTerm + " order).";

    //price reset to make sure there's no funny business 
    
    console.log("Price check 1")
    function GetPrice(){
        let safePrice = 265000;
        if (req.body.model === "2023 Tundra"){
            console.log("Tundra price setting", req.body.grade)
            if(req.body.grade === "Limited Hybrid TRD OFF ROAD"){safePrice = 205000} 
            else if(req.body.grade === "Platinum Hybrid"){safePrice = 225000} 
            else if(req.body.grade === "1794 Hybrid TRD OFF ROAD"){safePrice = 245000} 
            else if(req.body.grade === "TRD PRO Hybrid"){safePrice = 265000} 
            else if(req.body.grade === "Capstone Hybrid"){safePrice = 265000} 
        } else if (req.body.model === "2023 Sequoia"){
            console.log("Sequoia price setting", req.body.grade)
            if(req.body.grade === "SR5"){safePrice = 205000} 
            else if(req.body.grade === "Limited"){safePrice = 225000} 
            else if(req.body.grade === "Platinum"){safePrice = 245000} 
            else if(req.body.grade === "TRD PRO"){safePrice = 265000} 
            else if(req.body.grade === "Capstone"){safePrice = 265000} 
        } else {
            console.log("req.body.model must be wrong")
        }
        console.log("Price check 2:", safePrice)
        return safePrice;
    }

    try {
        let safePrice = GetPrice();
        console.log("safePrice: ",safePrice)
        let currentDate = getDate();
        let nextWeek = getNextWeek();
        console.log(currentDate, nextWeek);
        console.log(new Date())
        const checkContactExists = await xero.accountingApi.getContacts('', undefined, undefined, undefined, undefined, undefined, undefined, undefined, req.body.name);
        if (checkContactExists.body.contacts === undefined || checkContactExists.body.contacts.length === 0 || req.body.name !== checkContactExists.body.contacts[0].name){
            //if name is not in Xero contacts already, create contact with form info.
            console.log("name is not in database")
            const contact: Contact = {
                name: req.body.name,
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                emailAddress: req.body.email,
                companyNumber: req.body.companynumber,
                phones: [
                    {
                        phoneNumber: req.body.phone,
                        phoneType: Phone.PhoneTypeEnum.MOBILE
                    }
                ],
                addresses: [
                    {
                        addressType: Address.AddressTypeEnum.POBOX,
                        addressLine1: req.body.address1,
                        addressLine2: req.body.address2,
                        city: req.body.city,
                        region: req.body.region,
                        postalCode: req.body.postalcode,
                        country: req.body.country
                    }
                ]
            };
            const contacts: Contacts = {  
                contacts: [contact]
            };
            // let photoID = req.body.photoid;
            console.log(contacts);
            await xero.accountingApi.createContacts('', contacts);
            //now that the contact is created, use the contact & Build My Tundra info to create invoice.
            //need to get accountId, so do check again now that it is created and used the id there
            const getContactId = await xero.accountingApi.getContacts('', undefined, undefined, undefined, undefined, undefined, undefined, undefined, req.body.name)
            let contactId;
            if (getContactId.body.contacts !== undefined && getContactId.body.contacts.length !== 0){
                //getContactId is returning if contacts include all characters, not specific order/name so need to check which includes specific name as in else 
                let CorrectArrayIndex;
                console.log("is this showing up>??")
                getContactId.body.contacts.forEach((contact, i) => {
                    if (contact.name === req.body.name){
                        CorrectArrayIndex = i;
                    }
                })
                //here I need to make sure getContactId.body.contact[?].name === req.body.name
                //the question mark is what I'm figuring out, I need to see which one it's on 
                contactId = getContactId.body.contacts[CorrectArrayIndex].contactID;
            }
            //now that I have id create invoice 
            //&& add photo id attachment to contact 
            // await xero.accountingApi.createContactAttachmentByFileName('',contactId,photoID,)
            const where = 'Status=="ACTIVE" AND Type=="SALES"';
            const accounts = await xero.accountingApi.getAccounts('', undefined, where);
            // console.log('accounts: ', accounts.body.accounts);
            const contact2: Contact = {
                contactID: contactId
            };
            console.log("Price check: ", safePrice)
            const lineItem: LineItem = {
                accountID: '',
                description: description,
                quantity: 1.0,
                accountCode: "200",
                unitAmount: (safePrice*0.75)
            };
            const invoice: Invoice = {
                lineItems: [lineItem],
                contact: contact2,
                dueDate: nextWeek,
                date: currentDate,
                reference: "custom Sequoia/Tundra reference",
                status: Invoice.StatusEnum.AUTHORISED,
                type: Invoice.TypeEnum.ACCREC
            };
            const invoices: Invoices = {
                invoices: [invoice]
            };
            const response = await xero.accountingApi.createInvoices('', invoices);
            console.log('contact id is: ' + contact2);
            console.log('invoices: ', response.body.invoices);
            res.json(response)

            // ###
            // Getting the invoice ID
            const contactIDList = [contactId];
            let invoiceID;
            let invoiceResponse;

            try {
                invoiceResponse = await xero.accountingApi.getInvoices('', undefined, undefined, undefined, undefined, undefined, contactIDList, undefined, undefined, undefined, undefined, undefined, undefined);
                console.log(invoiceResponse.body || invoiceResponse.response.statusCode)
                invoiceID = invoiceResponse.body.invoices[0].invoiceID;
                console.log(contactId)
            } catch (err) {
                const error = JSON.stringify(err.response.body, null, 2)
                console.log(`Failed to get invoice ID`);
            }
            // Emailing the invoice
            const requestEmpty: RequestEmpty = { };
            // let emailInvoice;
            try {
                const emailInvoice = await xero.accountingApi.emailInvoice('', invoiceID, requestEmpty);
                console.log('Invoice successfully emailed' || emailInvoice.response.statusCode)
            } catch (err) {
                const error = JSON.stringify(err.response.body, null, 2)
                console.log(`Problem emailing invoice`, error);
            }
            

            console.log("safePrice: ",safePrice)
            return res.status(200).json();

        } else {
            console.log()
            console.log("name is in database");
            console.log(checkContactExists.body.contacts[0].name)
            console.log("Contact id is: " + checkContactExists.body.contacts[0].contactID);
            //check through and make sure existing contact has necessary information to create invoice.
            const where = 'Status=="ACTIVE" AND Type=="SALES"';
            const accounts = await xero.accountingApi.getAccounts('', undefined, where);
            // console.log('accounts: ', accounts.body.accounts);
            const contactId = checkContactExists.body.contacts[0].contactID;
            const contact: Contact = {
                contactID: checkContactExists.body.contacts[0].contactID
            };
            const lineItem: LineItem = {
                accountID: '',
                item: {name: req.body.model},
                description: description,
                quantity: 1.0,
                accountCode: "200",
                unitAmount: (safePrice*0.75)
            };
            const invoice: Invoice = {
                lineItems: [lineItem],
                contact: contact,
                dueDate: nextWeek,
                date: currentDate,
                reference: "custom Sequoia/Tundra reference",
                status: Invoice.StatusEnum.AUTHORISED,
                type: Invoice.TypeEnum.ACCREC
            };
            const invoices: Invoices = {
                invoices: [invoice]
            };
            const response = await xero.accountingApi.createInvoices('', invoices);
            //now I need to get invoiceId so I can use emailInvoice.
            console.log('invoices: ', response.body.invoices);
            res.json(response);

            // ###
            // Getting the invoice ID
            const contactIDList = [contactId];
            let invoiceID;
            let invoiceResponse;

            try {
                invoiceResponse = await xero.accountingApi.getInvoices('', undefined, undefined, undefined, undefined, undefined, contactIDList, undefined, undefined, undefined, undefined, undefined, undefined);
                console.log(invoiceResponse.body || invoiceResponse.response.statusCode)
                //I feel like this here isn't right? like should this really be invoices[0] if there's multiple invoices??
                console.log("invoice array length: ", (invoiceResponse.body.invoices.length))
                console.log(contactId)
                invoiceID = invoiceResponse.body.invoices[(invoiceResponse.body.invoices.length-1)].invoiceID;
            } catch (err) {
                const error = JSON.stringify(err.response.body, null, 2)
                console.log(`Status Code: ${err.response.statusCode} => ${error}`);
            }
            // Emailing the invoice
            const requestEmpty: RequestEmpty = { };
            // let emailInvoice;
            try {
                const emailInvoice = await xero.accountingApi.emailInvoice('', invoiceID, requestEmpty);
                console.log('Invoice successfully emailed' || emailInvoice.response.statusCode)
            } catch (err) {
                const error = JSON.stringify(err.response.body, null, 2)
                console.log(`Status Code: ${err.response.statusCode} => ${error}`);
            }

            return res.status(200).json();
            // const getInvoice = await xero.accountingApi.getInvoice('',)
            // const emailInvoice = await xero.accountingApi.emailInvoice()
        }
        

        
    } catch(error){
        res.status(500).send(error)
        console.log(error)
    }


    
   
  }
