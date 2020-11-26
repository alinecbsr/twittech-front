import React from 'react';

import { Content, Logo, Nav , LinkToGo, Btn} from '../assets/styles/typography';

import { Context } from '../assets/styles/components/header';

import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <Content>
      <Context>
        <Logo src={logo} alt="Logo Twittech"/>
        <Nav>
          <LinkToGo>Conheça</LinkToGo>
          <LinkToGo>Contato</LinkToGo>
          <Btn>Entrar</Btn>
        </Nav>
      </Context>
    </Content>
  )
}

export default Header;