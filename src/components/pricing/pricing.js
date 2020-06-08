import React from 'react';
import { ListStyle } from './style';
import FeatherIcon from 'feather-icons-react';

const List = props => {
  const { text } = props;

  return (
    <ListStyle className="list-single">
      <span className="icon">
        <FeatherIcon icon="check" size={14} />
      </span>
      <span>{text}</span>
    </ListStyle>
  );
};

export { List };
