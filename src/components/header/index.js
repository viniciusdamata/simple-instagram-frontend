import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import camera from "../../assets/camera.svg";

import { MainHeader, HeaderContent } from "./styles";

export default function Header() {
  return (
    <MainHeader>
      <HeaderContent>
        <Link to="/">
          <img src={logo} alt="instaRocket" />
        </Link>
        <Link to="/new">
          <img src={camera} alt="Enviar Publicação" />
        </Link>
      </HeaderContent>
    </MainHeader>
  );
}
