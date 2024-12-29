import React from "react";
import "./Education.scss";
import Container from "../../components/Container/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import ExpCard from "../../components/Cards/ExpCard/ExpCard";
import { education } from "../../data/data";
import {
  Title,
  SubTitle,
} from "../../components/TitleandSubTitle/TitleandSubTitle";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EduCard from "../../components/Cards/EducationCard/EduCard";

const Education = () => {
  return (
    <div id="education">
      <Container>
        <Wrapper>
          <Title title="Education" />
          <Timeline>
            {education.map((education) => (
              <TimelineItem key={education.id}>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    color="secondary"
                    sx={{ animation: `fadeInRight 1s ease-out` }}
                  >
                    {/* <img src={education.image} className="education-image" /> */}
                  </TimelineDot>
                  <TimelineConnector style={{ background: "#854CE6" }} />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: "12px",
                    px: 2,
                    animation: `fadeInRight 1s ease-out`,
                  }}
                >
                  <EduCard data={education} key={education.id} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Education;
