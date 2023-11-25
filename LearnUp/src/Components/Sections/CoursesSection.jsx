import styled from "styled-components"
import { StyledButton } from "../Button/Button.styles"

export const CoursesSection = () => {
  return (
    <Container>
        <CourseHeader>
          <h1>Featured Courses</h1>
          <span>Our Best Courses Offered and Taught By Best of The Instructors</span>
        </CourseHeader>
        <CardWrap>
        <Category>
          <Wrap>
            <CourseImg>
              <img src="../../pexels-yan-krukau-8613059.jpg" alt="" />
            </CourseImg>
            <Description>
              <Title>Introduction to HTML</Title>
              <Flex>
                <Instructor>David Houston</Instructor>
                <Price>GHS159</Price>
              </Flex>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                sequi sed perspiciatis fugit blanditiis enim.
              </Desc>
              <StyledButton>View Course</StyledButton>
            </Description>
          </Wrap>
          <Wrap>
            <CourseImg>
              <img src="../../pexels-vlada-karpovich-4050302.jpg" alt="" />
            </CourseImg>
            <Description>
              <Title>Introduction to HTML</Title>
              {/* <Flex> */}
                <Instructor>David Houston</Instructor>
                <Price>GHS159</Price>
              {/* </Flex> */}
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                sequi sed perspiciatis fugit blanditiis enim.
              </Desc>
              <StyledButton>View Course</StyledButton>
            </Description>
          </Wrap>
          <Wrap>
            <CourseImg>
              <img src="../../pexels-nothing-ahead-3205071.jpg" alt="" />
            </CourseImg>
            <Description>
              <Title>Introduction to HTML</Title>
              <Flex>
                <Instructor>David Houston</Instructor>
                <Price>GHS159</Price>
              </Flex>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                sequi sed perspiciatis fugit blanditiis enim.
              </Desc>
              <StyledButton>View Course</StyledButton>
            </Description>
          </Wrap>
        </Category>
        </CardWrap>
    </Container>
  )
}

const Container = styled.div`
    /* height: calc(100vh - 70px); */
    height: 777px;
    width: 100%;
    padding: 0 55px;
    overflow: hidden;
    background: #F8F9FF;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media only screen and (max-width: 767px){
      padding: 0 32px;
      height: 1426px;
    }

    @media only screen and (max-width: 479px){
      padding: 0 24px;
      height: 1611px;
    }
`

const CourseHeader = styled.div``
  
const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  @media only screen and (max-width: 767px) {
    height: 1093px;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 479px) {
    height: 1320px;
  }

`

/* const Card = styled.div`
  width: 30%;
  height: 351px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 13px 27px -5px #32325d40, 0 8px 16px -8px #0000004d,
      0 -6px 16px -6px #00000008;

  @media only screen and (max-width: 767px) {
    width: 87%;
  }

  @media only screen and (max-width: 479px) {
    width: 100%;
    height: 408px;
  }
` */

const Category = styled.div`
position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  gap: 25px;
`;


const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 450px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
  border: 3px solid rgba(249, 249, 249, 0.1);

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const CourseImg = styled.div`

  img {
    inset: 0px;
    display: block;
    height: 50%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;

const Description = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  padding: 10px;
`;

const Title = styled.h4`
  /* width: 90%; */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  position: absolute;
  padding: 15px 5px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  margin: 0;
  color: #fff;
  /* border: 1px solid red; */
  background: rgba(0, 0, 0, 0.3);
  /* text-align: center; */
`;

const Instructor = styled.div`
  font-weight: 500;
`;

const Price = styled.div`
  color: blue;
`;

const Desc = styled.p`
  margin: 0;
  text-align: left;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

