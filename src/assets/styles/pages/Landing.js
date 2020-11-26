import styled from 'styled-components/macro';

import { Title } from '../typography';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TitleHeader = styled(Title)`
  padding-left: 12rem;
  margin-top: 9rem;
  
  @media (max-width: 1023px) {
    padding-left: 4rem;
    font-size: 2rem;
    line-height: 2.25rem;
  }

  @media (max-width: 420px) {
    padding: 0;
    font-size: 2rem;
    line-height: 2.25rem;
    text-align: center;
  }
`;

export const HeaderTitle = styled(Title)`
  padding-left: 16rem;

  @media (max-width: 1023px) {
    padding-left: 4rem;
    font-size: 2rem;
    line-height: 2.25rem;
  }

  @media (max-width: 420px) {
    padding: 0;
    font-size: 2rem;
    line-height: 2.25rem;
    text-align: center;
  }
`;

export const Box = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-left: 2rem;
    text-align: center;
  }
`;

export const SideRight = styled.img`
  width: 100%;
  max-width: 32.75rem;
  height:auto;
  margin: 0 -4rem 0 3rem;

  @media (max-width: 1024px) {
    margin: 6rem 0 ;
    min-width: 15rem;
  }

  @media (max-width: 420px) {
    margin: 3rem 0 ;
  }
`;

export const SideLeft = styled.img`
  width: 100%;
  max-width: 23.85rem;
  height:auto;
  margin: 4rem  0 0 -6rem;

  @media (max-width: 1025px) {
    display: none
  }
`;