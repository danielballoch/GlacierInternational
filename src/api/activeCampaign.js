import fetch from "node-fetch"
//post contact
//first need to check contact isn't in database
//this is all good for xero initial data but need to change for 
export default async(req, res) => {
    console.log(req.body)
    const url = 'https://glacier.api-us1.com/api/3/contacts';
    const options = {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'Api-Token': '8acea08daabd9aac50ba58c8edda55ea9746d45b9d53451de62da2cc53b1755863530396'
    },
    body: JSON.stringify({
        contact: {
        email: req.email,
        firstName: req.firstName,
        lastName: req.lastName,
        phone: req.phone
        }
    })
    };
    try {
        console.log("123")
        const contacts = await fetch(url, options)
        const response = await contacts.json()
        return res.status(200).json(response)
    } catch(err) {
        const error = JSON.stringify(err)
        console.log(err)
        console.log(`Problem adding contact`, error);
        return res.status(500).json(error)
    }

}
//might want to use a test api key
// export default async(req, res) => {

//     try {
//         // const contacts = await fetch('https://thoughtfulhq.api-us1.com/api/3/contacts', {
//         //     method: 'GET',
//         //     headers: {'Api-Token': '1615b3507648341b0bb6ce8fb4fb246da5781058caaee10656c44793c60876928fa72f69'}
//         // });
//         // const contacts = await fetch('https://glacier.api-us1.com/api/3/contacts', {
//         //     method: 'GET',
//         //     headers: {'Api-Token': '8acea08daabd9aac50ba58c8edda55ea9746d45b9d53451de62da2cc53b1755863530396'}
//         // });
//         console.log(newContact)
//         const createContact = await fetch('https://glacier.api-us1.com/api/3/contacts', {
//             method: 'POST',
//             body: newContact,
//             headers: {
//                 accept: 'application/json', 'content-type': 'application/json',
//                 'Api-Token': '8acea08daabd9aac50ba58c8edda55ea9746d45b9d53451de62da2cc53b1755863530396'}
//         });
//         const response = await createContact.json()
//         // const response = await contacts.json()
//         console.log(response)
//         return res.status(200).json(response)
//     } catch(err) {
//         const error = JSON.stringify(err, null, 2)
//         console.log(`Problem getting invoiceID`, error);
//         return res.status(500).json(error)
//     }
   
// }

// export default async(req, res) => {

//     try {
//         const KEY = '8acea08daabd9aac50ba58c8edda55ea9746d45b9d53451de62da2cc53b1755863530396';

//         var ac = new ActiveCampaign("https://glacier.api-us1.com", {KEY});

//         // TEST API credentials
//         ac.credentials_test().then(function(result) {
//             // successful request
//             if (result.success) {
//                 console.log("valid acc")
//                 // VALID ACCOUNT
//             } else {
//                 // INVALID ACCOUNT
//                 console.log("invalid acc")
//             }
//         }, function(result) {
//             // request error
//         });

//         // GET requests

//         var account_view = ac.api("account/view", {});
//         account_view.then(function(result) {
//             // successful request
//             console.log(result);
//         }, function(result) {
//             // request error
//             console.log(result);
//         });

//         var contact_exists = ac.api("contact/view?email=test@example.com", {});
//         contact_exists.then(function(result) {
//             // successful request
//             console.log(result);
//         }, function(result) {
//             // request error
//         });
//         return res.status(200).json({message: "form submitted"});

//     } catch (err) {
//         console.log(err)
//         return res.status(500).json({ message: "There was an error", error: err })
//     }
// }


