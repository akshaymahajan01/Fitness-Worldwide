const express = require('express');
const router = require('./router/router')
const exphbs = require('express-handlebars')

const app = express();
app.use('/',router)


app.set('view engine', 'hbs')
app.engine('hbs' , exphbs.engine({extname : 'hbs' , defaultLayout : 'mainlayout' , layoutsDir : __dirname + '/views/layouts/'}))


app.use(express.static("images"));
app.use(express.static("css"));





app.listen(1111,()=>console.log("server started"));