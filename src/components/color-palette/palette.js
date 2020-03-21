import React, { Fragment } from 'react';
import { ColorPalette } from './style';
import PropTypes from 'prop-types';

const Palette = props => {
  const { colorCode, bordered, content, bg, grad, direction } = props;
  return (
    <Fragment>
      <ColorPalette
        isgrad={grad}
        direction={direction}
        isbg={bg}
        iscontent={content}
        isbordered={bordered}
        type={colorCode}
      >
        <span>{props.children}</span> {content && <span>{!grad ? colorCode : colorCode[1]}</span>}
      </ColorPalette>
      {!content && colorCode}
    </Fragment>
  );
};

Palette.propTypes = {
  colorCode: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  bordered: PropTypes.bool,
  content: PropTypes.bool,
  bg: PropTypes.bool,
  grad: PropTypes.bool,
  direction: PropTypes.string,
};

export default Palette;
