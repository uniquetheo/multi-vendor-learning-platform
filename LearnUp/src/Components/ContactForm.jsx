import { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { StyledButton } from "./Button/Button.styles";

const initialState = {
  name: "",
  email: "",
  message: "",
  gender: "",
};

export const Contact = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }

    setError("");
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const test = regex.test(state.email);
    if (!test) {
      setError("You must provide a valid email address");
      return;
    }
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Contact Form</h2>
        <label htmlFor="name">Name</label>
        <StyledInput
          type="text"
          name="name"
          value={state.name}
          onChange={handleInput}
        />
        <label htmlFor="email">Email</label>
        <StyledInput
          type="email"
          name="email"
          value={state.email}
          onChange={handleInput}
        />
        <StyledFieldSet>
          <legend>Gender</legend>
          <label htmlFor="gender">
            <input
              type="radio"
              value="female"
              name="gender"
              checked={state.gender === "female"}
              onChange={handleInput}
            />
            Female
          </label>
          <label htmlFor="gender">
            <input
              type="radio"
              value="Male"
              name="gender"
              checked={state.gender === "Male"}
              onChange={handleInput}
            />
            Male
          </label>
        </StyledFieldSet>
        <label htmlFor="message" value={state.message} onChange={handleInput}>
          Message
        </label>
        <StyledTextArea name="message" />
        {error && (
          <StyledError>
            <p>{error}</p>
          </StyledError>
        )}
        <StyledButton>Submit</StyledButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export const GlobalStyle = createGlobalStyle``;

export const SharedStyles = css`
  background-color: #fff;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  text-align: left;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${SharedStyles}
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${SharedStyles}
`;

export const StyledFieldSet = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
`;
