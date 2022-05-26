
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//therefore making a collections
var items = ["Buy food","Cook food","Eat food"]
var workitems = []

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

//setting up the get request
app.get("/",function(req,res){
    var today = new Date()
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US",options);
    
    res.render("list",{listTitle: day, newListItems : items});
})

//making and handling the POST request
app.post("/",function(req,res){
    var item = req.body.newItem
    if(req.body.list === "Work"){
        workitems.push(item)
        res.redirect("/work")
    }else{
        items.push(item)
        res.redirect("/");
    }
    
})

//targetting the work route
app.get("/work", function(req,res){
    res.render('list', {listTitle: "Work List", newListItems:workitems })
})

//making the post for the work route
app.post("/work", function(req,res){
    var item = req.body.newItem;
    workitems.push(item)
    res.redirect("/work")
})

//setting up the server
app.listen(3000, function(){
    console.log("Server started on port 3000")
})

