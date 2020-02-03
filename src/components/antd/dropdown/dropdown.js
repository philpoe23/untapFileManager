import React from 'react';
import { Dropdown } from 'antd';
import { Content } from './dropdown-style';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../../config/theme/customize-antd';
const DropdownWithIcon = props => {
  const { content, placement, title, action } = props;
  const content1 = <Content>{content}</Content>;
  return (
    <ThemeProvider theme={theme}>
      <Dropdown placement={placement} title={title} overlay={content1} trigger={action !== undefined ? action : ['hover']}>
        {props.children}
      </Dropdown>
    </ThemeProvider>
  );
};

DropdownWithIcon.propTypes = {
  placement: PropTypes.string.isRequired,
  title: PropTypes.string,
  action: PropTypes.array,
  content: PropTypes.object.isRequired,
};

export { DropdownWithIcon };
