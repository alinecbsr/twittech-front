import styled from 'styled-components/macro';
import { colors } from './colors';

export const fonts = {
  base: "'IBM Plex Mono', monospace",
};



export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 63.75rem;
  height: auto;
  padding: 0 2.5rem;
`;

export const Context = styled(Container)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: auto;
`;

export const LinkToGo = styled.span`
  width: 100%;
  margin: 0;
  padding: 0 2.5rem 0 0;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.03em;
  transition: background-color 02s;
  cursor: pointer;
  &:hover {
    color: ${colors?.primaryLight};
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin: 0;
  padding: 0;
  color: ${colors?.neutral};
  font-weight: 400;
  font-size: 3rem;
  line-height: 3.25rem;
  letter-spacing: 0.01em;
`;

export const Logo = styled.img`
  width: 13.5rem;
  height: 3.75rem;
  margin: 1rem 0;
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 6.25rem;
  height: 2.75rem;
  margin: 0;
  padding: 0.88rem 1.5rem;
  color: ${colors?.primaryDark};
  background-color: ${colors?.primary};
  border: none;
  border-radius: 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.03em;
  transition: background-color 02s;
  cursor: pointer;
  &:hover {
    background-color: ${colors?.primaryDark};
    color: ${colors?.primary};
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

