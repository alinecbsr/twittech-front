import React, { useState } from "react";

import {
  TagContainer,
  Tags,
  Tag,
  TagDescription,
} from "../assets/styles/pages/Contact";


const Collaborators = props => {
  const data = props.data || null;

  const [index] = useState(0);


  return (
    <TagContainer>
      <Tags>
        {data &&
          data.map((user) => (
            <Tag key={Math.random()}>
              <TagDescription>{user.tagDescription}</TagDescription>
            </Tag>
          ))}
      </Tags>
    </TagContainer>
  );
};

export default Collaborators;