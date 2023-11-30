import styled from "styled-components";
import { Header } from "./ContactPage";
import {
  AiOutlineBehance,
  AiOutlineDribbble,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

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
          <TeamTile>
          <Wrap>
            <Image>
              <img src="../../lady.svg" alt="" />
            </Image>
            <Text>
              <Name>Cilla Benyah</Name>
              <Title>UI/UX Designer</Title>
              <Socials>
                <Icons>
                  <AiOutlineInstagram className="instagram icon" />
                  <AiOutlineDribbble className="dribbble icon" />
                  <AiOutlineBehance className="behance icon" />
                  <AiOutlineTwitter className="twitter icon" />
                </Icons>
              </Socials>
            </Text>
          </Wrap>
          <Wrap>
            <Image>
              <img src="../../lady.svg" alt="" />
            </Image>
            <Text>
              <Name>Theo Mercifield</Name>
              <Title>Frontend Developer</Title>
              <Socials>
                <Icons>
                  <AiOutlineInstagram className="instagram icon" />
                  <AiOutlineDribbble className="dribbble icon" />
                  <AiOutlineBehance className="behance icon" />
                  <AiOutlineTwitter className="twitter icon" />
                </Icons>
              </Socials>
            </Text>
          </Wrap>
          <Wrap>
            <Image>
              <img src="../../lady.svg" alt="" />
            </Image>
            <Text>
              <Name>Emma Quarm</Name>
              <Title>Project Manager</Title>
              <Socials>
                <Icons>
                  <AiOutlineInstagram className="instagram icon" />
                  <AiOutlineDribbble className="dribbble icon" />
                  <AiOutlineBehance className="behance icon" />
                  <AiOutlineTwitter className="twitter icon" />
                </Icons>
              </Socials>
            </Text>
          </Wrap>
          </TeamTile>
          <TeamTile>
          <Wrap>
            <Image>
              <img src="../../lady.svg" alt="" />
            </Image>
            <Text>
              <Name>Maggie Mensah</Name>
              <Title>Documentation</Title>
              <Socials>
                <Icons>
                  <AiOutlineInstagram className="instagram icon" />
                  <AiOutlineDribbble className="dribbble icon" />
                  <AiOutlineBehance className="behance icon" />
                  <AiOutlineTwitter className="twitter icon" />
                </Icons>
              </Socials>
            </Text>
          </Wrap>
          <Wrap>
            <Image>
              <img src="../../lady.svg" alt="" />
            </Image>
            <Text>
              <Name>Isaac Offei</Name>
              <Title>Quality Assurance</Title>
              <Socials>
                <Icons>
                  <AiOutlineInstagram className="instagram icon" />
                  <AiOutlineDribbble className="dribbble icon" />
                  <AiOutlineBehance className="behance icon" />
                  <AiOutlineTwitter className="twitter icon" />
                </Icons>
              </Socials>
            </Text>
          </Wrap>
          <Wrap>
            <Image>
              <img src="../../lady.svg" alt="" />
            </Image>
            <Text>
              <Name>Eben Dzeagu</Name>
              <Title>Backend Developer</Title>
              <Socials>
                <Icons>
                  <AiOutlineInstagram className="instagram icon" />
                  <AiOutlineDribbble className="dribbble icon" />
                  <AiOutlineBehance className="behance icon" />
                  <AiOutlineTwitter className="twitter icon" />
                </Icons>
              </Socials>
            </Text>
          </Wrap>
          </TeamTile>
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
  /* padding: 40px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
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
  /* padding: 40px; */
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

const TeamTile = styled.div`
display: flex;
width: calc(100vw - 110px);
flex-wrap: wrap;
margin: 20px 0;
justify-content: space-between;
/* gap: 20px;   */

`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  width: calc(100% / 3 - 20px);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 21%) 0px 16px 10px -10px;
`;

const Image = styled.div`
/* border-radius: 50%; */
overflow: hidden;

  img {
    /* border-radius: 50%; */
    inset: 0px;
    display: block;
    /* width: 150px; */
    height: 150px;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 150px;
  padding: 10px;
`;

const Name = styled.h4`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  margin: 0;
`;

const Title = styled.div`
  font-weight: 500;
`;

const Socials = styled.div``;

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
