import React, { useState, useEffect } from 'react';
import './Portofolio.css'; // Import the CSS file

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch GitHub projects
    fetch('https://api.github.com/users/Zanefina/repos')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching GitHub projects:', error);
        setLoading(false);
      });
  }, []);


  return (
    <div id = "portfolio-section">
      <h1>My projects:</h1>

      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <h3>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h3>
              <p>{project.description ? project.description : 'No description available.'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Portfolio;