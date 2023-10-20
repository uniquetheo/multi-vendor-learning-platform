import styled from "styled-components";

export const HeroSection = () => {
  // className = "container-md"
  // className="row"
  // className="img-fluid"
  //  className="col-lg-7 col-md6"
  // className="col-lg-5 col-md-6"

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
            <button className="btn btn-primary">Register</button>
            <button id="tutor" className="btn btn-secondary">
              Become a Tutor
            </button>
          </WrapBtns>
        </CTA>
        <HeaderImage>
          {/* <WrapImg> */}
          <img src="../pexels-yan-krukau-8613059.jpg" alt="Header Image" />
          {/* </WrapImg> */}
        </HeaderImage>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
  // border: 1px solid red;

  @media only screen and (max-width: 767px) {
    height: 915px;
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
    height: 800px;
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
  height: 80%;
  width: 50vw;
  border: 1px solid red;
  h2 {
    font-family: "Poppins";
    font-size: 36px;
    font-weight: 600;
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
  }
  @media only screen and (max-width: 479px) {
    //mobile
    height: 329px;

    h2 {
    }
    span {
      // font-size: 18px;
    }
  }
`;

const WrapBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 767px) {
    display: flex;
    justify-content: center;

    width: 100%;
    #tutor {
      display: none;
    }
  }
  @media only screen and (max-width: 479px) {
    //mobile
  }

  button {
    font-size: 1.2rem;
    width: 80%;

    @media (max-width: 768px) {
      width: 30%;
    }
  }
`;

const HeaderImage = styled.div`
  border: 3px solid green;
  height: 32vw;
  width: 32vw;
  background: blue;

  @media only screen and (max-width: 767px) {
    height: 320px;
    width: 350px;
  }
  @media only screen and (max-width: 479px) {
    //mobile
    width: 320px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 13px 27px -5px #32325d40, 0 8px 16px -8px #0000004d,
      0 -6px 16px -6px #00000008;
  }
`;
