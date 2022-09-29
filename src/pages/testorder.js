import React, {useState,useEffect} from "react"

export default function TestOrder({location}){
    const [info, setInfo] = useState();
    const ID = location.search.substring(1);
    console.log("ID: ", ID)
    console.log(location)
    //data is in location.search
    useEffect(() => {
        fetch('/api/xero3', {
            method: 'POST',
            body: JSON.stringify({
                ID: ID,
            }),
            headers: {
              "content-type": `application/json`,
            },
        }).then(res => res.json())
        .then(body => {
            // setInfo(body.contacts[0])
            console.log(body)
            let testBuild = "Blueprint 2023 Sequoia Limited Hybrid TRD OFF ROAD bed option: 2 $265000"
            console.log(body.fieldValues[0].value)
            setInfo({build: body.fieldValues[0].value,firstname: body.contact.firstName, lastname: body.contact.lastName, phone: body.contact.phone, email: body.contact.email})
            let model2 = body.fieldValues[0].value.split(" ")
            console.log(model2)
            // let findModel = body.fieldValues[0].value.indexOf("2023");
            // let findBed = body.fieldValues[0].value.indexOf("bed");
            // console.log(findModel)
            // let model = body.fieldValues[0].value.substr(findModel,12)
            // console.log(model)

            //test sequoia
            let space = 13;
            if(testBuild.match("2023 Tundra")){space = 12}
            console.log("space: ",space)
            let findBed = testBuild.indexOf("bed");
            let findModel = testBuild.indexOf("2023");
            let model = testBuild.substr(findModel, 12);
            console.log(model);
            let color = testBuild.substr(0, findModel);
            console.log(color);
            let grade = testBuild.substr(findModel+space,findBed-(findModel+space))
            console.log(grade)
            let bed = testBuild.substr(findBed, 13)
            console.log(bed)
            let price = testBuild.substr(findBed+14, 8)
            console.log(price)
            // console.log(price)
            // let color = body.fieldValues[0].value.substr(0, findModel);
            // console.log(color);
            // let grade = body.fieldValues[0].value.substr(findModel+12,findBed-(findModel+12))
            // console.log(grade)
            // let bed = body.fieldValues[0].value.substr(findBed, 13)
            // console.log(bed)
            // let price = body.fieldValues[0].value.substr(findBed+14, 8)
            // console.log(price)
        })
        .catch((error) => alert(error))
    },[])
    console.log(info)
    return(
        <div>
        <h1>Info I need:</h1>
            <p>Build: {info? info.build : ""}</p>
            <p>I really just need to display that and then take them to the second stage of the form</p>
            <p></p>
            <p>firstname: {info? info.firstname : ""}</p>
            <p>lastname: {info? info.lastname : ""}</p>
            <p>phone: {info? info.phone : ""}</p>
            <p>email: {info? info.email : ""}</p>
        </div>
    )
}