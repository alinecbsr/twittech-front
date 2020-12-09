import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";
import { userService } from "../services/api";

function Login() {
  const [user, setUser] = useState("alinecbsr@gmail.com");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const saveAccess = (user, token) =>{
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem('token',token);
  }
  const clearAccess = () =>{
    console.log('clearing access')
    localStorage.clear();
  }
  const doLogin = async (e) => {
    e.preventDefault();
    console.log("doLogin");
    try {
      if (user && password) {
        const ret = await userService.login({ user, password });
        saveAccess(ret.user, ret.token);
        history.push("/dashboard");
      } else {
        alert("Usuario e senha são requeridos");
      }
  
    } catch (error) {
      clearAccess()
      alert('Acesso negado');
      console.log("login error", error.message);
    }
  };

  return (
    <>
      <Main>
        <Header />
        <LoginContainer>
          <LoginContext>
            <Epigraph>Log In</Epigraph>
            <Input
              type="email"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="E-mail"
            />
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
            <Button onClick={doLogin}>
              <Registrations>Enviar</Registrations>
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
