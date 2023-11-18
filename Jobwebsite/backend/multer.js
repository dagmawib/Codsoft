
const multer = require('multer');
const path = require('path');

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname+"/storeResume")); // Save files to the 'uploads' directory
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
    if (file.fieldname === 'adImage') {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'));
      }
    }
    cb(null, true);
  }
}).single('adImage'); // Assuming your input field's name for the image is 'adImage'

module.exports = upload;