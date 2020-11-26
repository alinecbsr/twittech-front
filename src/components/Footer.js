import React from 'react';
import logo from "../assets/images/logo.svg";

import {
  Tag,
  Logo,
  Details,
  MenuList,
  MenuItem,
  MenuItemLink,
} from '../assets/styles/components/footer';

export default function Footer() {
  return (
    <Tag>
      <div className="do-logo">
        <MenuItemLink href="#home">
          <Logo src={logo} alt="Twittech Logo" />
        </MenuItemLink>
      </div>
      <Details>
        <MenuList>
            <MenuItem>
              <MenuItemLink>Termos e condições </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>Política de privacidade</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>Código de conduta</MenuItemLink>
            </MenuItem>
        </MenuList>
      </Details>
    </Tag>
  );
}