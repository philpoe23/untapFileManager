import React, { useState } from 'react';
import { MailBox } from './style';
import FeatherIcon from 'feather-icons-react';
import RichTextEditor from 'react-rte';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Input, Button, Upload } from 'antd';
import { Link } from 'react-router-dom';

const Compose = ({ onClick, onChange }) => {
  const [state, setState] = useState({
    value: RichTextEditor.createEmptyValue(),
    tags: [],
    size: 'small',
  });

  const onChanges = value => {
    setState({ ...state, value });

    if (onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      onChange(value.toString('html'));
    }
  };

  const handleChange = tags => {
    setState({ ...state, tags });
  };

  const sizeChange = e => {
    return setState({
      ...state,
      size: state.size === 'small' ? 'big' : 'small',
    });
  };

  return (
    <MailBox size={state.size}>
      <div className="header">
        <p>New Message</p>
        <div className="icon-right">
          <FeatherIcon onClick={sizeChange} icon="maximize-2" size={18} />
          <FeatherIcon onClick={onClick} icon="x" size={18} />
        </div>
      </div>

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
          <Input placeholder="Subject" type="text" />
        </div>
        <div className="group">
          <RichTextEditor value={state.value} onChange={onChanges} />
        </div>
      </div>

      <div className="fotter">
        <div className="left">
          <Button type="primary">Send</Button>
          <Upload>
            <Link to="#">
              <FeatherIcon icon="paperclip" size={18} />
            </Link>
          </Upload>
          <FeatherIcon icon="alert-circle" size={18} />
        </div>
        <div className="right">
          <FeatherIcon icon="trash-2" size={18} />
        </div>
      </div>
    </MailBox>
  );
};

export default Compose;
