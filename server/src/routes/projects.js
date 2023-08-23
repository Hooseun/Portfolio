const express = require('express');
const {
    getProjects,
    createProject,
    deleteProject,
    updateProject,
    getProject
} = require('../controllers/projectControllers');

const router = express.Router();

// Define your routes here
router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', createProject);
router.delete('/:id', deleteProject);
router.patch('/:id', updateProject);

module.exports = router;