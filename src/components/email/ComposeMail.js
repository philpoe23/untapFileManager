import React, { useState } from 'react';
import { MailBox } from './style';
import FeatherIcon from 'feather-icons-react';
import RichTextEditor from 'react-rte';
import { Tag } from '../tags/tags';

const ComposeMail = ({ onClick, onChange }) => {
  const [state, setState] = useState({
    value: RichTextEditor.createEmptyValue(),
  });

  const onChanges = value => {
    setState({ value });
    if (onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      onChange(value.toString('html'));
    }
  };
  const checked = checked => {
    console.log(checked);
  };

  return (
    <MailBox>
      <div className="header">
        <p>New Message</p>
        <div className="icon-right">
          <FeatherIcon icon="maximize-2" size={18} />
          <FeatherIcon onClick={onClick} icon="x" size={18} />
        </div>
      </div>
      <div className="body">
        {/* <Tag animate onChange={checked} data={[]} />
        <RichTextEditor value={state.value} onChange={onChanges} /> */}
      </div>
      <div className="fotter"></div>
    </MailBox>
  );
};

export default ComposeMail;
