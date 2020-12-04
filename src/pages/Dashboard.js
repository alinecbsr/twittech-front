import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import power from "../assets/images/power.svg";
import Modal from "../components/Modal";
import team from "../data/team";
import Users from "../components/Users";
//import Header from "../components/Header";
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
  ListItemLogin,
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

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [index] = useState(0);

  const openModal = function () {
    setShowModal(true);
  };

  const closeModal = function () {
    setShowModal(false);
  };

  return (
    <Main>
      <Modal show={showModal} close={closeModal} />
      <HeaderStyle>
        <Container>
          <LogoLink>
            <Logo src={logo} alt="Twittech logo" />
          </LogoLink>

          <Nav menuVisibility={menuVisibility}>
            <NavList menuVisibility={menuVisibility}>
              <ListItemLogin>
                <Link to="/login">
                  <ListLinkLogin onClick={() => setMenuVisibility(false)}>
                    Perfil
                  </ListLinkLogin>
                </Link>
                <Link to="/">
                  <ListLinkLogin onClick={() => setMenuVisibility(false)}>
                    Sair
                  </ListLinkLogin>
                </Link>
              </ListItemLogin>
            </NavList>
          </Nav>
          <Btn onClick={openModal}>Perfil</Btn>
          <Link to="/">
            <Power src={power} alt="Ícone de Log Out" />
          </Link>
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
          <InputSearch type="text" placeholder="Tecnologia" />
          <InputSearch type="text" placeholder="Nome" />
        </Box>
        <ImgDemand src={Demand} />
      </Content>
      <TeamContainer>
        <Users data={team[index].data} />
      </TeamContainer>
      <Footer />
    </Main>
  );
};

export default Dashboard;
