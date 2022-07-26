import React from "react"

export default function Test(){

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();

    
    let currentDate = mm + '/' + dd + '/' + yyyy;
    let lastDate = (new Date(yyyy, mm, 0)).getDate();

    let nextWeek; 
    if (Number(dd) + 7 > lastDate){
        nextWeek = (mm+1) + '/' + (7 + (dd - lastDate)) + '/' + yyyy;
    } else {
        nextWeek = mm + '/' + (dd + 0) + '/' + yyyy;
    }

    return (
        <div>
        
        <h1>This is the test page</h1>
        <p>Current date: {currentDate}</p>
        <p>Current day: {dd}</p>
        <p>Last date: {lastDate}</p>
        <p>New Date: {nextWeek}</p>
        </div>
    )
}