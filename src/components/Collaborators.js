import React, { useState } from "react";
import team from "../data/team";
import Tags from "../components/Tags";

import Linkedin from "../assets/images/linkedin.svg";
import GitHub from "../assets/images/github.svg";

import {
  CardContainer,
  Cards,
  Card,
  Photo,
  Name,
  Occupation,
  Description,
  SocialContext,
  Social,
  Icon,
  TagContainer,
} from "../assets/styles/pages/Contact";


const Collaborators = props => {
  const [index] = useState(0);

  const data = props.data || null;

  return (
    <CardContainer>
      <Cards>
        {data &&
          data.map((user) => (
            <Card key={Math.random()}>
              <Photo src={user.photo} alt={user.name} />
              <Name>{user.name}</Name>
              <Occupation>{user.occupation}</Occupation>
              <Description>{user.description}</Description>

              <TagContainer>
        <Tags data={team[index].data} />
      </TagContainer>

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