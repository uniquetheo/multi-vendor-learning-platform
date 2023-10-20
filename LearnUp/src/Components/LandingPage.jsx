import styled from "styled-components"
import { HeroSection } from "./HeroSection"
import { Institutes } from "./Institutes"
import { CoursesSection } from "./CoursesSection"
import { Features } from "./Features"

export const LandingPage = () => {
  return (
    <>
    <Container>
        <HeroSection />
        <Institutes />
        <Features />
        <CoursesSection />

        
    </Container>
   
    </>
  )
}

const Container = styled.div`
    height: calc(100vh - 70px);
    position: relative;
    top: 70px;
    padding: 0 55px;

    @media(max-width: 768px){
      padding: 0 24px;
    }
`



