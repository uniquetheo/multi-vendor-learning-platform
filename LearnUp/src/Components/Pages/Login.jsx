/* eslint-disable react/no-unescaped-entities */
import { css } from "styled-components";
import { styled } from "styled-components";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { StyledButton } from "../Button/Button.styles";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/courses")
        setMessage("user signed in");
      } else {
        console.log("no user");
      }
    });
    return unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          const user = userCredentials.user;
          setMessage("Signed in successfully");
          console.log(message);
          navigate("/courses");
        }
      );
    } catch (err) {
      console.error(err);
      setMessage("Failed to sign in");
      console.log(err.message);
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider).then(() => {
        setMessage("signed in with google");
        console.log(message);
        navigate("/courses");
      });
    } catch (error) {
      console.error(error);
      setMessage(error.message);
      console.log(message);
    }

  };

  console.log(auth?.currentUser?.email);

  return (
    <Container>
      <Form>
        <FormHeading>
          <h2>Sign in to LearnUp</h2>
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
        <Remember>
          <input type="checkbox" id="check" />
          <label htmlFor="check">Remember me</label>
        </Remember>
        <StyledButton onClick={signIn}>Sign In</StyledButton>
        <StyledButton variant="outline" onClick={signInWithGoogle}>
          <FcGoogle /> Continue with Google
        </StyledButton>
        {/* <SecondaryButton onClick={logout}>Logout</SecondaryButton> */}
        <Extra>
          <a href="/signup">Don't have an account?</a>
          <a href="/">Forgot password?</a>
        </Extra>
      </Form>
    </Container>
  );
};

const Container = styled.main`
  overflow: hidden;
  height: calc(100vh - 150px);
  width: 100%;
  position: relative;
  top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 60px 55px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    padding: 55px 32px;
  }

  @media only screen and (max-width: 486px) {
    padding: 35px 24px;
  }
`;

export const SharedStyles = css`
  background-color: #fff;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 0 20px 0;
  padding: 20px;
  box-sizing: border-box;

  @media only screen and (max-width: 560px) {
    height: 32px;
    padding: 10px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 560px) {
    padding: 32px;

    button {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 486px) {
    padding: 24px;
  }

  label {
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 5px;
    display: block;
  }

  input {
    display: block;
    width: 100%;
    ${SharedStyles}
  }

  button {
    width: 100%;
    cursor: pointer;
    margin: 0 0 20px 0;
  }
`;

const FormHeading = styled.div`
  h2 {
    margin-bottom: 20px;

    @media only screen and (max-width: 560px) {
      font-size: 18px;
      margin-bottom: 5px;
    }
  }

  span {
    font-size: 14px;
    color: #666;

    @media only screen and (max-width: 560px) {
      font-size: 12px;
    }
  }
`;

const Input = styled.div``;

const Email = styled.div``;

const Password = styled.div``;

const Remember = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;

  @media only screen and (max-width: 560px) {
    font-size: 12px;
  }

  label {
    height: 100%;
    align-self: center;
  }

  input {
    align-self: center;
    width: 15px;
    cursor: pointer;
  }

  label {
  }
`;

export const Extra = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;

  @media only screen and (max-width: 560px) {
    gap: 5px;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }

    @media only screen and (max-width: 560px) {
      font-size: 12px;
    }
  }
`;

// const GlobalStyle = createGlobalStyle``
