import React, { useState } from 'react';
import { MailBox } from './style';
import FeatherIcon from 'feather-icons-react';
import RichTextEditor from 'react-rte';
import TagsInput from 'react-tagsinput';
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
          <TagsInput
            inputProps={{
              placeholder: 'To',
            }}
            value={state.tags}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <RichTextEditor value={state.value} onChange={onChanges} />
        </div>
      </div>
        
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
