import styled from 'styled-components/macro';
import { Title, Text, Context, Container } from '../typography';
import { colors } from '../colors';

export const Section = styled(Container)`
  padding: 0;
`;

export const Content = styled(Context)`
  width: 100%;
  max-width: 63.75rem;
  height: auto;
  margin: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    max-width: 100%;
    justify-content: center;
  }
`;

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: 100%;
  margin: 6rem 0 0 0;

  @media (max-width: 1024px) {
    margin: 2rem 0 0 0;
    order: 1;
  }
`;

export const NextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  margin: 0;

  @media (max-width: 1024px) {
    margin: 0;
    order: 1;
  }
`;

export const Titles = styled(Title)`
  text-transform: uppercase;
  width: auto;
  text-decoration: underline ${colors?.primaryDarker};
  margin: 1rem 0 0 0;


  @media (min-width: 600px) {
    margin: 4rem 0 0 0;
  }
`;

export const Description = styled(Text)`
  max-width: 37rem;
  margin: 4rem 0 0 0;

  @media (max-width: 1024px) {
    margin: 2rem 0 0 0;
  }

  @media (max-width: 500px) {
    margin: 2rem 0 0 0;
  }
`;

export const Descriptions = styled(Description)`
  text-align: end;
  margin-bottom: 3rem;
`;

export const TechMan = styled.img`
  width: 23rem;
  height: 18.5rem;
  margin: 8rem 0 0 0;


  @media (max-width: 420px) {
    width: 16rem;
    height: 16rem;
    order: 0;
  }
`;

export const Team = styled(TechMan)`
  width: 23rem;
  height: 18.5rem;
  margin: 0rem 0 0 0;


  @media (max-width: 420px) {
    width: 16rem;
    height: 16rem;
    order: 0;
  }
`;
