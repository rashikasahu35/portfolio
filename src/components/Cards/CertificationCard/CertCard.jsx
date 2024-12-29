import React from "react";
import "./CertCard.scss";
import "../Card-design.scss";

const CertCard = ({ data }) => {
  return (
    <a href={data?.link || ""} target="_blank">
      <div className="cert-card card">
        <div className="top">
          <img src={data?.image} alt="Img here" className="cardImg" />
          <div className="body">
            {data?.title && <div className="cardTitle">{data?.title}</div>}
            {data?.subtitle && <div className="cardSubTitle">
              <b>{data?.subtitle}</b>
            </div>}
            {data?.date && <div className="cardDate">{data?.date}</div>}
          </div>
        </div>
        {data?.skills && <div className="cardSkills">
          <b>Skills: </b>
          <div className="cardSkillsItems">
            {data?.skills?.map((skill, index) => (
              <div className="cardSkillsItem" key={index}>
                {skill} •
              </div>
            ))}
          </div>
        </div>}
      </div>
    </a>
  );
};

export default CertCard;
