import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BlockSpan } from '../style';
import { textRefactor } from '../../../Helper';
import moment from 'moment';
import { filterSinglepage } from '../../../redux/chat/actionCreator';

const PrivetChat = ({ chat, match, filterSinglepage }) => {
  const [state] = useState({
    chatData: chat,
  });

  const { chatData } = state;

  const dataFiltering = e => {
    filterSinglepage(e.currentTarget.getAttribute('data-email'));
  };

  return (
    <ul>
      {chatData !== undefined &&
        chatData
          .sort((a, b) => {
            return b.time - a.time;
          })
          .map((user, index) => {
            const { userName, content, email } = user;
            const id = content[content.length - 1]['time'];
            const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
            return (
              <li key={index + 1}>
                <NavLink onClick={dataFiltering} data-email={email} to={match.path + '/' + email}>
                  <BlockSpan>
                    {userName}
                    <span style={{ float: 'right' }}>
                      {same ? moment(id).format('hh:mm A') : moment(id).format('LL')}
                    </span>
                  </BlockSpan>
                  <BlockSpan>{textRefactor(content[content.length - 1]['content'], 5)}</BlockSpan>
                </NavLink>
              </li>
            );
          })}
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    filterSinglepage: paramsId => dispatch(filterSinglepage(paramsId)),
  };
};

const mapStateToProps = state => {
  return {
    chat: state.chat.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivetChat);
