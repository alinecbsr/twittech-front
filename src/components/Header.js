import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Btn } from "../assets/styles/typography";
import {
  HeaderStyle,
  Container,
  LogoLink,
  Logo,
  Nav,
  NavList,
  ListItem,
  ListLink,
  ListItemLogin,
  ListLinkLogin,
  MenuToggle,
  ToggleOne,
  ToggleTwo,
  ToggleThree,
} from "../assets/styles/components/header"

export default function Header() {
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <HeaderStyle>
       <Container>
        <LogoLink>
          <Logo src={logo} alt="Twittech logo" />
        </LogoLink>

        <Nav menuVisibility={menuVisibility}>
          <NavList menuVisibility={menuVisibility}>
            <ListItem>
              <Link to="/">
                <ListLink onClick={() => setMenuVisibility(false)}>
                  Home
                </ListLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/about">
                <ListLink onClick={() => setMenuVisibility(false)}>
                  Conheça
                </ListLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/contact">
                <ListLink onClick={() => setMenuVisibility(false)}>
                  Contato
                </ListLink>
              </Link>
            </ListItem>
            <ListItemLogin>
              <Link to="/login">
                <ListLinkLogin onClick={() => setMenuVisibility(false)}>
                  Entrar
                </ListLinkLogin>
              </Link>
            </ListItemLogin>
          </NavList>
        </Nav>
        <Link to="/login">
          <Btn>Entrar</Btn>
        </Link>
        <MenuToggle
          rule="button"
          aria-label="Abrir menu"
          onClick={() => setMenuVisibility(!menuVisibility)}
        >
          <ToggleOne menuVisibility={menuVisibility} />
          <ToggleTwo menuVisibility={menuVisibility} />
          <ToggleThree menuVisibility={menuVisibility} />
        </MenuToggle>
      </Container>
    </HeaderStyle> 
  );
}
