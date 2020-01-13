var express = require("express");
var app = express();
var hbs = require("hbs");

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.urlencoded());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.get("/index", function(req, res) {
    res.render("index.hbs", {title: "Index Page", header: "This is the Index Page", lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laudantium iusto saepe. Expedita, tempore? Consequatur, mollitia qui a iusto eaque voluptates ipsa inventore illum. Vero tenetur nesciunt quo. Perspiciatis, architecto."});
});

app.get("/form", function(req, res) {
    res.render("form.hbs", {junk: "my form page"});
});

app.post("/results", function(req, res) {
    console.log(req.body);
    res.render("results.hbs", {junk: `${req.body.name} ${req.body.email} ${req.body.comments}`});
});

app.get("/about", function(req,res) {
    res.render("about.hbs", {title: "About Page", header: "This is the About Page", loremOne: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laudantium iusto saepe. Expedita, tempore? Consequatur, mollitia qui a iusto eaque voluptates ipsa inventore illum. Vero tenetur nesciunt quo. Perspiciatis, architecto.", loremTwo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laudantium iusto saepe. Expedita, tempore? Consequatur, mollitia qui a iusto eaque voluptates ipsa inventore illum. Vero tenetur nesciunt quo. Perspiciatis, architecto."})
});

app.listen(3000, () => {console.log('Server running on port 3000 http//localhost:3000/index')});