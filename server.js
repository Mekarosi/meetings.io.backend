const express = require("express");
const app = express();
const PORT = 5050;


app.use(express.json());

app.listen(PORT, err => {
    if (err) {
     console.log(err);
    } else {
     console.log("And We are live!!!!!!");
    }
    });