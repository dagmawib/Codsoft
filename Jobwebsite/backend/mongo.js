const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');

mongoose.connect("mongodb://127.0.0.1:27017/JobWeb")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Mongo Error", err));

    

    const userSchema = new mongoose.Schema ({
        email:{},
        name:String,
        image:{
            type:String
        },
        password:String,
        googleId:String
    });
    
    userSchema.plugin(passportLocalMongoose)
    userSchema.plugin(findOrCreate);

    const User = new mongoose.model("User", userSchema);

    const resumeSchema = new mongoose.Schema ({
        Fname:String,
        Lname:String,
        email:String,
        image: String, // Correct file path with the filename
    })
    const Resume = new mongoose.model("Resume", resumeSchema);


module.exports = User, Resume