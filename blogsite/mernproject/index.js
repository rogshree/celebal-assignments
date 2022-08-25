const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const app = express();
const port = 5000;



dotenv.config({path:'./config.env'});
require('./database/mongoconnection');


app.use(cookieParser());
app.use(express.json());


// const User = require('./schema/userSchema')


app.use(require('./routing/authentication'));
app.get('/blogs',(req,res)=>{
    res.send("hello from blogs")
});



app.listen(port,()=>{
    console.log(`Hello world from ${port} port`)
})