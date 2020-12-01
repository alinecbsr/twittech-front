import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Main } from "../assets/styles/typography";

import {
  LoginContainer,
  LoginContext,
  Epigraph,
  Input,
} from "../assets/styles/pages/Login";

function Login() {
  return (
    <>
      <Main>
        <Header />
          <LoginContainer>
            <LoginContext>
            <Epigraph>Log In</Epigraph>
            <Input type="email" placeholder="E-mail"/>
            <Input type="password" placeholder="Senha"/>
            </LoginContext>
          </LoginContainer>
        <Footer />
      </Main>
    </>
  );
}

export default Login;