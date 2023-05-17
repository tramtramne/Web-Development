
const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req,res){
  console.log(req.body.num1);

  res.send("Thank you for posting");
})

app.listen(3000,function(){
  console.log("Hello everybody")
});