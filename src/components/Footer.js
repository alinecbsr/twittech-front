import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

import {
  Tag,
  Logo,
  Details,
  MenuList,
  MenuItem,
  MenuItemLink,
} from "../assets/styles/components/footer";

export default function Footer() {
  return (
    <Tag>
      <div className="do-logo">
        <MenuItemLink>
          <Logo src={logo} alt="Twittech Logo" />
        </MenuItemLink>
      </div>
      <Details>
        <MenuList>
          <MenuItem>
            <Link to="/terms">
              <MenuItemLink>Termos e condições </MenuItemLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/privacy">
              <MenuItemLink>Política de privacidade</MenuItemLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/conduct">
              <MenuItemLink>Código de conduta</MenuItemLink>
            </Link>
          </MenuItem>
        </MenuList>
      </Details>
    </Tag>
  );
}
