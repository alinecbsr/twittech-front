import React from "react";
import Linkedin from "../assets/images/linkedin.svg";
import GitHub from "../assets/images/github.svg";

import {
  CardContainer,
  Cards,
  Card,
  Photo,
  Name,
  Participation,
  Description,
  SocialContext,
  Social,
  Icon,
} from "../assets/styles/pages/Contact";


const Collaborators = props => {
  const data = props.data || null;

  return (
    <CardContainer>
      <Cards>
        {data &&
          data.map((user) => (
            <Card key={Math.random()}>
              <Photo src={user.photo} alt={user.name} />
              <Name>{user.name}</Name>
              <Participation>Director</Participation>
              <Description>{user.description}</Description>
              <SocialContext>
                <Social href={user.gitHub} target="_blank">
                  <Icon src={GitHub} alt="Icon GitHub" />
                </Social>
                <Social href={user.linkedIn} target="_blank">
                  <Icon src={Linkedin} alt="Icon LinkedIn" />
                </Social>
              </SocialContext>
            </Card>
          ))}
      </Cards>
    </CardContainer>
  );
};

export default Collaborators;