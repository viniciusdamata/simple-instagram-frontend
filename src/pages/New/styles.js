// eslint-disable-next-line
import React from "react";
import styled from "styled-components";

export const PreviewImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 4px;
  img {
    max-width: 100%;
    max-height: 500px;
    width: auto;
    height: auto;
  }
`;

export const UploadButton = styled.button`
  padding: 5px;
  border: 1.5px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 6px;
  height: 50px;
  width: 200px;
  font-size: 20px;
  font-weight: 600;
  transition: ease 200ms;
  background-color: #00a2f3;
  color: #ebeaea;

  :hover {
    background-color: #ebeaea;
    color: black;
    border: none;
  }
  :focus {
    background-color: #ebeaea;
    color: black;
    border: none;
  }
  :visited {
    background-color: #ebeaea;
    color: black;
    border: none;
  }
`;

export const FormNewPost = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    font-size: 20px;
    margin-bottom: 5px;
  }
  input {
    padding: 10px;
    width: 100%;
    border: 1.5px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius: 6px;
    font-size: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

export const Subtitle = styled.h3`
  text-decoration: none;
  color: #9e9e9e;
  text-align: center;
`;
