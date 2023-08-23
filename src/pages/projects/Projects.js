import React, { useState } from "react";
import "./Projects.css";
import { projects } from "../../shared/projects";
import Dialog from "@mui/material/Dialog";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const openProject = (project) => {
    setActiveProject(project);
    if (project.url) {
      setOpenDialog(false);
      window.open(project.url);
    } else {
      setOpenDialog(true);
    }
  };

  return (
    <div>
      <div className="projects-container">
        {projects.map((projectUrl, index) => {
          return (
            <div className="project-container" key={index}>
              <div
                className="placeholder"
                onClick={() => openProject(projectUrl)}
                onMouseOver={() => setActiveIndex(index)}
                onMouseOut={() => setActiveIndex(null)}
              >
                <projectUrl.icon sx={{ fontSize: 120 }} />
                {index === activeIndex ? (
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
      {!openDialog ? <></> : 
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          fullWidth
          PaperProps={{
            style: {
              backgroundColor: "black",
              border: "1px solid white",
              maxWidth: "1000px",
              height: "70vh",
              borderRadius: "3rem"
            },
          }}
        >
          <div className="img-container">
            {activeProject ? (
              <>
                {activeProject.images.map((image) => {
                  return <img key={image} src={image} className="project-img" />;
                })}
              </>
            ) : (
              <></>
            )}
          </div>
        </Dialog>
      }
    </div>
  );
}

export default Projects;
