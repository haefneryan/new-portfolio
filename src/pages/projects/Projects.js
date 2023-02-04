import React from "react";
import "./Projects.css";
import { projects } from "../../shared/projects";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { ImageList, ImageListItem } from "@mui/material";
import portal1 from '../../assets/ROCPortal1.jpg'
import portal2 from '../../assets/ROCPortal2.jpg'
import portal3 from '../../assets/ROCPortal3.jpg'
import portal4 from '../../assets/ROCPortal4.jpg'
import portal5 from '../../assets/ROCPortal5.jpg'
import proj1 from '../../assets/Proj1.jpg';
import proj2 from '../../assets/Proj2.jpg';
import proj3 from '../../assets/Proj3.jpg';
import proj4 from '../../assets/Proj4.jpg';

function Projects(props) {
  const { activeId, openProjectDialog } = props;
  const portalImages = [portal1, portal2, portal3, portal4, portal5];
  const projImages = [proj1, proj2, proj3, proj4];

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
      <Dialog open={openProjectDialog}
        fullWidth
        maxWidth="90vw"
        PaperProps={{
          style: {
            backgroundColor: 'black',
            border: '1px solid white'
          },
        }}
      >
          {projects[activeId].title === 'Portal' ? <>
            {portalImages.map((image) => {
              return (
                <img key={image} src={image}/>
              )
            })}
          </>
          : <> {projImages.map((image) => {
            return (
              <img key={image} src={image}/>
            )
          })}</>
          }
        </Dialog>
    </div>
  );
}

export default Projects;
