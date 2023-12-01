import styled from "styled-components";
import { StyledButton } from "../Button/Button.styles";
import { useNavigate } from "react-router-dom";
import { Categories } from "../../assets/LocalDatabase/categories";

export const CoursesPage = () => {
  const navigate = useNavigate();

  const handleViewCourse = (courseId) => {
    const url = `/learn/${courseId}`;
    console.log(url);
    navigate(url);
  };

  return (
    <Container>
      <Header>
        <h1>Courses</h1>
      </Header>
      <Content>
        {Categories.map((category) => {
          return (
            <Category key={category.id}>
              <CatHead>{category.name} Category</CatHead>
              {category.courses.map((course) => {
                return (
                  <Wrap key={course.id}>
                    <CourseImg>
                      <img src={course.thumbnailURL} alt="" />
                    </CourseImg>
                    <Description>
                      <Title>{course.title}</Title>
                      <Flex>
                        <Instructor>{course.instructor}</Instructor>
                        <Duration>{course.duration}</Duration>
                      </Flex>
                      <Desc>{course.shortDesc}</Desc>
                    </Description>
                    {/* <Link to={}> */}
                    <StyledButton onClick={() => handleViewCourse(course.id)}>
                      View Course
                    </StyledButton>
                    {/* </Link> */}
                  </Wrap>
                );
              })}
            </Category>
          );
        })}
      </Content>
    </Container>
  );
};

const Container = styled.main`
  padding: 0 55px;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  @media only screen and (max-width: 767px) {
    padding: 0 32px;
  }

  @media only screen and (max-width: 479px) {
    padding: 0 24px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  h1 {
    font-size: 40px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

const Content = styled.div`
  height: 100%;
  @media (max-width: 768px) {
    /* grid-template-columns: repeat(2, minmax(0, 1fr)); */
  }

  @media (max-width: 480px) {
    /* grid-template-columns: repeat(1, minmax(0, 1fr)); */
  }
`;

const Category = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const CatHead = styled.div`
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  /* font-weight: 800; */
  font-size: 1.5rem;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 450px;
  margin: 55px 0;
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

  /* a {
    padding: 10px;
  } */

  button {
    padding: 10px;
    width: 100%;
  }
`;

export const CourseImg = styled.div`
  img {
    inset: 0px;
    display: block;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  /* height: 50%; */
  padding: 10px;
`;

export const Title = styled.h4`
  /* width: 90%; */
  display: none;
  /* font-family: Arial, Helvetica, sans-serif; */
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  position: absolute;
  padding: 15px 5px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  margin: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
`;

export const Instructor = styled.div`
  font-weight: 500;
`;

export const Duration = styled.div`
  color: blue;
`;

export const Desc = styled.p`
  margin: 0;
  text-align: left;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
