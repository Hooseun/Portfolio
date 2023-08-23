require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const projectsRoutes = require('./src/routes/projects');
const adminRoutes = require('./src/routes/admin');
const cors = require('cors');

const app = express();

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