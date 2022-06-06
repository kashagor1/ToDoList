const express = require("express");
const bodyParser =  require("body-parser");
const date =  require(__dirname+"/date.js")

const app = express();
let items = ["Buy Food","Eat Food","Cook Food"];
let workItems =  [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/",(req,res)=>{

	let day = date.getDay();
	
	res.render("list",{listTitle:day,newListItems: items}); // {value_to_be_repaced:replacing_value} 

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

app.get("/about",(req,res)=>{
	res.render("about");
});
app.listen(3000,()=>{
	console.log("Server Started on Port 3000");
});