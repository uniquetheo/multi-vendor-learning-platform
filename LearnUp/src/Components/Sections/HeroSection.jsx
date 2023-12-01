/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { FancyButton, StyledButton } from "../Button/Button.styles";

export const HeroSection = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <h2>You bring the expertise, we'll make it unforgettable.</h2>
          <span>
            Using highly personalized activities, videos and animations you can
            energize your students and motivate them to achieve their learning
            goals as they progress through a journey.
          </span>
          <WrapBtns>
            <a href="/login">
              <FancyButton>Register</FancyButton>
            </a>
            <a href="/login">
              <StyledButton variant="outline" id="tutor">
                Become a Tutor
              </StyledButton>
            </a>
          </WrapBtns>
        </CTA>
        <HeaderImage>
          {/* <WrapImg> */}
          <img src="../studentsLearning.svg" alt="Header Image" />
          {/* </WrapImg> */}
        </HeaderImage>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  /* max-height: calc(100vh - 70px); */
  height: 690px;
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
  padding: 0 55px;
  /* border: 1px solid red; */

  @media only screen and (max-width: 767px) {
    height: 715px;
    padding: 55px 0;
  }

  @media only screen and (max-width: 479px) {
    height: 809px;
    padding: 30px 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  // border: 5px solid green;

  @media only screen and (max-width: 767px) {
    height: 600px;
    flex-direction: column;
    gap: 40px;
  }
  @media only screen and (max-width: 479px) {
    //mobile
    height: 689px;
    flex-direction: column;
    gap: 40px;
  }
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: left;
  height: 80%;
  width: 50vw;
  // border: 1px solid red;
  h2 {
    font-family: "Poppins";
    font-size: 36px;
    font-weight: 600;
    margin: 0px;
  }
  span {
    font-family: "outfit", sans-serif;
    font-size: 28px;
  }

  @media only screen and (max-width: 768px) {
    height: 80%;
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 0 32px;

    h2{
      font-size: 24px;
      line-height: 1.2;
      text-align: left
    }

    span {
      font-size: 18px;
      line-height: 1.2;
      text-align: left;
    }
  }
  @media only screen and (max-width: 479px) {
    //mobile
    height: 329px;

    h2 {
      font-size: 28px;
    }
    span {
      font-size: 18px;
    }
  }
`;

const WrapBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10%;
  width: 100%;

  @media only screen and (max-width: 890px) {
    grid-template-columns: 1fr;
  }

  /* width: 100%; */

  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* max-width: 30%; */
    width: 40%;

    #tutor {
      display: none;
    }
  }
  @media only screen and (max-width: 479px) {
    //mobile
  }

  a > button {
    font-size: 1.2rem;
    width: 100%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const HeaderImage = styled.div`
  // border: 3px solid green;
  height: 32vw;
  width: 32vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 767px) {
    height: 320px;
    width: 350px;
  }
  @media only screen and (max-width: 479px) {
    //mobile
    /* width: 320px; */
    width: 100%;
    /* border: 1px solid red; */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* box-shadow: 0 13px 27px -5px #32325d40, 0 8px 16px -8px #0000004d,
      0 -6px 16px -6px #00000008; */
  }
`;
