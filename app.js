const express = require("express");
const bodyParser =  require("body-parser");

const app = express();
var items = ["Buy Food","Eat Food","Cook Food"];

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
	var today = new Date();
	var options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	}
	var cDay = today.toLocaleDateString("en-US",options);

	res.render("list",{currnetDay:cDay,newListItems: items}); // {value_to_be_repaced:replacing_value} 

});

app.post("/",(req,res)=>{
	item = req.body.newtask;
	items.push(item);
	res.redirect("/");
})
app.listen(3000,()=>{
	console.log("Server Started on Port 3000");
})