import React, { useState } from 'react';
import { MailBox } from './style';
import FeatherIcon from 'feather-icons-react';
import RichTextEditor from 'react-rte';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Input, Button } from 'antd';

const MailComposer = ({ onChange, onSend }) => {
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

  const onSubmit = () => {
    onSend(state.value.toString('html'));
  };

  return (
    <MailBox>
      <div className="body">
        <div className="group">
          <RichTextEditor value={state.value} onChange={onChanges} />
        </div>
      </div>
      <div className="fotter">
        <div className="left">
          <Button type="primary" onClick={onSubmit}>
            Send
          </Button>
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

export default MailComposer;
