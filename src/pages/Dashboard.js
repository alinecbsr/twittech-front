import React, { useState } from "react";
import team from "../data/team";
import Users from "../components/Users";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Demand from "../assets/images/demand.svg";
import { Main } from "../assets/styles/typography";

import {
  Box,
  Content,
  Epigraph,
  InputSearch,
  ImgDemand, 
  TeamContainer
} from "../assets/styles/pages/Dashboard";

const Dashboard = () => {
  const [index] = useState(0);

  return (
    <Main>
      <Header />
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