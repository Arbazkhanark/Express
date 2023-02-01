///// First We have to Initialize the Node Package Manager:- (npm init).
/////Beffore all of this We have to Install the Express:- (npm install express)

const express=require("express");

const app=express();


/// It will Solve the (cannot GET) Error,,,  Because It will get and send info.
app.get("/",function(reqest,respose){
    respose.send("<h1>Wellcome to my Server</h1>")
});

const Port=3000;
app.listen(Port,function(){
    console.log(`Server started on Port: ${Port}........`);
});

