///// First We have to Initialize the Node Package Manager:- (npm init).
/////Beffore all of this We have to Install the Express:- (npm install express)

const express=require("express");

const app=express();

const Port=3000;
app.listen(Port,function(){
    console.log(`Server started on Port: ${Port}`);
});


///// node server.js  ::--Server started on Port: 3000  (Output on terminal and Console of that Page).

//Right now It will show Error on Port:3000 (Can't Get) :-- Because we are not sending to that page.