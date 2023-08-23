import React from 'react';
import Navbar from '../components/Navbar';
import Background2 from '../assets/bg2.jpg';
import { useEffect, useState } from 'react';

function Project() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/projects');
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

  return (
    <div className="h-screen" style={{ backgroundImage: `url(${Background2})` }}>
      <Navbar />
      <div className="text-center pt-20">
        <h2 className="text-4xl font-bold text-blue-500">Projects</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {projects &&
            projects.map((project) => (
              <div
                key={project._id}
                className="bg-white rounded-lg shadow-md p-4 m-4 h-[32rem]"
                style={{ width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.proj_name}</h3>
                  <img
                    src={project.img}
                    alt={project.proj_name}
                    className="w-full h-32 object-cover mb-2 rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-gray-700 mb-2">{project.proj_desc}</p>
                  <p className="text-blue-500">{project.lang}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
