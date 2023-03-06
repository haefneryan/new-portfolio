import React, { useState } from "react";
import "./Projects.css";
import { projects } from "../../shared/projects";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import portal1 from "../../assets/ROCPortal1.jpg";
import portal2 from "../../assets/ROCPortal2.jpg";
import portal3 from "../../assets/ROCPortal3.jpg";
import portal4 from "../../assets/ROCPortal4.jpg";
import portal5 from "../../assets/ROCPortal5.jpg";
import proj1 from "../../assets/Proj1.jpg";
import proj2 from "../../assets/Proj2.jpg";
import proj3 from "../../assets/Proj3.jpg";
import proj4 from "../../assets/Proj4.jpg";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const portalImages = [portal1, portal2, portal3, portal4, portal5];
  const projImages = [proj1, proj2, proj3, proj4];

  const openProject = (project) => {
    setActiveProject(project);
    if (project.url) {
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
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="90vw"
        PaperProps={{
          style: {
            backgroundColor: "black",
            border: "1px solid white",
          },
        }}
      >
        <div className="img-container">
          {activeProject?.title === "Portal" ? (
            <>
              {portalImages.map((image) => {
                return <img key={image} src={image} className="project-img" />;
              })}
            </>
          ) : (
            <>
              {" "}
              {projImages.map((image) => {
                return <img key={image} src={image} className="project-img" />;
              })}
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
}

export default Projects;
