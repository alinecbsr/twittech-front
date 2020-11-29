import styled from "styled-components/macro";
import { Title, Text, Context, Container } from "../typography";
import { colors } from "../colors";

export const Section = styled(Container)`
  padding: 0;
  min-height: auto;
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

export const ContentTerms = styled(Content)`
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  padding: 0;

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
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
    align-items: center;
    margin: 2rem 0 0 0;
    order: 1;
  }
`;

export const BoxTerms = styled(Box)`
  margin: 0;
`;

export const Titles = styled(Title)`
  text-align: center;
  font-size: 2.5rem;
  max-width: 18rem;
  margin-left: 4rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
    max-width: 90%;
    line-height: 2.5rem;
    margin-left: 0;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    max-width: 80%;
    line-height: 1.8rem;
  }
`;

export const TitleTerms = styled(Titles)`
  margin: 0;
  margin-left: 0;
  text-align: left;
  text-decoration: underline ${colors?.primaryDarker} 0.7px;

  @media (max-width: 1024px) {
    margin-left: 0;
  }

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const Ilustration = styled.img`
  width: 36rem;
  height: 26rem;
  margin: 8rem 0 0 0;

  @media (max-width: 600px) {
    margin: 1rem 0 0 0;
    max-width: 90%;
  }

  @media (max-width: 420px) {
    width: 16rem;
    height: 16rem;
    margin: 1rem 0 0 0;
    order: 0;
  }
`;

export const Description = styled(Text)`
  margin: 3rem 0 3rem 0;
  font-size: 1.125rem;
  line-height: 1.6rem;
  padding: 0;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  @media (max-width: 500px) {
  }
`;

export const Detail = styled(Description)`
  color: ${colors.primary};
  margin: 0;
  padding: 1rem 0 4rem 0;
`;