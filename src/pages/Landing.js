import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import devMan from "../assets/images/devMan.svg";
import devWoman from "../assets/images/devWoman.svg";
import { Container, Nav } from "../assets/styles/typography";
import {
  TitleHeader,
  HeaderTitle,
  SideRight,
  SideLeft,
} from "../assets/styles/pages/Landing";


function Landing() {
  return (
    <>
      <Header />
      <Container>
        <TitleHeader>{`Mentoria`}</TitleHeader>
        <HeaderTitle>{`& Colaboração`}</HeaderTitle>
        <Nav>
          <SideLeft src={devMan} />
          <SideRight src={devWoman} />
        </Nav>
      </Container>
      <Footer/>
    </>
  );
}

export default Landing;