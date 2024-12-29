import React from 'react'
import Container from '../../components/Container/Container'
import Wrapper from '../../components/Wrapper/Wrapper'
import { Title } from "../../components/TitleandSubTitle/TitleandSubTitle";
import CertificationCard from '../../components/Cards/CertificationCard/CertCard';
import { blogs } from '../../data/data';
import '../Certifications/Certifications.scss'

const Blogs = () => {
  return (
    <div id="Blogs">
    <Container>
      <Wrapper>
        <Title title="Blogs" />
        {/* <SubTitle subTitle="desc" /> */}
        <div className="certificationCardContainer">
          {blogs.map((blog) => (
            <CertificationCard data={blog} key={blog?.id}/>
          ))}
        </div>
      </Wrapper>
    </Container>
    </div>
  )
}

export default Blogs