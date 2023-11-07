import styled from "styled-components";
import { Header } from "./ContactPage";

export const About = () => {
  return (
    <Main>
      <Header>
        <h1>About Us</h1>
      </Header>
      <Content>
        <History>
          <p>
            LearnUp is a platform that allows users to learn new skills and
            concepts from the comfort of their own home. We offer a variety of
            courses that are taught by industry professionals. Our goal is to
            provide a platform for people to learn new skills and concepts that
            will help them in their career.
          </p>
          <p>
            LearnUp was founded in 2021 by a group of software engineers who
            were looking for a way to learn new skills and concepts from the
            comfort of their own home. They wanted to create a platform that
            would allow people to learn new skills and concepts that would help
            them in their career. They also wanted to create a platform that
            would allow people to learn new skills and concepts from the comfort
            of their own home.
          </p>
        </History>
        <Team>
          <h2>Our Team</h2>
          <p>
            Our team is made up of industry professionals who have years of
            experience in their respective fields. We are passionate about
            helping people learn new skills and concepts that will help them in
            their career.
          </p>
          <Wrap>
            <Card>
              <img src="../../joseph.jpg" alt="Joseph" />
              <h3>Joseph</h3>
              <p>Software Engineer</p>
            </Card>
            <Card>
              <img src="../../joseph.jpg" alt="Joseph" />
              <h3>Joseph</h3>
              <p>Software Engineer</p>
            </Card>
            <Card>
              <img src="../../joseph.jpg" alt="Joseph" />
              <h3>Joseph</h3>
              <p>Software Engineer</p>
            </Card>
          </Wrap>
        </Team>
      </Content>
    </Main>
  );
};

const Main = styled.main`
  padding: 0 55px;
  height: 100%;
  width: 100%;
  overflow-x: hidden;

  @media only screen and (max-width: 767px) {
    padding: 0 32px;
  }

  @media only screen and (max-width: 479px) {
    padding: 0 24px;
  }
`;


const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const History = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: 100%;
    max-width: 700px;
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const Team = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: 100%;
    max-width: 700px;
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    max-width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
  }
  h3 {
    font-size: 1.5rem;
    margin: 20px 0;
  }
  p {
    font-size: 1.2rem;
    margin: 20px 0;
  }
`;
