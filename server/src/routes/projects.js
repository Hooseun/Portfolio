const express = require('express')
const {
    getProjects,
    createProject,
    deleteProject,
    updateProject,
    getProject
} = require('../controllers/projectControllers')

const router = express.Router()

//get all projects
router.get('/', getProjects)

router.get('/:id', getProject)

//post
router.post('/', createProject)


//delete
router.delete('/:id', deleteProject)

//update
router.patch('/:id', updateProject)

module.exports = router