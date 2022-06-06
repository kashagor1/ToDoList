const express = require("express");
const bodyParser =  require("body-parser");

const app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
	var today = new Date();
	var cDay = '';
	
	switch(today.getDay()){
		case 0:
			cDay = "Sunday";
			break;
		case 1:
			cDay = "Monday";
			break;
		case 2:
			cDay = "Tuesday";
			break;
		case 3:
			cDay = "Wednesday";
			break;
		case 4:
			cDay = "Thursday";
			break;
		case 5:
			cDay = "Friday";
			break;
		case 6:
			cDay = "Saturday";
			break;
		default:
		console.log("Error current is equal to: "+today.getDay());
	}

	res.render("list",{currnetDay:cDay}); // {value_to_be_repaced:replacing_value} 

});

app.listen(3000,()=>{
	console.log("Server Started on Port 3000");
})