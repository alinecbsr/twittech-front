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
  Administer,
  LoginBox,
  Return,
  Registrations,
} from "../assets/styles/pages/Login";

function Register() {
  return (
    <>
      <Main>
        <Header />
        <LoginContainer>
          <LoginContext>
            <Epigraph>Sing Up</Epigraph>
            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
            <Input type="password" placeholder="Confirme sua senha" />
            <Button>
              <Link to="/login">
                <Registrations>Cadastrar</Registrations>
              </Link>
            </Button>
            <LoginBox>
              <Return src={comeBack} alt="Icone para voltar" />
              <Link to="/login">
                <Administer>Voltar para Login</Administer>
              </Link>
            </LoginBox>
          </LoginContext>
        </LoginContainer>
        <Footer />
      </Main>
    </>
  );
}

export default Register;
