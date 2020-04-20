import React, { useState } from 'react';
import { MailBox } from './style';
import FeatherIcon from 'feather-icons-react';
import RichTextEditor from 'react-rte';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Input, Button } from 'antd';

const ReplyMail = ({ onChange }) => {
  const [state, setState] = useState({
    value: RichTextEditor.createEmptyValue(),
    tags: [],
  });

  const onChanges = value => {
    setState({ ...state, value });
    if (onChange) {
      onChange(value.toString('html'));
    }
  };
  const handleChange = tags => {
    setState({ ...state, tags });
  };

  return (
    <MailBox>
      <div className="body">
        <div className="group">
          <TagsInput
            inputProps={{
              placeholder: 'Reply to',
            }}
            value={state.tags}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <Input placeholder="Subject" type="text" />
        </div>
        <div className="group">
          <RichTextEditor value={state.value} onChange={onChanges} />
        </div>
      </div>
      <div className="fotter">
        <div className="left">
          <Button type="primary">Send</Button>
          <FeatherIcon icon="paperclip" size={18} />
          <FeatherIcon icon="alert-circle" size={18} />
        </div>
        <div className="right">
          <FeatherIcon icon="trash-2" size={18} />
        </div>
      </div>
    </MailBox>
  );
};

export default ReplyMail;
