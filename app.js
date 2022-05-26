
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//therefore making a collections
var items = ["Buy food","Cook food","Eat food"]

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))

//setting up the get request
app.get("/",function(req,res){
    var today = new Date()
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US",options);
    
    res.render("list",{kindOfDay: day, newListItems : items});
})

//making and handling the POST request
app.post("/",function(req,res){
    var item = req.body.newItem
    items.push(item);
    res.redirect("/");
})

//setting up the server
app.listen(3000, function(){
    console.log("Server started on port 3000")
})

