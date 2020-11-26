import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import devMan from "../assets/images/devMan.svg";
import devWoman from "../assets/images/devWoman.svg";
import { Container } from "../assets/styles/typography";
import {
  TitleHeader,
  HeaderTitle,
  Box,
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
        <Box>
          <SideLeft src={devMan} />
          <SideRight src={devWoman} />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Landing;
