// touch server.js

//npm init

// npm install express

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

// we get a get request from a browser that is targeting this route, which is the home route,
//then we're going to respond with this callback.
//Now we can respond to different routes
app.post("/bmicalculator", function(req, res){
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let result = weight / (height*height);
  res.send("Your BMI: " + result);
}); 


app.listen(3000, function(){
  console.log("Server started on port 3000");
}); 


// app.listen(3000, function(){
//   console.log("Server started on port 3000");
// }); 