import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const Avatar = () => {
  const { avatarImage: { childImageSharp: { fixed } } } = useStaticQuery(graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpg"}) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `);

  return (
    <S.AvatarWrapper fixed={fixed} />
  );
};

export default Avatar;
