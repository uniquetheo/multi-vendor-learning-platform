import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Categories } from "../../assets/LocalDatabase/categories";

export const LearnCourse = () => {
  const location = useLocation();
  const splitPath = location.pathname.split("/");
  const courseId = splitPath[2];
  // console.log(courseId);

  const categoryWithCourse = Categories.find((category) =>
    category.courses.some((course) => course.id === courseId)
  );

  let course = null;
  if (categoryWithCourse) {
    course = categoryWithCourse.courses.find(
      (course) => course.id === courseId
    );
  }

  console.log(course);

  return (
    <Container>
      <Header>
        <Title>
          <h1>{course.title}</h1>
        </Title>
        <Info>
          <span>{course.instructor}</span>
        </Info>
      </Header>
      <Content>
        <Description>
          <h1> Description</h1>
          <span>{course.description}</span>
        </Description>
        <Video>
          <h1> Video</h1>
          <iframe src={course.videoURL} frameborder="0" allowFullScreen/>
        </Video>
        <Resources>
          <h1> Resources</h1>
        </Resources>
      </Content>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  /* height: calc(100% - 70px); */
  background: #f8f9ff;
`;

const Header = styled.div`
  width: 100%;
  height: 400px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 300px;
  }

  @media only screen and (max-width: 420px) {
    height: 200px;
  }
`;

const Title = styled.div`
  h1 {
    color: white;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 1px;

    @media only screen and (max-width: 768px) {
      font-size: 30px;
    }

    @media only screen and (max-width: 420px) {
      font-size: 20px;
    }
  }
`;

const Info = styled.div`
  span {
    color: white;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;

    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }

    @media only screen and (max-width: 420px) {
      font-size: 10px;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 1px;

    @media only screen and (max-width: 768px) {
      font-size: 30px;
    }

    @media only screen and (max-width: 420px) {
      font-size: 20px;
    }
  }
`;

const Video = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: black;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 1px;

    @media only screen and (max-width: 768px) {
      font-size: 30px;
    }

    @media only screen and (max-width: 420px) {
      font-size: 20px;
    }
  }
`;

const Resources = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 1px;

    @media only screen and (max-width: 768px) {
      font-size: 30px;
    }

    @media only screen and (max-width: 420px) {
      font-size: 20px;
    }
  }
`;
