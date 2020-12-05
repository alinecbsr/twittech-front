import styled from "styled-components/macro";
import { Title, Text } from "../typography";
import { colors } from "../colors";

export const Epigraph = styled(Title)`
  text-align: center;
  font-size: 2.5rem;
  max-width: 53rem;
  margin-bottom: 6rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
    max-width: 90%;
    line-height: 2.5rem;
  }

  @media (max-width: 600px) {
    margin-bottom: 3rem;
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
  grid-gap: 150px 50px;
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
  padding: 0;
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

  @media (max-width: 475px) {
    width: 7.3rem;
    height: 7.3rem;
  }
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

export const Occupation = styled(Name)`
  color: ${colors.primaryHighLight};
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0.5rem 0 0 0;
`;

export const Description = styled(Text)`
  margin: 1rem 0;
  color: ${colors.neutralLight};
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 2rem 0 0 0;
  padding: 0 1rem 1rem 1rem;
  text-align: center;

  @media (max-width: 419px) {
    margin: 0.8rem 0 0 0;
  }
`;

export const SocialContext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: ${colors.neutralDarkLight};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Social = styled.span`
  cursor: pointer;
  text-decoration: none;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem 1rem 0 1rem;
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
  background-color: ${colors.neutralDark};
`;

export const CardContainer = styled(TeamContainer)`
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  background-color: ${colors.neutralDark};
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  max-height: 100px;
  width: 95%;
  max-width: 410px;
  padding: 0;
  margin: 0 0 5rem 0;

  @media (max-width: 475px) {
    max-height: 180px;
    margin: 0 0 2rem 0;
  }
`;

export const Tags = styled.span`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-gap: 8px 10px;
  justify-items: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 3rem auto 0 auto;

  @media (max-width: 475px) {
    margin: 1rem auto 0 auto;
  }
`;

export const Tag = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${colors.primary};
  width: 105%;
  height: 2rem;
  padding: 0;
  background-color: ${colors.neutralDarker};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;

export const TagDescription = styled(Text)`
  color: ${colors.primary};
  font-size: 0.725rem;
  line-height: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.1px;
  margin: 0;
  padding: 0 0.2rem;
  text-align: center;
`;