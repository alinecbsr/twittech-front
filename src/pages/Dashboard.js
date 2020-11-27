import React, { useState } from "react";
import team from "../data/team";
import Collaborators from "../components/Collaborators";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Main } from "../assets/styles/typography";
import { 
  TeamContainer,
  BoxEpigraph,
  Epigraph,
} from "../assets/styles/pages/Contact";

const Dashboard = () => {
  const [index] = useState(0);

  return (
    <Main>
      <Header />
      <BoxEpigraph>
        <Epigraph>
          {`Aqui pesquisa de mentores... Em construção`}
        </Epigraph>
      </BoxEpigraph>
      <TeamContainer>
        <Collaborators data={team[index].data} />
      </TeamContainer>
      <Footer />
    </Main>
  );
};

export default Dashboard;