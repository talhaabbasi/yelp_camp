var express = require("express");
var app = express();
var bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104490f2c07fa3e5bdb9_340.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
    {name: "Mountains Goat's Rest", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"}
    
]

app.get("/",function(req,res)
{
    res.render("landing");
})

app.get("/campgrounds",function(req,res)
{
    res.render("campgrounds",{campgrounds:campgrounds});
})

app.post("/campgrounds",function(req,res)
{
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
})

app.get("/campgrounds/new",function(req,res)
{
    res.render("new");  
})

app.listen(3000,function() {
    console.log("YelpCamp has started");
})