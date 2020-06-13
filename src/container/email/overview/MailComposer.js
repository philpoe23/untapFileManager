import React, { useState } from 'react';
import { MailBox } from './style';
import FeatherIcon from 'feather-icons-react';
import RichTextEditor from 'react-rte';
import 'react-tagsinput/react-tagsinput.css';
import { Button } from '../../../components/buttons/buttons';
import { NavLink } from 'react-router-dom';

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

  const onSubmit = () => {
    onSend(state.value.toString('html'));
  };

  return (
    <MailBox>
      <RichTextEditor value={state.value} onChange={onChanges} />
      <div className="fotter">
        <div className="left d-flex align-items-center">
          <Button size="default" type="primary" onClick={onSubmit} raised>
            Send
          </Button>
          <NavLink to='/'>
            <FeatherIcon icon="paperclip" size={18} />
          </NavLink>
          <NavLink to='/'>
            <FeatherIcon icon="alert-circle" size={18} />
          </NavLink>
        </div>
        <div className="right">
          <NavLink to='/'>
            <FeatherIcon icon="trash-2" size={18} />
          </NavLink>
        </div>
      </div>
    </MailBox>
  );
};

export default MailComposer;
