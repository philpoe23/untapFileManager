import React from 'react';
import { MainWraper, SocialIcon, Title, SubTitle } from './overview-style';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

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
SocialMediaContent.propTypes = {
  icon: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
export { SocialMediaContent };
