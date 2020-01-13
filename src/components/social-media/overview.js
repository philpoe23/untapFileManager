import React from 'react';
import { MainWraper, SocialIcon, Title, SubTitle } from './overview-style';
import FontAwesome from 'react-fontawesome';

const SocialMediaContent = props => {
  const { icon, bgColor, title, subTitle } = props;
  return (
    <MainWraper>
      <SocialIcon bgColor={bgColor}>
        <FontAwesome className="super-crazy-colors" name={icon} size="2x" style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
      </SocialIcon>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </MainWraper>
  );
};

export { SocialMediaContent };
