import fetch from "node-fetch"
import { XeroClient, HistoryRecords, Invoice, Invoices, LineItem, Contact, Contacts, Phone } from 'xero-node';

const xero = new XeroClient({
    clientId: 'A9C32A4AAAB348BBAAD31AF8C62BCE9B',
    clientSecret: '71uTeSllja28yAPV9zF16QItkPXaZ4FXz0FjFiIQO5j00J8L',
    grantType: 'client_credentials'
  });


export default async function postNewPersonHandler(req, res) {
    // POST data to an authenticated API
    const tokenSet = await xero.getClientCredentialsToken();

    await xero.setTokenSet(tokenSet);

    if(tokenSet.expired()){
        const validTokenSet = await xero.refreshToken();
    }
    console.log(req.body);
    let bed;
    if (req.body.bed === 0){bed = " Regular (5.5ft) "} else {bed = " Longbase (6.5ft) "}
    const description = "Deposit Invoice for " + req.body.name + "'s custom " + req.body.model + " order. Order details: " + req.body.model + " " + req.body.grade + bed + req.body.color;

    try {

        const checkContactExists = await xero.accountingApi.getContacts('', undefined, undefined, undefined, undefined, undefined, undefined, undefined, req.body.name);
        if (checkContactExists.body.contacts === undefined || checkContactExists.body.contacts.length === 0){
            //if name is not in Xero contacts already, create contact with form info.
            console.log("name is not in database")
            const contact: Contact = {
                name: req.body.name,
                emailAddress: req.body.email,
                phones: [
                    {
                        phoneNumber: req.body.mobile,
                        phoneType: Phone.PhoneTypeEnum.MOBILE
                    }
                ]
            };
            const contacts: Contacts = {  
                contacts: [contact]
            }; 
            await xero.accountingApi.createContacts('', contacts);
            console.log(contact)
            //now that the contact is created, use the contact & Build My Tundra info to create invoice.
            //need to get accountId, so do check again now that it is created and used the id there
            const getContactId = await xero.accountingApi.getContacts('', undefined, undefined, undefined, undefined, undefined, undefined, undefined, req.body.name)
            console.log("I should be able to get the account created now")
            let contactId;
            if (getContactId.body.contacts !== undefined && getContactId.body.contacts.length !== 0){
                contactId = getContactId.body.contacts[0].contactID;
                console.log(contactId)
            }
            //now that I have id create invoice
            const where = 'Status=="ACTIVE" AND Type=="SALES"';
            const accounts = await xero.accountingApi.getAccounts('', undefined, where);
            // console.log('accounts: ', accounts.body.accounts);
            const contact2: Contact = {
                contactID: contactId
            };
            const lineItem: LineItem = {
                accountID: '',
                description: description,
                quantity: 1.0,
                accountCode: "200",
                unitAmount: req.body.price/10
            };
            const invoice: Invoice = {
                lineItems: [lineItem],
                contact: contact2,
                dueDate: '2009-09-25',
                date: '2009-09-24',
                reference: "custom Tundra reference",
                status: Invoice.StatusEnum.AUTHORISED,
                type: Invoice.TypeEnum.ACCREC
            };
            const invoices: Invoices = {
                invoices: [invoice]
            };
            const response = await xero.accountingApi.createInvoices('', invoices);
            console.log('contact id is: ' + contactId);
            console.log('invoices: ', response.body.invoices);
            res.json(response)
            return res.status(200).json();
        } else {
            console.log("name is in database");
            console.log("Contact id is: " + checkContactExists.body.contacts[0].contactID);
            //check through and make sure existing contact has necessary information to create invoice.
            const where = 'Status=="ACTIVE" AND Type=="SALES"';
            const accounts = await xero.accountingApi.getAccounts('', undefined, where);
            // console.log('accounts: ', accounts.body.accounts);
            const contact: Contact = {
                contactID: checkContactExists.body.contacts[0].contactID
            };
            const lineItem: LineItem = {
                accountID: '',
                item: {name: req.body.model},
                description: description,
                quantity: 1.0,
                accountCode: "200",
                unitAmount: req.body.price/10
            };
            const invoice: Invoice = {
                lineItems: [lineItem],
                contact: contact,
                dueDate: '2009-09-25',
                date: '2009-09-24',
                type: Invoice.TypeEnum.ACCREC
            };
            const invoices: Invoices = {
                invoices: [invoice]
            };
            const response = await xero.accountingApi.createInvoices('', invoices);
            //now I need to get invoiceId so I can use emailInvoice.
            console.log('invoices: ', response.body.invoices);
            res.json(response.body.invoices);
            return res.status(200).json();
            // const getInvoice = await xero.accountingApi.getInvoice('',)
            // const emailInvoice = await xero.accountingApi.emailInvoice()
        }
        
    } catch(error){
        res.status(500).send(error)
        console.log(error)
    }


    
   
  }

