const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema ({
    Fname:String,
    Lname:String,
    email:String,
    image: String, // Correct file path with the filename
});
const Resume = new mongoose.model("Resume", resumeSchema);


module.exports = Resume