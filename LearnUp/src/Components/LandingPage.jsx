import styled from "styled-components"
import { HeroSection } from "./HeroSection"
import { CoursesSection } from "./CoursesSection"
import { Institutes } from "./Institutes"

export const LandingPage = () => {
  return (
    <Main>
      <HeroSection />
      <Institutes />
      <CoursesSection />
    </Main>
  )
}

const Main = styled.main`
  position: relative;
  top: 70px;
  width: 100%;
  height: calc(100% - 70px);
  background: #F8F9FF;
`
