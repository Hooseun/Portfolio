require('dotenv').config();

const Project = require('./src/models/projectModel')
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid'); // For generating unique filenames
const path = require('path');
const projectsRoutes = require('./src/routes/projects');
const adminRoutes = require('./src/routes/admin');
const cors = require('cors');
const cloudinary = require('cloudinary').v2; // Import the Cloudinary library

const app = express();

app.use(cors());
app.use(express.json());

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Middleware for logging request information
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Multer configuration
const storage = multer.diskStorage({});

const upload = multer({ storage: storage });

// Route for handling image uploads
app.post('/api/upload', upload.single('img'), async (req, res) => {
  try {
    const imagePath = req.file.path; // Path of the uploaded image
    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(imagePath, { folder: 'project-images' });

    const project = await Project.create({
      proj_name: req.body.proj_name,
      proj_desc: req.body.proj_desc,
      img: result.secure_url,
      lang: req.body.lang,
    })

    res.status(200).json(project);
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'An error occurred while uploading the image.' });
  }
});
// Routes
app.use('/api/projects', projectsRoutes);
app.use('/api', adminRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to db and listening on', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to El's Porfolio API",
    usage: [
      "GET /api/projects to look at my past projects",
      "GET /api/ to look at my admin account",
    ],
  });
});

module.exports = app;
