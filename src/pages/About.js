import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ManTech from "../assets/images/manTech.svg";
import Teams from "../assets/images/team.svg";
import { Main } from "../assets/styles/typography";

import {
  Section,
  Content,
  Titles,
  Description,
  Descriptions,
  Box,
  NextBox,
  TechMan,
  Team,
} from "../assets/styles/pages/About";

function About() {
  return (
    <>
      <Main>
        <Header />
        <Section>
          <Content>
            <Box>
              <Titles>sobre</Titles>
              <Description>
                O Twitech é uma plataforma que visa conectar desenvolvedores de
                software e mentores. Construída por um grupo de desenvolvedores
                que desejam tornar o mundo do desenvolvimento de software um
                lugar melhor para a colaboração. Este projeto nasceu do desejo
                de fornecer uma plataforma para conectar mentores e mentorados
                em todo o mundo. O mentorado poderá encontar alguém que possa
                contribuir com a resolução de seu problema. O mentor
                disponibilizará seus serviços e poderá determinar se será uma
                colaboração gratuita ou custeada pelo mentorando. Todo contato e
                acordo será entre as personas, nossa plataforma é o local de
                referência para pesquisa e busca.
              </Description>
            </Box>
            <TechMan src={ManTech} />
          </Content>
          <Content>
            <Team src={Teams} />
            <NextBox>
              <Titles>missão</Titles>
              <Descriptions>
              Acreditamos que a orientação deve ser acessível a todas as pessoas, independentemente da localização ou situação financeira. Em busca desse objetivo, forneceremos uma plataforma onde é possível ter acesso a contatos que proporcione essa colaboração de forma gratuita ou com custos que devem ser acordados entre as personas (mentor e mentorando) que utilizam a nossa aplicação como conexões de mentoria. Nossa missão é promover um maior senso de colaboração e inclusão na comunidade de desenvolvimento de software, fornecendo uma plataforma para auxiliar o processo de mentoria.
              </Descriptions>
            </NextBox>
          </Content>
        </Section>
        <Footer />
      </Main>
    </>
  );
}

export default About;
