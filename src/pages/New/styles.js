import React from "react";
import styled from "styled-components";

export const PreviewImage = styled.div`
  display: flex;
  justify-content:center;
  margin: 4px;
  img {
    max-width: 500px;
    max-height: 500px;
    width: auto;
    height: auto;
  }
`;

export const UploadButton = styled.button`
    padding:5px;
    border: 1px solid;
    border-radius: 4px;
    height:80;
    width:150px;

    :hover{
        background-color:black;
        color:white;
    }
` 