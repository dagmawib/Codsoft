
// exports.handleAddPost = async (req, res) => {
//     try {
//       if (req.fileValidationError) {
//             console.log(req.fileValidationError);
//             return res.status(400).send(req.fileValidationError);
//         } else if (!req.file) {
//             return res.status(400).send('No file uploaded!');
//         }
    
//       // File uploaded successfully, do further processing
//       const newAd = new Ad({
//         Fname:req.body.Fname,
//         Lname:req.body.Lname,
//         email:req.body.email,
//         image: "/adImageUploads/" + req.file.filename, // Correct file path with the filename
        
//       });
  
//       await newAd.save();
//       res.redirect('/postResume')
//     } catch (error) {
//       console.error("Error:", error);
//       res.status(500).json({ error: "An error occurred while handling the add-post request." });
//     }
//   };