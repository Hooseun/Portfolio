import React, { useEffect, useState } from 'react';
import API_LINK from '../api';
import Background2 from '../assets/bg2.jpg';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

function ProjectCreate() {
    const [projects, setProjects] = useState(null);
    const [project, setProject] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const projectsPerPage = 3; // Number of projects to display per page
    const [newProject, setNewProject] = useState({
        proj_name: '',
        proj_desc: '',
        img: '',
        lang: '',
    });
    const [editingFields, setEditingFields] = useState({
        proj_name: '',
        proj_desc: '',
        img: '',
        lang: '',
    });

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects && projects.slice(indexOfFirstProject, indexOfLastProject);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch(`${API_LINK}/api/projects`);
                const json = await res.json();

                if (res.ok) {
                    setProjects(json);
                }
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const handleEdit = async (projectId) => {
        openEditModal(true);
        try {
            const res = await fetch(`${API_LINK}/api/projects/${projectId}`);
            const json = await res.json();

            if (res.ok) {
                setProject(json);
                setSelectedProjectId(projectId);
                setEditingFields(json); // Set the editingFields with the fetched project details
            }
        } catch (error) {
            console.error('Error fetching project details:', error);
        }
    };

    const handleEditProject = async () => {
        try {
            const updatedProject = {
                proj_name: editingFields.proj_name,
                proj_desc: editingFields.proj_desc,
                img: editingFields.img,
                lang: editingFields.lang,
            };

            const res = await fetch(`${API_LINK}/api/projects/${selectedProjectId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProject),
            });

            if (res.ok) {
                // Update the projects list after editing
                closeEditModal(); // Close the Edit Project modal
                window.location.reload();
            }
        } catch (error) {
            console.error('Error editing project:', error);
        }
    };

    const handleDelete = async (projectId) => {
        try {
            const res = await fetch(`${API_LINK}/api/projects/${projectId}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                // Remove the deleted project from the projects array
                setProjects(projects.filter((project) => project._id !== projectId));
            }
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openEditModal = () => {
        setIsEditModalOpen(true);
    }

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    }

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "img") {
            setNewProject({ ...newProject, img: files[0] });
        } else {
            setNewProject({ ...newProject, [name]: value });
        }
    };

    const handleEditInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "img") {
            setEditingFields({ ...editingFields, img: files[0] });
        } else {
            setEditingFields({ ...editingFields, [name]: value });
        }
    };

    const handleAddProject = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append('proj_name', newProject.proj_name);
            formData.append('proj_desc', newProject.proj_desc);
            formData.append('img', newProject.img);
            formData.append('lang', newProject.lang);
    
            // Send the form data to the /api/upload route to upload the image
            const imageRes = await fetch(`${API_LINK}/api/upload`, {
                method: 'POST',
                body: formData,  
            });
            const imageJson = await imageRes.json();
            if (imageRes.ok) {
                closeModal();
                window.location.reload();
            }
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };

    const handleSignOut = () => {
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen" style={{ backgroundImage: `url(${Background2})` }}>
            <div className="text-right pt-4 pr-4">
                <button className="text-blue-500" onClick={handleSignOut}>
                    Sign Out
                </button>
            </div>
            <div className="text-center pt-5">
                <h2 className="text-4xl font-bold text-blue-500">Projects</h2>
                <div className="flex flex-wrap justify-center mt-8">
                    {currentProjects &&
                        currentProjects.map((project) => (
                            <div
                                key={project._id}
                                className="bg-white rounded-lg shadow-md p-4 m-4 h-[28rem]"
                                style={{
                                    width: '300px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    position: 'relative',
                                }}
                            >
                                <div className="flex justify-end space-x-2">
                                    <button onClick={() => handleEdit(project._id)} title="Edit">
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => handleDelete(project._id)} title="Delete">
                                        <FaTrash />
                                    </button>
                                </div>
                                <div className='flex flex-wrap justify-center'>
                                    <h3 className="text-xl font-bold mb-2">{project.proj_name}</h3>
                                    <img
                                        src={project.img.includes('http') ? project.img : `${API_LINK}${project.img}`}
                                        alt={project.proj_name}
                                        className="w-full h-[19rem]  object-cover mb-2 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-700 mb-2">{project.proj_desc}</p>
                                    <p className="text-blue-500">{project.lang}</p>
                                </div>
                            </div>
                        ))}
                </div>
                {projects && projects.length > projectsPerPage && (
                    <div className="flex justify-center mt-2">
                        {/* Pagination buttons */}
                        {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
                            <button
                                key={index}
                                className={`mx-2 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                                    }`}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                )}
                <div className="text-center mt-6">
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" onClick={openModal}>
                        Add Project
                    </button>
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-4 rounded-md">
                            <h2 className="text-2xl font-bold mb-4">Add Project</h2>
                            <form encType="multipart/form-data" method="POST" onSubmit={handleAddProject}>
                                <div className="mb-4">
                                    <label htmlFor="proj_name" className="block text-gray-700 font-bold mb-2">
                                        Project Name
                                    </label>
                                    <input
                                        type="text"
                                        id="proj_name"
                                        name="proj_name"
                                        className="w-full px-4 py-2 border border-gray-400 rounded"
                                        required
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="proj_desc" className="block text-gray-700 font-bold mb-2">
                                        Project Description
                                    </label>
                                    <textarea
                                        id="proj_desc"
                                        name="proj_desc"
                                        className="w-full px-4 py-2 border border-gray-400 rounded"
                                        required
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <button onClick={handleAddProject} className="block text-gray-700 font-bold mb-2">
                                        Image (Browse File)
                                    </button>
                                    <input
                                        type="file"
                                        id="img"
                                        name="img"
                                        className="w-full px-4 py-2 border border-gray-400 rounded"
                                        required
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lang" className="block text-gray-700 font-bold mb-2">
                                        Project Language
                                    </label>
                                    <input
                                        type="text"
                                        id="lang"
                                        name="lang"
                                        className="w-full px-4 py-2 border border-gray-400 rounded"
                                        required
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" onClick={handleAddProject}>
                                        Add
                                    </button>
                                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 ml-2" onClick={closeModal}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {isEditModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-4 rounded-md">
                            <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
                            <div className="mb-4">
                                <label htmlFor="proj_name" className="block text-gray-700 font-bold mb-2">
                                    Project Name
                                </label>
                                <input
                                    type="text"
                                    id="proj_name"
                                    name="proj_name"
                                    className="w-full px-4 py-2 border border-gray-400 rounded"
                                    required
                                    value={editingFields.proj_name}
                                    onChange={handleEditInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="proj_desc" className="block text-gray-700 font-bold mb-2">
                                    Project Description
                                </label>
                                <textarea
                                    id="proj_desc"
                                    name="proj_desc"
                                    className="w-full px-4 py-2 border border-gray-400 rounded"
                                    required
                                    value={editingFields.proj_desc}
                                    onChange={handleEditInputChange}
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="img" className="block text-gray-700 font-bold mb-2">
                                    Image (Browse File)
                                </label>
                                <input
                                    type="file"
                                    id="img"
                                    name="img"
                                    className="w-full px-4 py-2 border border-gray-400 rounded"
                                    required

                                    onChange={handleEditInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lang" className="block text-gray-700 font-bold mb-2">
                                    Project Language
                                </label>
                                <input
                                    type="text"
                                    id="lang"
                                    name="lang"
                                    className="w-full px-4 py-2 border border-gray-400 rounded"
                                    required
                                    value={editingFields.lang}
                                    onChange={handleEditInputChange}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" onClick={handleEditProject}>
                                    Save Changes
                                </button>
                                <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 ml-2" onClick={closeEditModal}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectCreate;