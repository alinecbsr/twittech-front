import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FolderOrange from "../assets/images/privacy.svg";
import { Main } from "../assets/styles/typography";

import {
  Section,
  Content,
  ContentTerms,
  Titles,
  Box,
  BoxTerms,
  Ilustration,
  Description,
} from "../assets/styles/pages/Terms";

function Privacy() {
  return (
    <>
      <Main>
        <Header />
        <Section>
          <Content>
            <Ilustration src={FolderOrange} />
            <Box>
              <Titles>{`Política`}</Titles>
              <Titles>{`& privacidade`}</Titles>
            </Box>
          </Content>
          <ContentTerms>
            <BoxTerms>
              <Description>
              Esta página informa sobre nossas políticas em relação à coleta, uso e divulgação de dados pessoais quando você usa nosso Serviço e as opções que você associou a esses dados. Nossa Política de Privacidade para o Twittech é gerenciada por meio da Política de Privacidade Gratuita. <br /><br/> Usamos seus dados para fornecer e melhorar o Serviço. Ao usar o Serviço, você concorda com a coleta e uso de informações de acordo com esta política. A menos que definido de outra forma nesta Política de Privacidade, os termos usados nesta Política de Privacidade têm os mesmos significados que em nossos Termos e Condições.
              </Description>
            </BoxTerms>
          </ContentTerms>
        </Section>
        <Footer />
      </Main>
    </>
  );
}

export default Privacy;
