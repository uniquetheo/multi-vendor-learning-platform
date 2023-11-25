import styled from "styled-components";
import { Contact } from "./ContactForm";
import { ContactSection } from "../Sections/ContactSection";

export const ContactPage = () => {
  return (
    <Main>
      <Header>
        <h1>Contact Us</h1>
      </Header>
      <Content>
        <Contact />
        <ContactSection />
      </Content>
    </Main>
  );
};

const Main = styled.main`
  padding: 0 55px;
  height: 100%;
  width: 100%;
  overflow-x: hidden;

  @media only screen and (max-width: 767px) {
    padding: 0 32px;
  }

  @media only screen and (max-width: 479px) {
    padding: 0 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    font-size: 40px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`;


