import React from "react";
import styled from "styled-components";

export const CardComponent = styled.article`
  width: 100vw;
  max-width: 980px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  padding-top: 10px;
  padding-bottom: 20px;
  margin-top: 10px;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  max-width: 980px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  img {
    max-width: 32px;
    max-height: 32px;
    margin-right: 10px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
/* superior | direita | inferior | esquerda */
export const CardFooter = styled.footer`
  padding: 20px 10px 10px 10px;
  div {
    margin-top: 10px;
    margin-left:5px;
  }
`;

export const Icon = styled.img`
  margin-left: 5px;
  margin-right:5px;
`;
