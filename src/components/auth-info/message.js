import React, { useEffect } from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PopupWithIcon } from '../popup/popup';
import { readMessageList } from '../../redux/actions/auth-info/message-list';

const MessageBox = props => {
  const { message, readMessage } = props;

  useEffect(() => {
    let unmount = false;

    if (!unmount) {
      readMessage();
    }
    return () => {
      unmount = true;
    };
  });

  const content = (
    <div>
      {message.map(item => {
        const { id, from } = item;
        return (
          <NavLink key={id} to="#">
            {from}
          </NavLink>
        );
      })}
      <p>
        <NavLink style={{ display: 'block', textAlign: 'center' }} to="#">
          Read more
        </NavLink>
      </p>
    </div>
  );

  return (
    <div className="message" style={{ marginTop: 10 }}>
      <PopupWithIcon placement="bottomLeft" title="Message List" content={content} trigger="click">
        <Badge dot={true} offset={[-8, -5]}>
          <NavLink to="#" className="head-example">
            <FeatherIcon icon="mail" size={20} />
          </NavLink>
        </Badge>
      </PopupWithIcon>
    </div>
  );
};
MessageBox.propTypes = {
  message: PropTypes.array,
};
const mapSTateToProps = state => {
  return {
    message: state.message,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    readMessage: () => dispatch(readMessageList()),
  };
};
export default connect(mapSTateToProps, mapDispatchToProps)(MessageBox);
