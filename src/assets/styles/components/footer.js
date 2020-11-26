import styled from "styled-components/macro";
import { colors } from "../colors";
import { Content, Nav, LinkToGo, Btn } from "../typography";

export const ContentFooter = styled(Content)`
  background-color: ${colors?.primaryDark};
  height: 7rem;
  border-radius: 0 5rem 0 0;
  margin-top: 7rem;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 6.75rem;
  height: auto;
`;

export const List = styled(Nav)`
  width: 100%;
  max-width: 44rem;
`;

export const Item = styled(LinkToGo)`
  padding: 0;
  width: auto;
`;

export const Pipe = styled(LinkToGo)`
  width: auto;
  padding: 0;
  font-weight: 700;
  color: ${colors?.primary};
`;

export const BtnScroll = styled(Btn)`
  align-items: center;
  border-radius: 0.25rem;
  background-color: ${colors?.primaryDarker};
  width: 3.75rem;
  height: 2.5rem;
  margin: 0;
  padding: 0;
`;