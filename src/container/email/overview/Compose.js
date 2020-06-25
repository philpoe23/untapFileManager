import React, { useState } from 'react';
import { MailBox } from './style';
import FeatherIcon from 'feather-icons-react';
import RichTextEditor from 'react-rte';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Input } from 'antd';
import propTypes from 'prop-types';
import MailComposer from './MailComposer';

const Compose = ({ close }) => {
  const [state, setState] = useState({
    value: RichTextEditor.createEmptyValue(),
    tags: [],
    size: 'small',
  });

  const onChange = value => {
    setState({ ...state, value });
  };

  const handleChange = tags => {
    setState({ ...state, tags });
  };

  const toggleSize = e => {
    return setState({
      ...state,
      size: state.size === 'small' ? 'big' : 'small',
    });
  };

  const onMailSend = async () => {
    //hit the mail sender api
  };

  return (
    <MailBox size={state.size}>
      <div className="header">
        <p>New Message</p>
        <div className="icon-right">
          <FeatherIcon onClick={toggleSize} icon="maximize-2" size={18} />
          <FeatherIcon onClick={close} icon="x" size={18} />
        </div>
      </div>

      <div className="body">
        <div className="group">
          <Input placeholder="Subject" type="text" />
        </div>
        <MailComposer onSend={onMailSend} onChange={onChange} />
      </div>
    </MailBox>
  );
};

Compose.propTypes = {
  close: propTypes.func.isRequired,
  onChange: propTypes.func,
};

Compose.default = {
  onChange: false,
};

export default Compose;
