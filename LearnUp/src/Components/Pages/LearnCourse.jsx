/* eslint-disable react/no-unknown-property */
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Categories } from "../../assets/LocalDatabase/categories";
import { SecondaryButton } from "../Button/Button.styles";

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
      <Content>
        <Header>
          <Thumbnail>
            <img src={course.thumbnailURL} alt="courseThumbnail" />
          </Thumbnail>
          <HeaderDesc>
            <Title>{course.title}</Title>
            <Instructor>{course.instructor}</Instructor>
            <Duration>6 hours, 41 minutes</Duration>
          </HeaderDesc>
        </Header>
        <Preview>
          <Video>
            <iframe
              src={course.videoURL}
              frameborder="0"
            ></iframe>
          </Video>
          <Description>
            <DescText>{course.description}</DescText>
            <SecondaryButton>Watch Now</SecondaryButton>
          </Description>
        </Preview>
        <ResourceSection>
          <ResourceHeader>Resources and Downloads</ResourceHeader>
          <Resource></Resource>
        </ResourceSection>
      </Content>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  background: #f8f9ff;
  /* padding: 0 55px; */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  padding: 20px 55px;
  background: #f2f2f2;

  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    /* padding: 20px 55px 20px; */
    text-align: center;
    gap: 20px;

  }

  @media (max-width: 768px) {
    /* flex-direction: column-reverse; */
    padding: 20px 32px 20px;
    font-size: 0.85rem;
  }
`;

const Thumbnail = styled.div`
  /* width: 160px; */
  height: 160px;

  img {
    height: 100%;
    /* min-width: 200px; */
    display: block;
    inset: 0px;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 19%) 0px 26px 30px -10px,
      rgb(0 0 0 / 1%) 0px 16px 10px -10px;
  }
`;

const HeaderDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* gap: 15px; */
  height: 120px;
  padding: 0 10px;
  text-align: left;

  @media (max-width: 1200px) {
    text-align: center;
    height: auto;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 32px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 24px;
    text-align: center;
  }
`;

const Instructor = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 32px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 24px;
    text-align: center;
  }
`;

const Duration = styled.div``;

const Preview = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  min-height: 520px;
  padding: 0 55px;
  text-align: left;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    margin-bottom:  20px; 
  }
`;

const Video = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  min-width: 100%;
    min-height: 100%;
  padding: 10px 10px 10px 0;
  height: 350px;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DescText = styled.div`
  /* font-size: 0.85rem; */
`;

const ResourceSection = styled.div``;

const ResourceHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  width: 100%;
  height: 100px;
  padding: 0 55px;
  background: #f2f2f2;
`;

const Resource = styled.div`
  height: 250px;
`;
