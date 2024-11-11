const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
//const registerRoute = require("./routes/Register.route");
const app = express();
const port = 3000;
const Routeregister = require('./routes/Register.route');
const LoginIn = require('./routes/Login.route');
//const { default: mongoose } = require('mongoose');
//const mongoosh = require('mongoosh');


const url = 'mongodb+srv://rani2004g2:FMHdCHJtrhNheSq8@cluster0.jpnmd.mongodb.net/Blueskizz';


mongoose.connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
  console.log("connect to the Database");
}).catch((e)=>{
    console.log("connection error guys");
})

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());


const limitter = rateLimit({
    windowMs : 10*60*1000,
    max : 100, // each request according to the Ip 
    message : " time out come later " 
})


app.use(limitter);

app.get('/' , (req,res)=>{

    res.json('hello u done u can do but u have work hard okay baby');
});


app.use('/register',Routeregister);

app.use('/login',LoginIn);


app.listen(port , ()=>{
    console.log(`listing i m ${port}`);
});