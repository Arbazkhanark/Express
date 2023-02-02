const express=require("express");

const https=require("https");

const app=express();


app.get("/",function(req,res){

    var url="https://api.openweathermap.org/data/2.5/weather?q=India&appid=a791b9299ff1bb320e9512883120b89b";
    https.get(url,function(response){
        console.log(response);


        response.on("data",function(data){
            // console.log(data);   HexaCode ans
            
            const weatherReport= JSON.parse(data); //JSON.parse:-convert the data into JSON format 3D(3D JSON).:-  Multi-Lines
            // console.log(weatherReport);

            console.log(JSON.stringify(weatherReport)); //JSON.stringify:- convert the Object format to String format 2D(raw JSON).:- Single-Line 
        })
    });

    


    res.send("Wellcome to My server..");
});



var PORT=2000;
app.listen(PORT,function(){
    console.log(`Server Started on PORT: ${PORT}.....`);
});