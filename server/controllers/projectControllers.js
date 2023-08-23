const Project = require('../models/projectModel')


//gett all projects
const getProjects = async (req, res) => {
    const projects = await Project.find({})
    res.status(200).json(projects)
}

const getProject = async (req, res) => {
    const {id} = req.params
    const project = await Project.findById(id)
    res.status(200).json(project)
}

//create project
const createProject = async (req, res) => {
    const { proj_name, proj_desc, img, lang } = req.body
    try {
        const project = await Project.create({ proj_name, proj_desc, img, lang })
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteProject = async (req, res) => {
    const projectId = req.params.id;
    
    try {
        const deletedProject = await Project.findByIdAndDelete(projectId);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json({deletedProject});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// update project
const updateProject = async (req, res) => {
    const projectId = req.params.id;
    const  { proj_name, proj_desc, img, lang } = req.body;
    
    try {
        const updatedProject = await Project.findByIdAndUpdate({_id: projectId}, { ...req.body }, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    deleteProject,
    getProjects,
    createProject,
    updateProject,
    getProject
};