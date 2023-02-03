const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");// Install body-parser (npm i body-parser)

const app=express();
app.use(bodyParser.urlencoded({extended:true})); // IMPORTANT to app use body-parser

/*
Body-parser parses is an HTTP request body that usually helps when you need 
to know more than just the URL being hit. Specifically 
in the context of a POST, PATCH, or PUT HTTP request 
where the information you want is contained in the body. 
Using body-parser allows you to access req.
*/


app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});

app.post("/",function(req,res){
    console.log(req.body.cityName); // It will Console the City Input feild("USER") With the help of bodyParser
});


var PORT=2000;
app.listen(PORT,function(){
    console.log(`Server Started on PORT: ${PORT}.....`);
});






// const url="https://api.openweathermap.org/data/2.5/weather?q=delhi&country=india&appid=a791b9299ff1bb320e9512883120b89b&units=metric";
    
//     https.get(url,function(response){
//         console.log(response.statusCode);

        
//         response.on("data",function(data){
//             // console.log(data);   HexaCode ans
//             const weatherData=JSON.parse(data)
//             const temp=weatherData.main.temp
//             const weatherDescription=weatherData.weather[0].description
//             const weatherReport= JSON.parse(data); //JSON.parse:-convert the data into JSON format.
//             const icon=weatherData.weather[0].icon;//-------~||||| niche toh dekho(imgURL)
//             const imgURL="http://openweathermap.org/img/wn/"+ icon +"@2x.png";// img of Weather Condition

            
//             // important for use HTML tags inside res.write
//             res.setHeader("Content-Type", "text/html"); /// IMPORTANT-> USE HTML TAGS
//             res.write(`<p>The weather is currently ${weatherDescription}.</p>`); //res.write:- will help us to send multiple "res.write"=(inverse of "res.send"). 
//             res.write(`<h1> The temperature in <i> Delhi,India </i>is ${temp} <i> degree </i> Celcius.</h1>`);
//             res.write(`<img src="${imgURL}">`); //Send images to the page.
//             res.send()  // res.send :- will help us to send the request :: It should be one in app (inserve of res.write)
//         });
//     });