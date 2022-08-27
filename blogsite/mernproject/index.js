const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session")
const cors = require('cors');
const app = express();
const port = 5000;



dotenv.config({path:'./config.env'});
require('./database/mongoconnection');


app.use(cookieParser());
app.use(express.json());
app.use(
    cookieSession({
      secret: 'yourSecret',
      secure: process.env.NODE_ENV === 'development' ? false : true,
      httpOnly: process.env.NODE_ENV === 'development' ? false : true,
      sameSite: process.env.NODE_ENV === 'development' ? false : 'none',
    }),
  );
  
  app.enable('trust proxy');
  
  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    }),
  );
app.use(require('./routing/authentication'));
app.get('/blogs',(req,res)=>{
    res.send("hello from blogs")
});
app.listen(port,()=>{
    console.log(`Hello world from ${port} port`)
})