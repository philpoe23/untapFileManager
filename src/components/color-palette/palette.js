import React, { Fragment } from 'react';
import { ColorPalette } from './style';
const Palette = props => {
  const { colorCode } = props;
  return (
    <Fragment>
      <ColorPalette type={colorCode}>{props.children}</ColorPalette>
      {colorCode}
    </Fragment>
  );
};

export default Palette;
