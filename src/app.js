const {getNews}= require("./news");
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const PORT = process.env.PORT || 3000;
const pubDir = path.join(__dirname, "../public/");
const viewsPath = path.join(__dirname, "../templates/views");
const hbsPath = path.join(__dirname, "../templates/partials");


app.use(express.static(pubDir));

app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(hbsPath)

app.get('',(req,res)=>{
    res.render("index",{});
});

app.get('/news', (req, res) => {
    
   getNews((error, response) => {
        if (error) {
            return res.send(error);

        } else {
            return res.send(response.body)
        }
    });

});
app.get('/about', (req, res) => {
    
  res.render("about")

});
app.get('/help', (req, res) => {
    
  res.render("help",{content:"Frontend of this project is under construction 🚧",contribute:"you can contribute to this project <a href='www.github.com/Aayushadh'>here</a>"})

});

app.listen(PORT);
