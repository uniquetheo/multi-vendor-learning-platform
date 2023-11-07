import styled from "styled-components"
import { HeroSection } from "./HeroSection"
import { CoursesSection } from "./CoursesSection"
import { Institutes } from "./Institutes"
import { ContactSection } from "./ContactSection"

export const LandingPage = () => {
  return (
    <Main>
      <HeroSection />
      <Institutes />
      <CoursesSection />
      <ContactSection />
    </Main>
  )
}

const Main = styled.main`
  width: 100%;
  height: calc(100% - 70px);
  background: #F8F9FF;
`
