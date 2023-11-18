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
const User = require("./User");
const Resume = require("./resumeDB")
const multer = require('multer');
const path = require('path');

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname+"/uploads")); // Save files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Unique file name
  }
});

// Initialize multer upload
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Check file types (if required)
    if (file.fieldname === 'ResumeUpload') {}
    cb(null, true);
  }
}).single('ResumeUpload'); // Assuming your input field's name for the image is 'adImage'




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





app.listen("3001", function(req,res){
    console.log("Server started on port 3001");
} )

/// file uploads
app.post('/postResume', upload, async (req, res) => {
    try {
      if (req.fileValidationError) {
            console.log(req.fileValidationError);
            return res.status(400).send(req.fileValidationError);
        } else if (!req.file) {
            return res.status(400).send('No file uploaded!');
        }
    
      // File uploaded successfully, do further processing
      const newResume = new Resume({
        Fname:req.body.Fname,
        Lname:req.body.Lname,
        email:req.body.email,
        image: "/adImageUploads/" + req.file.filename, // Correct file path with the filename
      });
  
      await newResume.save();
      res.send("uploaded")
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "An error occurred while handling the add-post request." });
    }
  });