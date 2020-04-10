/* eslint-disable react/no-array-index-key */
import React from 'react';

import links from './links';

import * as S from './styled';

const MenuLinks = () => {
  const renderLinkItems = () => links.map((link, i) => (
    <S.MenuLinksItem key={i}>
      <S.MenuLinksLink to={link.url} activeClassName="active">
        {link.label}
      </S.MenuLinksLink>
    </S.MenuLinksItem>
  ));


  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {renderLinkItems()}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  );
};


export default MenuLinks;
