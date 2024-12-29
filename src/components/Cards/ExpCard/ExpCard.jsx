import React from "react";
import "./ExpCard.scss";
import "../Card-design.scss";

const ExpCard = ({ data }) => {
  console.log(data);
  return (
    <div className="exp-card card">
      <div className="top">
        <img src={data?.image} alt="Img here" className="cardImg" />
        <div className="body">
          {data?.title && <div className="cardTitle">{data?.title}</div>}
          {data?.subtitle && (
            <div className="cardSubTitle">
              <b>{data?.subtitle}</b>
            </div>
          )}
          {data?.date && <div className="cardDate">{data?.date}</div>}
        </div>
      </div>
      {data?.grade && (
        <div className="cardSubTitle2">
          <b>Grade: </b>
          {data?.grade}
        </div>
      )}
        
      {data?.desc && (
        <ul className="cardDescription">
          {data.desc?.map((line) => (
            <li>{line}</li>
          ))}
        </ul>
      )}
      {data?.skills && (
        <div className="cardSkills">
          <b>Skills: </b>
          <div className="cardSkillsItems">
            {data?.skills?.map((skill, index) => (
              <div className="cardSkillsItem">{skill} •</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpCard;
