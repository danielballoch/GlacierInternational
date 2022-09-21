const sendgrid = require("@sendgrid/mail")
//Your API Key from Sendgrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
let message = {
}

//main function
export default async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log("This is where the req should be logging")

    try {
        if (req.method !== "POST") {
            res.json({ message: "Try a POST!" })
        }
        if (req.body) {
                console.log(req.body)
                message.to = "sales@glacier.nz"
                message.from = "sales@glacier.nz";
                message.subject = "(Backup) Glacier Initial form section completed by " + req.body.firstname
                message.text = "Name: " + req.body.name + " Phone: " + req.body.phone + " Email: " + req.body.email
                message.html = "Name: " + req.body.firstname + " " + req.body.lastname + "<br/>" + " Phone: " + req.body.phone + "<br/>" + " Email: " + req.body.email 
            }
        return sendgrid.send(message).then(
            () => {
                message.to = "daniel@thoughtfulhq.com"
                sendgrid.send(message);
                console.log("message should be sent");
                res.status(200).json({message: "form submitted"});
            }
        
        )
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "There was an error", error: err })
    }
}
