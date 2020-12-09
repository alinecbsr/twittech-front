import React from "react";
import Linkedin from "../assets/images/linkedin.svg";
import GitHub from "../assets/images/github.svg";
import WhatsApp from "../assets/images/whatsApp.svg";
import Like from "../assets/images/like.svg";
import noFavorite from "../assets/images/noFavorite.svg";

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
  Tags,
  TagDescription,
  CardBox,
  BoxIcons,
  Icons,
  Count,
} from "../assets/styles/components/Users";

const Users = (props) => {
  const data = props.data || null;
  const renderSkills = (skills) => {
    if(skills && skills.length){
      return skills.map((s) => (
        <TagDescription key={s._id}>
          <TagDescription>{s.name}</TagDescription>
        </TagDescription>
      ));
    }
  };

  return (
    <CardContainer>
      <Cards>
        {data &&
          data.map((user) => (
            <Card key={Math.random()}>
              <CardBox>
                <BoxIcons>
                  <Icons src={Like} alt="Icone Like" />
                  <Count>{user.likes.length}</Count>
                </BoxIcons>
                <Photo src={`${user.github}.png`} alt={user.name} />
                <Icons src={noFavorite} alt="Icone não Favorito" />
              </CardBox>
              <Name>{user.name}</Name>
              <Occupation>{user.role}</Occupation>
              <Description>{user.description}</Description>
              <TagContainer>
                <Tags>
                {renderSkills(user.skills)}
                </Tags>
              </TagContainer>
              <SocialContext>
                <Social href={user.github} target="_blank">
                  <Icon src={GitHub} alt="Icone GitHub" />
                </Social>
                <Social href={user.linkedin} target="_blank">
                  <Icon src={Linkedin} alt="Icone LinkedIn" />
                </Social>
                <Social href={user.linkedIn} target="_blank">
                  <Icon src={WhatsApp} alt="Icone WhatsApp" />
                </Social>
              </SocialContext>
            </Card>
          ))}
      </Cards>
    </CardContainer>
  );
};

export default Users;
