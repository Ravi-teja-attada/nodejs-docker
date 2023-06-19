const express = require("express");

const app = express();

var port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmi", function(req, res){

    var n1 = Number(req.body.wt);
    var n2 = Number(req.body.ht);
    var bmi = (n1/(n2*n2));
    res.send("Your BMI value is " + bmi);
});

app.listen(port, function(req, res){
    console.log("Server started with port 3000");
});