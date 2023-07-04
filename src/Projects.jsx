import React from "react";
const Projects = ({projects}) => {
    return (
      <div className="project-list">
        {projects?.map((project) => {
          const {id, image} = project;
          return (
            <div className="project-preview" key={id}>
              <img src={image} alt="" className="project-image" />
            </div>
          );
        })}
      </div>
    );
}
 
export default Projects;