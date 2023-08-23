require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const projectsRoutes = require('./routes/projects');
const adminRoutes = require('./routes/admin');
const cors = require('cors'); // Import the 'cors' module

const app = express();

// Set up CORS middleware
app.use(cors());

app.use(express.json());

// Middleware for logging request information
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
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