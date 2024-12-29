import React from "react";
import "./ProjectDetailsCard.scss";
import Container from "../../Container/Container";
import Wrapper from "../../Wrapper/Wrapper";
import { Modal } from "@mui/material";
import { VscChromeClose as CloseIcon } from "react-icons/vsc";

const ProjectDetailsCard = ({ project, setOpenProjectDetails }) => {
  return (
    <Modal
      open={true}
      onClose={() =>
        setOpenProjectDetails({ state: false, projectDetails: null })
      }
    >
      <div className="projectDetailsCardContainer">
        <div className="projectDetailsCardWrapper">
          <div
            className="projectDetailsCardCloseIcon"
            onClick={() =>
              setOpenProjectDetails({ state: false, projectDetails: null })
            }
          >
            <CloseIcon />
          </div>
          <img src={project.image} alt="" className="projectCardDetailsImg" />
          <div className="projectCardDetailsTags">
            {project.tags?.map((tag, index) => (
              <div className="projectCardDetailsTag" key={index}>
                {tag}
              </div>
            ))}
          </div>
          <div className="projectCardDetailsContent">
            <div className="projectCardDetailsTitle">{project.title}</div>
            {/* <div className="projectCardDetailsDate">{project.date}</div> */}
            {project?.desc && (
              <ul className="projectCardDetailsDesc">
                {project.desc?.map((line) => (
                  <li>{line}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="projectDetailsCardButtonGroup">
            {project?.github && (
              <button
                onClick={() => window.open(project.github)}
                className="projectDetailsCardBtn dark"
              >
                Code
              </button>
            )}
            {project?.webapp && (
              <button
                onClick={() => window.open(project?.webapp)}
                className="projectDetailsCardBtn light"
              >
                Live
              </button>
            )}
            {project?.blog && (
              <button
                onClick={() => window.open(project?.blog)}
                className="projectDetailsCardBtn light"
              >
                Blog
              </button>
            )}
            {project.demo && (
              <button
                onClick={() => window.open(project.demo)}
                className="projectDetailsCardBtn dark"
              >
                Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsCard;
