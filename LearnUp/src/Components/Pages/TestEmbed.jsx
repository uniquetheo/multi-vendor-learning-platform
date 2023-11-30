/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import Slider from "react-slick";
import { Courses } from "../../assets/LocalDatabase/courses";
import { Wrap, CourseImg, Desc, Description, Flex, Instructor, Price, Title } from "./Courses";
import { Link } from "react-router-dom";
import { StyledButton } from "../Button/Button.styles";

import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

export const TestEmbed = () => {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  };

  return (
    <Container>
      {/* <Test1>
        <iframe
        //   src="https://www.youtube.com/embed/4uU9lZ-HSqA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </Test1> */}

      <Test1>
        {/* {Courses.map((course) => {
          return (
            <Wrap key={course.id}>
              <h1>{course.title}</h1>
              <iframe src={course.videoURL} frameborder="0" />
              <span>{course.instructor}</span>
              <p>{course.description}</p>
            </Wrap>
          );
        })} */}

        <Slider {...sliderSettings}>
          {Courses.map((course) => {
            return (
              <Wrap key={course.id}>
                <CourseImg>
                  <iframe src={course.thumbnailURL} frameborder="0" allowFullScreen/>
                </CourseImg>
                <Description>
                  <Title>{course.title}</Title>
                  <Flex>
                    <Instructor>
                        {course.instructor}
                    </Instructor>
                    <Price>{course.price}</Price>
                  </Flex>
                  <Desc>{course.shortDesc}</Desc>
                  <Link to="/learn"><StyledButton>View Course</StyledButton></Link>
                </Description>
              </Wrap>
            );
          })}
        </Slider>
      </Test1>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 100%;

  background: #f8f9ff;
  padding: 0 55px;
`;

// const Wrap = styled.div`
//   height: 100%;
// `;

const Test1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* @media only screen and (max-width: 768px) {
    height: 300px;
  }

  @media only screen and (max-width: 420px) {
    height: 200px;
  } */
`;
