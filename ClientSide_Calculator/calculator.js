const express=require("express");

/// install body-parser (npm i body-parser);
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));





//////  It is a Back-end Code for Addition On this SERVER
app.get("/",function(req,res){
    // res.send("Wellcome to My Server..");   //////  res.send() :- It help us to send the only text data Not Send The Files
    res.sendFile(__dirname+"/index.html");     ///// _____dirname:- It will give the full path
});

app.post("/",function(req,res){
    
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result=n1+n2;
    
    res.send("Thanks For Your All Of this... "+result);
});


//////  This Code is for BMI Calculator    On This SERVER
app.get("/bmiCalculator",function(req,res){
    // res.send("It is Working......");
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmiCalculator",function(req,res){
    var weightt=Number(req.body.weight);
    var heightt=Number(req.body.height);
    var bmi=weightt/(heightt*heightt);
    res.send("Your BMI: "+ bmi);
});





//////////  It Listen The App
const PORT=4000;
app.listen(PORT,function(){
    console.log(`Server Started on PORT: ${PORT}.....`);
});