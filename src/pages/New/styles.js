// eslint-disable-next-line
import React from "react";
import styled from "styled-components";

export const PreviewImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 4px;
  img {
    max-width: 500px;
    max-height: 500px;
    width: auto;
    height: auto;
  }
`;

export const UploadButton = styled.button`
  padding: 5px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 6px;
  height: 50px;
  width: 200px;
  font-size: 20px;
  /* font-weight: bold; */
  transition:ease 10ms;

  :hover {
    background-color: black;
    color: white;
  }
`;

export const FormNewPost = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  padding-top:20px;
  padding-bottom:20px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    font-size: 20px;
    margin-bottom:5px;
  }
  input {
    padding: 10px;
    width: 100%;
    border: none;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius: 6px;
    font-size: 15px;
  }
`;
