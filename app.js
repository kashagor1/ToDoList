const express = require("express");
const bodyParser =  require("body-parser");

const app = express();
let items = ["Buy Food","Eat Food","Cook Food"];
let workItems =  [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
	let today = new Date();
	let options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	}
	let cDay = today.toLocaleDateString("en-US",options);

	res.render("list",{listTitle:cDay,newListItems: items}); // {value_to_be_repaced:replacing_value} 

});
app.post("/",(req,res)=>{
	item =  req.body.newtask;
	if(req.body.list === "Work"){
			workItems.push(item);
			res.redirect("/work");
	}else{
		items.push(item);
		res.redirect("/");
	}
});
app.get("/work",(req,res)=>{
	res.render("list",{listTitle:"Work",newListItems:workItems});
});
app.listen(3000,()=>{
	console.log("Server Started on Port 3000");
});