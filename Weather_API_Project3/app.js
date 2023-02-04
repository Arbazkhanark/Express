const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");// Install body-parser (npm i body-parser)

const app=express();
app.use(bodyParser.urlencoded({extended:true})); 




app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});

app.post("/",function(req,res){

    const query=req.body.cityName;
    const key="a791b9299ff1bb320e9512883120b89b";
    const unit="metric";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=${unit}`;
    
    https.get(url,function(response){
        console.log(response.statusCode);

        
        response.on("data",function(data){
            // console.log(data);   HexaCode ans
            const weatherData=JSON.parse(data)
            const temp=weatherData.main.temp
            const weatherDescription=weatherData.weather[0].description
            const weatherReport= JSON.parse(data); 
            const icon=weatherData.weather[0].icon;
            const imgURL="http://openweathermap.org/img/wn/"+ icon +"@2x.png";

            
            // important for use HTML tags inside res.write
            res.setHeader("Content-Type", "text/html"); /// IMPORTANT-> USE HTML TAGS
            res.write(`<p>The weather is currently <b> <em> ${weatherDescription}</em> <b>.</p>`);
            res.write(`<h1> The temperature in <i> ${query} </i>is ${temp} <i> degree </i> Celcius.</h1>`);
            res.write(`<img src="${imgURL}">`); 
            res.send() 
        });
    });
});


var PORT=2000;
app.listen(PORT,function(){
    console.log(`Server Started on PORT: ${PORT}.....`);
});