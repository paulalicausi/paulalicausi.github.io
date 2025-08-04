import { useState, useEffect } from 'react';
import projects from '../../content/projects.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import projectStyles from './Projects.module.css';

const Projects = () => {

  const categories = [
      ...new Set(projects.flatMap(project => project.category)),
  ];

  const [selectedCats, setSelectedCats] = useState([]);
  const [filteredProjectList, setFilteredProjectList] = useState(projects);

  useEffect(() => {
    if (selectedCats.length === 0) {
      setFilteredProjectList(projects);
    } else if (selectedCats.length === 1) {

      setFilteredProjectList(
        projects.filter(project =>
          project.category.includes(selectedCats[0])
        )
      );
    } else {

      setFilteredProjectList(
        projects.filter(project =>
          selectedCats.every(cat => project.category.includes(cat))
        )
      );
    }
  }, [selectedCats]);


  const toggleCategory = (category) => {
    setSelectedCats((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

    return(
      <section className={`page container ${projectStyles.projects}`}>
        <h2>└── /Mission: Projects/</h2>
          <div className={`col-12 justify-content-end d-flex ${projectStyles.categories}`}>
             {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`cursor-pointer px-3 py-1 border rounded mx-1 mb-2 transition-all duration-200 ${
                    selectedCats.includes(category)
                      ? projectStyles.active
                      : ''
                  }`}
                >
                  {category}
                </button>
              ))}
          </div> 
          <div className="row">
            {filteredProjectList.length === 0 ? (
              <p>No matches found, Captain. Adjust your course and try again.</p>
            ) : (
              filteredProjectList.map((project, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className={projectStyles.missionItem}>
                    <p className={projectStyles.time}>{project.time}</p>
                    <div className={projectStyles.image}>
                      {project.url.length > 0 &&
                        <a target="_blank" rel="noreferrer" href={project.url}>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                      }                      
                      <img src={project.img} alt={project.name} />
                    </div>
                    <h3>{project.name}</h3>
                    <div className={projectStyles.details}>
                      <p><strong>Log</strong>: {project.description}</p>
                      <p className={projectStyles.keywords}><i>{project.keywords}</i></p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
    );
}

export default Projects;