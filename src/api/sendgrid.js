// export default function handler(req, res) {
//     if (req.method === `POST`) {
//         console.log("basic still works")
//         return res.status(200).json({ message: "work", error: "dsfds" })
//     } else {
//       // Handle other methods or return error
//       console.log("basic still works2")
//       return res.status(500).json({ message: "There was an error", error: "dfsdf" })
//     }
//   }



// import fetch from "node-fetch"



// using gatsby example with dynamic data
// const fetch = require("node-fetch")
const sendgrid = require("@sendgrid/mail")
//Your API Key from Sendgrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
const message = {
  //Your authorized email from SendGrid
  from: process.env.SENDGRID_AUTHORIZED_EMAIL,
}

//so without this seciton and node-fetch it works

// async function validateHuman(token){
//     console.log("validate human running")
// const secret = process.env.RECAPTCHA_KEY;
// const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
//     {
//         method: "POST",
//     } 
// )
// //this is where It's failing??
// const data = await response.json();
// return data.success;
// }


//main function
export default async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log("This is where the req should be logging")
    // console.log(req.body);

    //this is where I'm getting response error, validate token function above
    // const human = await validateHuman(req.body.token);
    const human = true;
    if (!human){
        console.log("this message shows we're getting to the !human part")
        res.status(400);
        res.json({errors: ["Please, you're not fooling us, bot."]})
        return;
    }

    try {
        if (req.method !== "POST") {
        res.json({ message: "Try a POST!" })
        }
        if (req.body) {
            console.log(req.body)
            let spam = "";
            if(req.body.Fax || req.body.NZ){
                spam = " (spam)"
            }
                message.to = "danielkingballoch@gmail.com"
                message.from = "sales@glacier.nz";
                message.subject = "Glacier support form submission from "+ req.body.name + spam
                message.text = "Name: " + req.body.name + " Phone: " + req.body.phone + " Email: " + req.body.email + " Message: " + req.body.message  
                message.html = "Name: " + req.body.name + "<br/>" + " Phone: " + req.body.phone + "<br/>" + " Email: " + req.body.email + "<br/>" + "<br/>" + " Message: " + req.body.message 
            }
        return sendgrid.send(message).then(
        () => {
            //send backup & support email
            message.subject = "(Backup) Glacier support form submission from "+ req.body.name;
            message.to = "daniel@thoughtfulhq.com"
            sendgrid.send(message);
                message.to = req.body.email
                message.subject = "Hey " + req.body.name + " your Glacier support form has been submitted!"
                message.text = "Name: " + req.body.name + " Phone: " + req.body.phone + " Email: " + req.body.email + " Message: " + req.body.message  
                message.html = "Hey " + req.body.name + ",<br/>Thanks for the enquiry.<br/><br/> Your support form message has been hauled down to Glacier International headquarters on the back of one of our hybrid Tundra's. As soon as our support crew can stop admiring the machinery, one of them will read through and be in touch to help! (We generally reply in less than 24hrs, for a quicker reply time please call .........)<br/><br/><em> Your message: " + req.body.message + "</em>"
                sendgrid.send(message);
            res.status(200).json({
            message: "I will send email",
            });
        },
        error => {
            console.error(error)
            if (error.response) {
            return res.status(500).json({
                error: error.response,
            })
            }
        }
        )
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "There was an error", error: err })
    }
}
