import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import { Btn } from '../assets/styles/typography';
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
} from '../assets/styles/components/header';

export default function Header() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(`#${id}`);
          }
        });
      });
      document
        .querySelectorAll('section[id]')
        .forEach(section => observer.observe(section));
    });
  }, []);

  return (
    <HeaderStyle scroll={scroll}>
      <Container>
        <LogoLink
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src={logo} alt="Twittech logo" />
        </LogoLink>
        <MenuToggle
          rule="button"
          aria-label="Abrir menu"
          onClick={() => setMenuVisibility(!menuVisibility)}
        >
          <ToggleOne menuVisibility={menuVisibility} />
          <ToggleTwo menuVisibility={menuVisibility} />
          <ToggleThree menuVisibility={menuVisibility} />
        </MenuToggle>
        <Nav menuVisibility={menuVisibility}>
          <NavList menuVisibility={menuVisibility}>
            <ListItem>
              <ListLink
                href="#home"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Home
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink
                href="#about"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Conheça
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink
                href="#contact"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Contato
              </ListLink>
            </ListItem>
            <ListItemLogin>
              <ListLinkLogin
                href="#login"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Entrar
              </ListLinkLogin>
            </ListItemLogin>
          </NavList>
        </Nav>
        <Btn>Entrar</Btn>
      </Container>
    </HeaderStyle>
  );
}