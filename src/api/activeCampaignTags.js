import fetch from "node-fetch"

//need to add check for if email address already exists
export default async(req, res) => {
    //first step is I need to get contact based on name
    if (req.body && req.body.ID && req.body.formStage){
        console.log("id: ",req.body.ID)
        console.log("formStage: ",req.body.formStage)
        const ID = req.body.ID;
        let tag;
        if (req.body.formStage === 1){tag = 6} 
        else if (req.body.formStage === 2){tag = 7}
        else if (req.body.formStage === 3){tag = 5} 
        const url = 'https://glacier.api-us1.com/api/3/contactTags';
                    const options = {
                        method: 'POST',
                        headers: {accept: 'application/json', 'content-type': 'application/json',
                        'Api-Token': ACTIVE_CAMPAIGN_API},
                        body: JSON.stringify({contactTag: {contact: ID, tag: tag}})
                    };
                    try {
                        const addTag = await fetch(url, options);
                        const tagResponse = await addTag.json()
                        console.log("tag response", tagResponse);
                        return res.status(200).json(ID);

                    } catch(err) {
                        const error = JSON.stringify(err)
                        console.log(err)
                        console.log(`Problem adding contact`, error);
                        return res.status(500).json(error)
                    }
    }
    return res.status(200).json(req.body)
   
}