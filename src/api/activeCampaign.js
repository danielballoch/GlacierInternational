import fetch from "node-fetch"
//post contact
//first need to check contact isn't in database
//this is all good for xero initial data but need to change for 

//need to add check for if email address already exists
export default async(req, res) => {
    //first step is I need to get contact based on name
    console.log(req.body)
   
    const url2 = `https://glacier.api-us1.com/api/3/contacts?email=${req.body.email}`;
    const options2 = {method: 'GET', headers: {accept: 'application/json','content-type': 'application/json',
    'Api-Token': '8acea08daabd9aac50ba58c8edda55ea9746d45b9d53451de62da2cc53b1755863530396'}};
    console.log("url2: ",url2)
    let contactID;
    //check for contact
    try {
        const contacts = await fetch(url2, options2)
        const response = await contacts.json()
        if(response && response.contacts[0]){
            contactID = response.contacts[0].id
            //if contact exists do something here
            console.log("Contact Id: ", contactID)
            return res.status(200).json(contactID);
        } else {
            //otherwise create contact
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
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                fieldValues: [
                    {
                        field: 1,
                        value: req.body.order
                    }
                ]
                }
            })
            };
            try {
                const contacts = await fetch(url, options)
                const response = await contacts.json()
                const getID = await fetch(url2,options2)
                const Contact = await getID.json()
                let ID;
                if (Contact && Contact.contacts[0]){
                    ID = Contact.contacts[0].id
                    const url3 = 'https://glacier.api-us1.com/api/3/contactTags';
                    const options3 = {
                        method: 'POST',
                        headers: {accept: 'application/json', 'content-type': 'application/json',
                        'Api-Token': '8acea08daabd9aac50ba58c8edda55ea9746d45b9d53451de62da2cc53b1755863530396'},
                        body: JSON.stringify({contactTag: {contact: ID, tag: 3}})
                    };
                    try {
                        const addTag = await fetch(url3, options3);
                        const tagResponse = await addTag.json()
                        console.log("tag response", tagResponse);
                        return res.status(200).json(ID);

                    } catch(err) {
                        const error = JSON.stringify(err)
                        console.log(err)
                        console.log(`Problem adding contact`, error);
                        return res.status(500).json(error)
                    }
                    
                    //now add tag
                }
                console.log("ID: ", ID)
                //then get contactID, and post tag (hardcode tagID for now)
                return res.status(200).json(ID)
            } catch(err) {
                const error = JSON.stringify(err)
                console.log(err)
                console.log(`Problem adding contact`, error);
                return res.status(500).json(error)
            }

        }    
    // res.status(200).json(response)
    } catch(err) {
        const error = JSON.stringify(err)
        console.log(err)
        console.log(`Problem adding contact`, error);
        // res.status(500).json(error)
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


