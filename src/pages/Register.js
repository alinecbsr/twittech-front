import React, {useState} from "react";
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
import {userService} from '../services/api'
import { useHistory } from "react-router-dom";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const history = useHistory();

  const createUser = async (e)=>{
    e.preventDefault();
    console.log('createUser')
    const userform = {
      name,
      user:email,
      password,
      github
    }
    //ToDo
    //Validar dados do novo cadastro
    try{
      const newUser  = await userService.createUser(userform);
      alert('Usuario cadastrado com sucesso!');
      history.push('/login');
    }catch(erro){
      console.log('erro', erro);
    }
  }
  return (
    <>
      <Main>
        <Header />
        <LoginContainer>
          <LoginContext>
            <Epigraph>Sing Up</Epigraph>
            <Input type="text" onChange={(e) => setName(e.target.value)} placeholder="Nome" />
            <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
            <Input type="text" onChange={(e) => setGithub(e.target.value)} placeholder="Github" />
            <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
            <Input type="password" onChange={(e) => setConfPassword(e.target.value)} placeholder="Confirme sua senha" />
            <Button onClick={createUser}>
              <Registrations>Cadastrar</Registrations>
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
