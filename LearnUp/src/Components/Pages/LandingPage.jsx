import styled from "styled-components";
import { HeroSection } from "../Sections/HeroSection";
import { CoursesSection } from "../Sections/CoursesSection";
import { Institutes } from "../Sections/Institutes";
import { ContactSection } from "../Sections/ContactSection";
// import { SliderCourses } from "../Sections/SliderCourses";

export const LandingPage = () => {
  return (
    <Main>
      <HeroSection />
      <Institutes />
      <CoursesSection />
      <ContactSection />
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  height: calc(100% - 70px);
  background: #f8f9ff;
`;
