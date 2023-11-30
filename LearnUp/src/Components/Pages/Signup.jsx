import styled from "styled-components";
import { Form } from "./Login";
import { StyledButton } from "../Button/Button.styles";
import { useState } from "react";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`username: ${username}`);
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    console.log(`confirmPassword: ${confirmPassword}`);

    signUp();
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error(error);
    }
    
  }

  return (
    <Container>
      <SignupForm>
        <FormHeading>
          <h2>Sign up to LearnUp</h2>
          <span>Please input your details as specified below</span>
        </FormHeading>
        <Input>
          <Username>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username.."
              onChange={(e) => setUsername(e.target.value)}
            />
          </Username>
          <Email>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email.."
              onChange={(e) => setEmail(e.target.value)}
            />
          </Email>
          <Password>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password.."
              onChange={(e) => setPassword(e.target.value)}
            />
          </Password>
          <Password>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password.."
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Password>
        </Input>
        <StyledButton onClick={handleSubmit}>Sign up</StyledButton>
        <Extra>
          <a href="/login">Already have an account?</a>
        </Extra>
      </SignupForm>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  height: calc(100vh - 70px);
  width: 100%;
  position: relative;
  top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 0 55px;
  margin: 0 auto;
`;

const SignupForm = styled(Form)``;

const FormHeading = styled.div`
  h2 {
    margin-bottom: 20px;
  }

  span {
    font-size: 14px;
    color: #666;
  }
`;

const Input = styled.div``;

const Username = styled.div``;

const Email = styled.div``;

const Password = styled.div``;

const Extra = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: #000;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
