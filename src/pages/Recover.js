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
  LoginBox,
  Return,
  Registrations,
  RecoverDescription
} from "../assets/styles/pages/Login";

function Recover() {
  return (
    <>
      <Main>
        <Header />
        <LoginContainer>
          <LoginContext>
            <Epigraph>Recuperar senha</Epigraph>
            <BoxLogin>
              <RecoverDescription>
              Acesse o link que enviaremos ao seu email para que possa redefinir sua senha
              </RecoverDescription>
            </BoxLogin>
            <Input type="email" placeholder="E-mail" />
            <Button>
            <Link to="/login">
              <Registrations>Enviar</Registrations>
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

export default Recover;