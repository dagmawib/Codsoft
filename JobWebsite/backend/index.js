const express = require("express");
const app = express();


app.get("/api", function(req,res){
    res.json({message:"Api is started successfully"});
})

app.listen("3001", function(req,res){
    console.log("Server started on port 5000");
} )