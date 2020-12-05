import styled from 'styled-components/macro';
import { colors } from '../colors';

import { Main, Title, Text } from '../typography';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: auto;
  margin: 8rem 0 0 0;
  padding: 0 1rem;
`;

export const LoginContext = styled(Main)`
  display: flex;
  min-height: auto;
  height: 100%;
  max-width: 25rem;
  margin: 0 0 3rem 0;
`;

export const Epigraph = styled(Title)`
  text-align: center;
  margin: 2rem 0;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.75rem;
  font-size: 1.125rem;
  padding: 0 0 0 1rem;
  margin: 0.5rem;
  background: ${colors.primaryDark};
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
  background-color: ${colors?.primaryDark};
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

export const Administer = styled.span`
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
  transition: all 250ms linear 0s;

  :hover {
    color: ${colors.primaryLight};
  }
`;

export const Registrations = styled(Administer)`
  font-weight: 700;
`;

export const BoxLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 1.5rem 0 0 0;
`;

export const Return = styled.img`
  height: auto;
  max-width: 1rem;
  margin: 0 0.5rem 0 0;
`;

export const RecoverDescription = styled(Text)`
  text-align: justify;
  color: ${colors.neutral};
  line-height: 1.5rem;
  padding: 0 0 2rem 0;
`;

export const LoginBox = styled(BoxLogin)`
  margin: 4rem 0 0 0;
`;
