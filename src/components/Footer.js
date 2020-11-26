import React from "react";
import { FiArrowUp } from 'react-icons/fi';

import { Context } from "../assets/styles/typography";
import {
  ContentFooter,
  Logo,
  List,
  Item,
  Pipe,
  BtnScroll,
} from "../assets/styles/components/footer";

import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <ContentFooter>
      <Context>
        <Logo src={logo} alt="Logo Twittech" />
        <List>
          <Item>Termos e condições</Item>
          <Pipe>|</Pipe>
          <Item>Política de privacidade</Item>
          <Pipe>|</Pipe>
          <Item>Código de conduta</Item>
        </List>
        <BtnScroll>
        <FiArrowUp size={24} color="#E3E829" />
        </BtnScroll>
      </Context>
    </ContentFooter>
  );
}

export default Header;