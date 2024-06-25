import React from 'react';
import './ProjectCard.css'; // Import CSS file for styling

const ProjectCard = ({ title, description, image, technologies, demoLink }) => {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <p>Technologies: {technologies}</p>
        <button className='btn'><a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a></button>
      </div>
    </div>
  );
};

export default ProjectCard;
