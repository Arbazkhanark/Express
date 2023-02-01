
const express=require("express");

const app=express();

app.get("/",function(req,res){
    // res.send("Wellcome to My Server..");   //////  res.send() :- It help us to send the only text data Not Send The Files
    res.sendFile(__dirname+"/index.html");     ///// _____dirname:- It will give the full path
});

const PORT=4000;
app.listen(PORT,function(){
    console.log(`Server Started on PORT: ${PORT}.....`);
});