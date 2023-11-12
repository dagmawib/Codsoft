// import 'dotenv/config'
require('dotenv').config()
const express = require("express");
const session = require('express-session');
const passport = require("passport");
const cors = require("cors");
// const cookieSession = require("cookie-session");
const app = express();
const passportSetUp = require("./passport");
const authRoute = require("./route/auth");
const User = require("./mongo");
// app.use(
//     cookieSession({
//         name:'Session',
//         keys:['djobs'],
//         maxAge:24*60*60*100
//     })
// );
app.use(session({
    secret:"Codsoft JobWebsite first secret",
    resave: false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin:"http://localhost:3000",
        methods:"GET,POST,PUT,DELETE",
        credentials:true
    })
)


///////////////////////


app.get("/api", function(req,res){
    res.json({message:"Api is started successfully"});
})
app.use("/auth",authRoute);


app.listen("5000", function(req,res){
    console.log("Server started on port 5000");
} )