import styled from 'styled-components/macro';
import { Title, Text } from '../typography';
import { colors } from '../colors';

export const Epigraph = styled(Title)`
  text-align: center;
  font-size: 2.5rem;
  max-width: 53rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
    max-width: 90%;
    line-height: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    max-width: 80%;
    line-height: 1.8rem;
  }
`;

export const BoxEpigraph = styled.div`
  margin-top: 11rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  padding: 0;
  width: 100%;
`;

export const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-items: center;
  align-items: center;
  grid-gap: 100px;
  width: 100%;
  margin: 6rem auto 0 auto;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primaryDark};
  color: ${colors.primary};
  width: 90%;
  height: 100%;
  padding: 2rem;
  border-radius: 10px;

  @media (max-width: 600px) {
    max-width: 80%;
  }
`;

export const Photo = styled.img`
  width: 10.5rem;
  height: 11.3rem;
  border-radius: 50%;
  margin-top: -5rem;
`;

export const Name = styled.h3`
  margin: 1rem 0 0 0;
  color: ${colors.neutralLight};
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 110%;
  letter-spacing: 0.01em;
`;

export const Participation = styled(Name)`
  margin-top: -1rem;
  color: ${colors.primaryClear};
  font-weight: 600;
`;

export const Description = styled(Text)`
  margin: 1rem 0;
  color: ${colors.primaryLight};
  text-align: justify;
`;

export const SocialContext = styled.div`
  display: flex;
  margin: 0;
  bottom: 0;
`;

export const Social = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 1rem;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1020px;
  width: 100%;
  height: 100%;
  padding: 0 0 5rem 0;
  background-color: ${colors.primaryLight};
`;

export const CardContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  max-width: 1020px;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: ${colors.neutralDark};
`;