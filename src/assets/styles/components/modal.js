import styled from "styled-components/macro";
import { colors } from "../colors";

export const ModalContext = styled.div`
  color: ${colors.neutralDark};
  display: ${props => props.show || "none"};
  justify-content: center;
  position: fixed;
  z-index: 999;
  padding: 6.5rem 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
`;
export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${colors.neutralDarker};
  margin: auto;
  width: 80%;
  max-width: 35.75rem;
  padding: 2rem;

  @media (max-width: 419px) {
    padding: 1rem;

  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px 5px 0 0;
  background-color: ${colors.neutralDarker};
  //margin: auto;
  padding: 0 0 1rem 0;
  width: 100%;
  height: 100%;
`;

export const ModalBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 95%;
`;

export const BoxIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 70px;
  height: 100%;
`;

export const Icons = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 1rem;
`;

export const Count = styled.p`
  color: ${colors.neutralLight};
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0;
  padding: 0.7rem 0 0 0;
  text-align: left;
  width: auto;

  @media (max-width: 419px) {
    margin: 0.8rem 0 0 0;
  }
`;

export const Photo = styled.img`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  margin: 0;

  @media (max-width: 475px) {
    width: 7.3rem;
    height: 7.3rem;
  }
`;

export const ModalClose = styled.span`
  flex-grow: 0;
  color: #aaaaaa;
  float: right;
  right: 0;
  font-size: 28px;
  font-weight: bold;
  width: 5%;

  :hover,
  :focus {
    color: ${colors.primary};
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  min-height: 3.75rem;
  height: auto;
  font-size: 1.125rem;
  padding: 0 0 0 1rem;
  margin: 0.5rem;
  background: ${colors.neutralDark};
  color: ${colors.neutralLight};
  border: none;
  border-radius: 8px;
  ::placeholder {
    color: ${colors.neutralLight};
  }
`;

export const ModalText = styled.textarea`
  width: 100%;
  height: 9.5rem;
  font-size: 1.125rem;
  padding: 1rem;
  margin: 0.5rem;
  background: ${colors.neutralDark};
  color: ${colors.neutralLight};
  border: none;
  border-radius: 8px;
  ::placeholder {
    color: ${colors.neutralLight};
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.75rem;
  margin: 1.2rem 0 0 0;
  padding: 0;
  background-color: ${colors.neutralDark};
  color: ${colors?.primary};
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3rem;
  letter-spacing: 0.03em;
  transition: background-color 02s;
  cursor: pointer;
  &:hover {
    background-color: ${colors?.neutralDarkLight};
    color: ${colors?.primary};
  }
`;

export const TextButton = styled.span`
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 250ms linear 0s;

  :hover {
    color: ${colors.primaryLight};
  }
`;

