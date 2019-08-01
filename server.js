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

app.listen(PORT, err => {
    if (err) {
     console.log(err);
    } else {
     console.log("And We are live!!!!!!");
    }
    });