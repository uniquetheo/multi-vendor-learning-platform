import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Courses } from "../../assets/LocalDatabase/courses";
import {
  CourseImg,
  Desc,
  Description,
  Flex,
  Instructor,
  Price,
  Title,
  Wrap,
} from "../Pages/Courses";
import { StyledButton } from "../Button/Button.styles";
import { Link } from "react-router-dom";

export const SliderCourses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container>
      <CardWrap>
        <Carousel {...settings}>
          {Courses.map((course) => {
            return (
              <Wrap1 key={course.id}>
                <CourseImg1>
                  <img src={course.thumbnailURL} />
                </CourseImg1>
                <Description1>
                  <Title>{course.title}</Title>
                  <Flex1>
                    <Instructor1>{course.instructor}</Instructor1>
                    <Price1>{course.price}</Price1>
                  </Flex1>
                  <Desc>{course.shortDesc}</Desc>
                  <Link to="/learn">
                    <StyledButton>View Course</StyledButton>
                  </Link>
                </Description1>
              </Wrap1>
            );
          })}
        </Carousel>
      </CardWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f8f9ff;
  padding: 0 55px;
`;

const Carousel = styled(Slider)`
  overflow: hidden;
`;

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
`;

const Wrap1 = styled(Wrap)`
    border: 3px solid rgba(249, 249, 249, 0.1);
    margin: 55px 0 !important;
`;

const CourseImg1 = styled(CourseImg)``;

const Description1 = styled(Description)``;

const Flex1 = styled(Flex)``;

const Instructor1 = styled(Instructor)``;

const Price1 = styled(Price)``;
