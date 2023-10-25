import { styled } from "styled-components";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { SecondaryButton, StyledButton } from "./Button/Button.styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(auth?.currentUser?.email);

  return (
    <Container>
      <Content>
        <Form>
            <FormHeading>
                <h1>Sign in to LearnUp</h1>
                <span>Please input your details as specified below</span>
            </FormHeading>
            <Input>
            <Email>
            <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email.."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          </Email>
          <Password>
            <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password.."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          </Password>
          </Input>
          <StyledButton onClick={signIn}>Sign In</StyledButton>
          <StyledButton variant="outline" onClick={signInWithGoogle}>
            Sign In With Google
          </StyledButton>
          <SecondaryButton onClick={logout}>
            Logout
          </SecondaryButton>
        </Form>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  height: 690px;
  width: 100%;
  position: relative;
  top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background: #f8f9ff; */
`;

const Content = styled.div`
  width: 60%;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;

  input,
  button {
    margin: 12px 0;
  }

  input {
    font-size: 1.2rem;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #f8f9ff;
    padding: 40px;
    margin: 70px 0;
    border-radius: 10px;
    
    label {
        text-align: left;
        font-size: 1.2rem;
        font-weight: 500;
    }
    
    h1 {
        font-size: 2rem;
        font-weight: 700;
        margin: 0;
    }
    
    span {
        font-size: 1rem;
        font-weight: 400;
    }
`

const FormHeading = styled.div`
    
`

const Input = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
`

const Email = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;

    label{
        font-size: 1rem;
        padding: 0 10px;
    }
`

const Password = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;

    label{
        font-size: 1rem;
        padding: 0 10px;
    }
`
