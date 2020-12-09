/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import power from "../assets/images/power.svg";
import Modal from "../components/Modal";
import Users from "../components/Users";
import Footer from "../components/Footer";
import Demand from "../assets/images/demand.svg";
import { Main } from "../assets/styles/typography";
import { Btn } from "../assets/styles/typography";

import {
  HeaderStyle,
  Container,
  LogoLink,
  Logo,
  Nav,
  NavList,
  ListItemMenu,
  ListLinkLogin,
  MenuToggle,
  ToggleOne,
  ToggleTwo,
  ToggleThree,
} from "../assets/styles/components/header";

import {
  Box,
  Content,
  Epigraph,
  InputSearch,
  ImgDemand,
  TeamContainer,
  Power,
} from "../assets/styles/pages/Dashboard";

import api, { userService } from "../services/api";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [userLogged, setUserLogged] = useState(null);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [index] = useState(0);
  const history = useHistory();

  async function listUser() {
    const myID = JSON.parse(localStorage.getItem("user"))._id;
    const data = await userService.listUser();
    //Filtro para exibir todos os usuário com excessão do que está logado
    const userWithoutMe = data.filter((u) => u._id !== myID);
    setUsers(userWithoutMe);
  }

  const logOff = () => {
    localStorage.clear();
    setMenuVisibility(false);
    history.push("/login");
  };

  const getLoggedUser = async () => {
    const userSaved = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    const user = await userService.getUser(userSaved._id);
    if (user) {
      setUserLogged(user);
    }
    console.log("loggedUser", user);
  };

  const saveUser = async (user) => {
    console.log("saveUser", user);
    try {
      const userUpdated = await userService.updateUser(user);
      console.log("userUpdated", userUpdated);
      closeModal();
    } catch (error) {
      console.log("error", error);
    }
  };

  const searchUser = async (field, value) => {
    const myID = JSON.parse(localStorage.getItem("user"))._id;
    let query = "";
    if (value.length >= 3) {
      // if(field === 'name'){
      //   query[field] = `/${value}/ig`;
      // }

      // if(field === 'skill'){
      //   query.skills = {name:`/${value}/ig`};
      // }
      if (field === "name") {
        query = `?name=/${value}/ig`;
      }

      if (field === "skill") {
        query = `?skills.name=/${value}/ig`;
      }

      const data = await userService.listUser(query);
      //Filtro para exibir todos os usuário com excessão do que está logado
      const userWithoutMe = data.filter((u) => u._id !== myID);
      setUsers(userWithoutMe);
    } else if (value.length === 0) {
      listUser();
    }
  };

  //Modal
  const openModal = async function () {
    getLoggedUser();
    setShowModal(true);
  };

  const closeModal = function () {
    setShowModal(false);
  };

  useEffect(() => {
    //Setando usuário logado
    getLoggedUser();
    listUser();
  }, []);

  return (
    //   <>
    //   <div>Users</div>
    //   <ul>
    // {users.length && users.map(u => <li>{u.name}</li>)}
    //   </ul>
    //   </>
    <Main>
      {userLogged && (
        <Modal
          show={showModal}
          close={closeModal}
          user={userLogged}
          saveUser={saveUser}
        />
      )}
      <HeaderStyle>
        <Container>
          <LogoLink>
            <Logo src={logo} alt="Twittech logo" />
          </LogoLink>

          <Nav menuVisibility={menuVisibility}>
            <NavList menuVisibility={menuVisibility}>
              <ListItemMenu>
                <ListLinkLogin onClick={openModal}>Perfil</ListLinkLogin>
                </ListItemMenu>

                
                  <ListItemMenu>
                    <ListLinkLogin onClick={logOff}>Sair</ListLinkLogin>
                  </ListItemMenu>
              
              
            </NavList>
          </Nav>
          <Btn onClick={openModal}>Perfil</Btn>

          <Power src={power} onClick={logOff} alt="Ícone de Log Out" />
          <MenuToggle
            rule="button"
            aria-label="Abrir menu"
            onClick={() => setMenuVisibility(!menuVisibility)}
          >
            <ToggleOne menuVisibility={menuVisibility} />
            <ToggleTwo menuVisibility={menuVisibility} />
            <ToggleThree menuVisibility={menuVisibility} />
          </MenuToggle>
        </Container>
      </HeaderStyle>
      <Content>
        <Box>
          <Epigraph>{`Mentoria & colaboração`}</Epigraph>
          <InputSearch
            type="text"
            placeholder="Tecnologia"
            onChange={(e) => searchUser("skill", e.target.value)}
          />
          <InputSearch
            type="text"
            placeholder="Nome"
            onChange={(e) => searchUser("name", e.target.value)}
          />
        </Box>
        <ImgDemand src={Demand} />
      </Content>
      <TeamContainer>
        <Users data={users} />
      </TeamContainer>
      <Footer />
    </Main>
  );
};

export default Dashboard;
