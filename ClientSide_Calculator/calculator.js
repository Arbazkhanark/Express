const express=require("express");

const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

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


const PORT=4000;
app.listen(PORT,function(){
    console.log(`Server Started on PORT: ${PORT}.....`);
});