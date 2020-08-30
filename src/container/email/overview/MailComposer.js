import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import RichTextEditor from 'react-rte';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { MailBox } from './style';
import { Button } from '../../../components/buttons/buttons';

const MailComposer = ({ onChange, onSend, defaultTag, replay }) => {
  const [state, setState] = useState({
    value: RichTextEditor.createEmptyValue(),
    tags: defaultTag ? [defaultTag] : [],
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="group">
          <div className="reply-inner" style={{ display: 'flex', alignItems: 'center' }}>
            {!replay ? null : <span className="reply-title">Replay To</span>}
            <TagsInput
              inputProps={{
                placeholder: replay ? null : 'To',
              }}
              value={state.tags}
              onChange={handleChange}
            />
          </div>
          <span className="mail-cc">Cc</span>
        </div>
        <div className="group">
          <RichTextEditor placeholder="Type your message..." value={state.value} onChange={onChanges} />
        </div>
      </div>

      <div className="footer">
        <div className="left d-flex align-items-center">
          <Button size="default" type="primary" onClick={onSubmit} raised>
            Send
          </Button>
          <NavLink to="/">
            <FeatherIcon icon="paperclip" size={16} />
          </NavLink>
          <NavLink to="/">
            <FeatherIcon icon="alert-circle" size={16} />
          </NavLink>
        </div>
        <div className="right">
          <NavLink to="/">
            <FeatherIcon icon="trash-2" size={16} />
          </NavLink>
        </div>
      </div>
    </MailBox>
  );
};
MailComposer.propTypes = {
  onChange: propTypes.func.isRequired,
  onSend: propTypes.func.isRequired,
  defaultTag: propTypes.string,
};

export default MailComposer;
