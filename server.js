///// First We have to Initialize the Node Package Manager:- (npm init).
/////Beffore all of this We have to Install the Express:- (npm install express)

const express=require("express");

const app=express();


/// It will Solve the (cannot GET) Error,,,  Because It will get and send info.
app.get("/",function(reqest,respose){
    respose.send("<h1>Wellcome to my Server</h1>");
});

app.get("/contact",function(req,res){
    res.send("<p>Contact Me At: arbaazkhanark23@gmail.com</p>");
});

app.get("/about",function(req,res){
    res.send("<h3>My name is Arbaaz Khan && I Love to do Code..</h3>");
});

app.get("/hobbies",function(req,res){
    // res.send("<p>Coding</p>");
    res.send("<p>football</p>");      // Only One send is valid
});


const Port=3000;
app.listen(Port,function(){
    console.log(`Server started on Port: ${Port}........`);
});

