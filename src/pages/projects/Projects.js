import React from "react";
import "./Projects.css";
import { projects } from "../../shared/projects";

function Projects(props) {
  const { activeId } = props;

  return (
    <div>
      <div className="projects-container">
        {projects.map((projectUrl, index) => {
          return (
            <div
              className={`project-container ${
                activeId === index ? "active-project" : ""
              }`}
              id={index}
              key={index}
            >
              <div className="placeholder">
                <projectUrl.icon sx={{ fontSize: 120 }} />
                {index === activeId ? (
                  <>
                    <h5 className="title">{projectUrl.title}</h5>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
