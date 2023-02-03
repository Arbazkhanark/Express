const express=require("express");
const https=require("https");
const app=express();


app.get("/",function(req,res){

    const url="https://api.openweathermap.org/data/2.5/weather?q=delhi&country=india&appid=a791b9299ff1bb320e9512883120b89b&units=metric";
    
    https.get(url,function(response){
        console.log(response.statusCode);


        response.on("data",function(data){
            // console.log(data);   HexaCode ans
            const weatherData=JSON.parse(data)
            const temp=weatherData.main.temp
            const weatherDescription=weatherData.weather[0].description
            const weatherReport= JSON.parse(data); //JSON.parse:-convert the data into JSON format 3D(3D JSON).:-  Multi-Lines

            // important for use HTML tags inside res.write
            res.setHeader("Content-Type", "text/html"); /// IMPORTANT-> USE HTML TAGS
            res.write(`<p>The weather is currently ${weatherDescription}.</p>`); //res.write:- will help us to send multiple "res.write"=(inverse of "res.send"). 
            res.write(`<h1> The temperature in <i> Delhi,India </i>is ${temp} <i> degree </i> Celcius.</h1>`);
            res.send()  // res.send :- will help us to send the request :: It should be one in app (inserve of res.write)
        });
    });

    


    // res.send("Wellcome to My server..");
});



var PORT=2000;
app.listen(PORT,function(){
    console.log(`Server Started on PORT: ${PORT}.....`);
});