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

const Contact = () => {
  const [index] = useState(0);

  return (
    <Main>
      <Header />
      <BoxEpigraph>
        <Epigraph>
          {`Feito por desenvolvedores  para 
mentoria & colaboração.`}
        </Epigraph>
      </BoxEpigraph>
      <TeamContainer>
        <Collaborators data={team[index].data} />
      </TeamContainer>
      <Footer />
    </Main>
  );
};

export default Contact;
