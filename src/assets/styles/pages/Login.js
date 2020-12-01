import styled from 'styled-components/macro';
import { colors } from '../colors';

import { Main, Title} from '../typography';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 31.5rem;
  margin: 6rem 0 0 0;
  padding: 1rem;
  border: 1px solid #e73;
`;

export const LoginContext = styled(Main)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 78vh;
  max-width: 25rem;
  border: 1px solid #c08;
`;


export const Epigraph = styled(Title)`
  text-align: center;
  margin: 0 0 3rem 0;
`;


export const Input = styled.input`
  width: 100%;
  height: 3.75rem;
  font-size: 1.125rem;
  padding: 0 0 0 1rem;
  margin: 0.5rem;
  background: ${colors.primaryDark};
  border: none;
  border-radius: 8px;
  ::placeholder {
    color: ${colors.neutralLight};
  }
`;