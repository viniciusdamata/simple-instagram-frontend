// eslint-disable-next-line
import React from "react";
import styled from "styled-components";

export const PostList = styled.section`
  width: 100%;

  @media (min-width: 599px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const LoadingPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 20px;
`;
