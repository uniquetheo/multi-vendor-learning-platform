import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineDribbble,
  AiOutlineBehance,
  AiOutlineTwitter,
} from "react-icons/ai";
export const ContactSection = () => {
  return (
    <Container>
      <Content>
        <Heading>
          <h1>Let’s get in touch!</h1>
          <span>
            Got questions about LearnUp? Our team is here to help. Contact us
            for quick and friendly support.
          </span>
        </Heading>
        <Contacts>
          <Phone>
            <FiPhoneCall className="phone icon" />
            <span>+233 54 684 5585</span>
          </Phone>
          <Email>
            <AiOutlineMail className="email icon" />
            <span>unique.theo98@gmail.com</span>
          </Email>
        </Contacts>
        <Socials>
          <h3>Connect with us</h3>
          <Icons>
            <AiOutlineInstagram className="instagram icon" />
            <AiOutlineDribbble className="dribbble icon" />
            <AiOutlineBehance className="behance icon" />
            <AiOutlineTwitter className="twitter icon" />
          </Icons>
        </Socials>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  /* background: #f8f9ff; */
  height: 593px;
  padding: 55px;

  @media only screen and (max-width: 767px) {
    height: 764px;
    padding: 32px 50px;
  }

  @media only screen and (max-width: 479px) {
    height: 821px;
    padding: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const Heading = styled.div``;

const Contacts = styled.div``;

const Phone = styled.div``;

const Email = styled.div``;

const Socials = styled.div``;

const Icons = styled.div``;
