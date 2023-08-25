import React, { useEffect, useState } from 'react';
import API_LINK from '../api';
import Navbar from '../components/Navbar';
import Background2 from '../assets/bg2.jpg';

function Project() {
  const [projects, setProjects] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const projectsPerPage = 3; // Number of projects to display per page

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

  // Calculate the index range of projects to display based on current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects && projects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${Background2})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Navbar />
      <div className="text-center pt-[4rem]">
        <h2 className="text-4xl font-bold text-blue-500">Projects</h2>
        <div className="flex flex-wrap justify-center mt-8 sm:flex-col md:flex-col sm:items-center md:items-center">
          {currentProjects &&
            currentProjects.map((project) => (
              <div
                key={project._id}
                className="bg-white rounded-lg shadow-md p-4 m-4 sm:h-[20rem] md:h-[29rem] lg:h-[29rem] xl:h-[32rem]"
                style={{ width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.proj_name}</h3>
                  <img
                    src={project.img}
                    alt={project.proj_name}
                    className="w-full sm:h-[12rem] md:h-[20rem] lg:h-[21rem] xl:h-[24rem] object-cover mb-2 rounded-lg "
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
          <div className="">
            {/* Pagination buttons */}
            {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
              <button
                key={index}
                className={`mx-2 px-3 py-1 rounded-full ${
                  currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
