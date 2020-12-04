import styled from "styled-components/macro";

import { Title, Text, Context } from "../typography";
import { colors } from "../colors";

export const Epigraph = styled(Title)`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.8rem;
  width: 80%;
  max-width: 200px;
  margin: 0 0 2rem 0;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    max-width: 90%;
    line-height: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    max-width: 80%;
    line-height: 1.3rem;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
  width: 95%;
  margin: 2rem auto 0 auto;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.neutral};
  color: ${colors.primary};
  width: 18rem;
  height: 37rem;
  padding: 2rem;
`;

export const Photo = styled.img`
  width: 10.5rem;
  height: 11.3rem;
`;

export const Name = styled.h3`
  margin: 16px 0 0 0;
  color: ${colors.primary};
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
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
  padding: 3rem 0 5rem 0;
  background-color: ${colors.neutralDarke};
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
  background-color: ${colors.primaryLight};
`;

export const Content = styled(Context)`
  justify-content: space-between;
  width: 100%;
  max-width: 63.75rem;
  height: auto;
  min-height: auto;
  margin: 0;
  padding: 4rem 0 0 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    max-width: 100%;
    justify-content: center;
  }
`;

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 6rem 0 0 0;

  @media (max-width: 1024px) {
    align-items: center;
    margin: 2rem 0 0 0;
    order: 1;
  }
`;

export const InputSearch = styled.input`
  width: 90%;
  max-width: 19rem;
  height: 3.75rem;
  font-size: 1.125rem;
  padding: 0 0 0 1rem;
  margin: 0.5rem 0;
  background: ${colors.primaryDark};
  color: ${colors.neutralLight};
  border: none;
  border-radius: 8px;
  ::placeholder {
    color: ${colors.neutralLight};
  }
`;

export const ImgDemand = styled.img`
  width: 24rem;
  height: 18rem;
  margin: 8rem 0 0 0;

  @media (max-width: 600px) {
    margin: 1rem 0 0 0;
    max-width: 80%;
  }

  @media (max-width: 420px) {
    width: 14rem;
    height: 12rem;
    margin: 1rem 0 0 0;
    order: 0;
  }
`;

export const Power = styled.img`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0 0 1.5rem;

  @media (max-width: 1023px) {
    padding: 1rem;
    display: none;
  }
`;
