import styled from "styled-components/macro";
import { colors } from "../colors";

export const Tag = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 26px;
  padding: 32px;
  margin-top: 32px;
  background: ${colors.primaryDark};
  border-top-right-radius: 80px;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 130px;
    margin-top: 30px;
    padding: 32px 0;
  }
`;

export const Logo = styled.img`
  height: auto;
  max-width: 50%;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
    min-height: 60px;
  }
`;

export const Copyright = styled.p`
  color: ${colors.neutralLight};

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const MenuList = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const MenuItem = styled.li`
  border-right: 1px solid ${colors.primary};
  padding: 0 1rem;

  :last-of-type {
    border-right: none;
    display: flex;
  }

  :last-of-type a {
    padding-right: 8px;
  }
`;

export const MenuItemLink = styled.a`
  padding-right: 8px;
  color: ${colors.neutral};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 250ms linear 0s;

  :hover {
    color: ${colors.primaryLight};
  }
`;