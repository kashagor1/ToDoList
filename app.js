const express = require("express");
const bodyParser =  require("body-parser");

const app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
	var today = new Date();
	if(today.getDay() === 5 || today.getDay() === 6){
		res.write("Yay it's the weekend");
	}else{
		res.sendFile(__dirname+"/index.html");
	}
});

app.listen(3000,()=>{
	console.log("Server Started on Port 3000");
})