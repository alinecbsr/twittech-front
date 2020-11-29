import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FolderBlue from "../assets/images/terms.svg";
import { Main } from "../assets/styles/typography";

import {
  Section,
  Content,
  ContentTerms,
  Titles,
  TitleTerms,
  Box,
  BoxTerms,
  Ilustration,
  Description,
  Detail,
} from "../assets/styles/pages/Terms";

function Terms() {
  return (
    <>
      <Main>
        <Header />
        <Section>
          <Content>
            <Ilustration src={FolderBlue} />
            <Box>
              <Titles>{`Termos`}</Titles>
              <Titles>{`& condições`}</Titles>
            </Box>
          </Content>
          <ContentTerms>
            <BoxTerms>
              <Description>
                Estes Termos e Condições regem seu relacionamento com o site
                www.twittech.dev.br e todo conteúdo e serviço disponível. <br />
                <br /> Leia estes Termos e Condições com atenção antes de usar o
                Serviço. <br />
                <br /> Seu acesso e uso dos serviços estão condicionados à sua
                aceitação e conformidade com estes Termos. Estes Termos se
                aplicam a todos os visitantes, usuários e outras pessoas que
                acessam ou usam o serviço. <br />
                <br /> Ao acessar ou usar o serviço, você concorda em obedecer a
                estes Termos. Se você discordar de qualquer parte dos termos,
                não deverá acessar os serviços ou conteúdos do site.
              </Description>
              <TitleTerms>Conta</TitleTerms>
              <Description>
                Ao criar uma conta conosco, você deve nos fornecer informações
                precisas, completas e atualizadas em todos os momentos. Deixar
                de fazer isso constitui uma violação dos Termos, o que pode
                resultar no encerramento imediato de sua conta em nosso sistema.
                Você é responsável por guardar e assegurar a senha que usa para
                acessar o Serviço e por quaisquer atividades ou ações sob sua
                senha, seja sua senha com nosso sistema ou um serviço de
                terceiros. Você concorda em não divulgar sua senha a terceiros.
                Você deve nos notificar imediatamente ao tomar conhecimento de
                qualquer violação de segurança ou uso não autorizado de sua
                conta. Você não pode usar como nome de usuário o nome de outra
                pessoa ou entidade ou que não esteja legalmente disponível para
                uso, um nome ou marca registrada que esteja sujeito a quaisquer
                direitos de outra pessoa ou entidade sem a autorização
                apropriada, ou um nome que seja caso contrário, ofensivo, vulgar
                ou obsceno.
              </Description>
              <TitleTerms>Links</TitleTerms>
              <Description>
                Nosso serviço pode conter links para sites ou serviços de
                terceiros que não são de propriedade ou controlados pelo
                Twittech.
                <br />
                <br /> O Twittech não tem controle e não assume responsabilidade
                pelo conteúdo, políticas de privacidade ou práticas de quaisquer
                sites ou serviços de terceiros. Você também reconhece e concorda
                que o Twittech não será responsável, direta ou indiretamente,
                por qualquer dano ou perda causado ou alegadamente causado por
                ou em conexão com o uso ou confiança em qualquer conteúdo, bens
                ou serviços disponíveis em ou através de qualquer um desses
                sites ou serviços.
                <br />
                <br /> Aconselhamos vivamente que leia os termos e condições e
                políticas de privacidade de quaisquer sites ou serviços de
                terceiros que visite.
              </Description>
              <TitleTerms>Encerramento</TitleTerms>
              <Description>
                Podemos encerrar ou suspender sua conta imediatamente, sem aviso
                prévio ou responsabilidade, por qualquer motivo, incluindo, sem
                limitação, se você violar os Termos. Após a rescisão, seu
                direito de usar o Serviço cessará imediatamente. Se você deseja
                encerrar sua conta, você pode simplesmente interromper o uso do
                Serviço. Lei Aplicável
                <br />
                <br /> Estes Termos serão regidos e interpretados de acordo com
                a Lei Geral de Proteção de Dados (LGPD) – Lei nº 13.709/18,
                Brasil, independentemente de seu conflito de disposições legais.
                <br />
                <br /> Nossa falha em fazer valer qualquer direito ou disposição
                destes Termos não será considerada uma renúncia desses direitos.
                Se qualquer disposição destes Termos for considerada inválida ou
                inexequível por um tribunal, as disposições restantes destes
                Termos permanecerão em vigor. Estes Termos constituem o acordo
                completo entre nós em relação ao nosso Serviço e substituem e
                substituem quaisquer acordos anteriores que possamos ter entre
                nós em relação ao Serviço.
              </Description>
              <TitleTerms>Alterações</TitleTerms>
              <Description>
                Nós nos reservamos o direito, a nosso exclusivo critério, de
                modificar ou substituir estes Termos a qualquer momento. Se uma
                revisão for material, tentaremos avisar com pelo menos 15 dias
                de antecedência da entrada em vigor de quaisquer novos termos. O
                que constitui uma alteração material será determinado a nosso
                exclusivo critério.
                <br />
                <br /> Ao continuar a acessar ou usar nosso Serviço após essas
                revisões entrarem em vigor, você concorda em obedecer aos termos
                revisados. Se você não concordar com os novos termos, pare de
                usar o Serviço.
              </Description>
              <TitleTerms>Contate-nos</TitleTerms>
              <Description>
                {`Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco:`}{" "}
                <Detail>adm@twittech.dev.br</Detail>
              </Description>
            </BoxTerms>
          </ContentTerms>
        </Section>
        <Footer />
      </Main>
    </>
  );
}

export default Terms;
