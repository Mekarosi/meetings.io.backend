const express = require("express");
const app = express();
const mongo= require("mongoose");
const PORT = 5050;


app.use(express.json());

mongo.connect("mongodb+srv://mekarosi:caroline2411%@cluster0-jiqvx.mongodb.net/test?retryWrites=true&w=majority", err => {
    if (err) {
        console.log("BROKEN");
       
       } else {
        console.log("CONNECTED");
       }  
});


app.post("/meetingschedule", (req, res) => {
    const meetingDetails = req.body
    const meetingschedule = new setmeeting(
        {
            to: meetingschedule.to,
            location: meetingschedule.location,
            subject: meetingschedule.subject,
            timestart: meetingschedule.timestart,
            amountTime: meetingschedule.amountTime,
            body: meetingDetails.body
        }
    )
    meetingschedule.save((err,doc) => {
        if(err) console.log(err)
        return res.json(doc)
    })
})


app.listen(PORT, err => {
    if (err) {
     console.log(err);
    } else {
     console.log("And We are live!!!!!!");
    }
    });