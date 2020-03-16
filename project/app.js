var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/pics", function(req, res){
    var pics = [
        {title: "bailey's first pic", image: "https://images.unsplash.com/photo-1518587671104-999f3dd2d340?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
        {title: "bailey's first icecream", image: "https://images.unsplash.com/photo-1562176551-548d3e8830c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
        {title: "bailey's first apple", image: "https://images.unsplash.com/photo-1524549110215-6624d76a0b0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
    ]

    res.render("pics", {pics:pics});
});
// http://localhost:3000/
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Bailey's server has started!");
});