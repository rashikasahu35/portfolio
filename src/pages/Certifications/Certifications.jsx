import React from 'react'
import Container from '../../components/Container/Container'
import Wrapper from '../../components/Wrapper/Wrapper'
import { Title } from "../../components/TitleandSubTitle/TitleandSubTitle";
import CertificationCard from '../../components/Cards/CertificationCard/CertCard';
import { certification } from '../../data/data';
import './Certifications.scss'

const Certifications = () => {
  return (
    <div id="certifications">
    <Container>
      <Wrapper>
        <Title title="Certifications" />
        {/* <SubTitle subTitle="desc" /> */}
        <div className="certificationCardContainer">
          {certification.map((certification) => (
            <CertificationCard data={certification} key={certification?.id}/>
          ))}
        </div>
      </Wrapper>
    </Container>
    </div>
  )
}

export default Certifications