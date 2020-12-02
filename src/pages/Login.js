import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Main } from "../assets/styles/typography";
import comeBack from "../assets/images/comeBack.svg";

import {
  LoginContainer,
  LoginContext,
  Epigraph,
  Input,
  Button,
  BoxLogin,
  Administer,
  Registrations,
  Return,
} from "../assets/styles/pages/Login";

function Login() {
  return (
    <>
      <Main>
        <Header />
        <LoginContainer>
          <LoginContext>
            <Epigraph>Log In</Epigraph>
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
            <Button>
            <Link to="/dashboard">
              <Registrations>Enviar</Registrations>
              </Link>
              </Button>
            <BoxLogin>
              <Link to="/recover">
                <Administer>Esqueci meu usuário / senha?</Administer>
              </Link>
            </BoxLogin>
            <BoxLogin>
              <Link to="/register">
                <Registrations>Não tenho cadastro</Registrations>
              </Link>
            </BoxLogin>
            <BoxLogin>
              <Return src={comeBack} alt="Icone para voltar" />
              <Link to="/">
                <Administer>Voltar</Administer>
              </Link>
            </BoxLogin>
          </LoginContext>
        </LoginContainer>
        <Footer />
      </Main>
    </>
  );
}

export default Login;
