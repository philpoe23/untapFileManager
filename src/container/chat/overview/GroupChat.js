import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BlockSpan } from '../style';
import { textRefactor } from '../../../Helper';
import moment from 'moment';
import { filterSinglepageGroup } from '../../../redux/chat/actionCreator';
import { Button } from '../../../components/buttons/buttons';
import FeatherIcon from 'feather-icons-react';

const GroupChat = ({ chat, match, filterSinglepageGroup }) => {
  const [state] = useState({
    chatData: chat,
  });

  const { chatData } = state;

  const dataFiltering = e => {
    filterSinglepageGroup(e.currentTarget.getAttribute('data-id'));
  };

  return (
    <ul>
      <Button type="default">
        <FeatherIcon icon="edit" size={14} />
        Create New Group
      </Button>
      {chatData !== undefined &&
        chatData
          .sort((a, b) => {
            return b.time - a.time;
          })
          .map((user, index) => {
            const { groupName, content, id } = user;
            const time = content[content.length - 1]['time'];
            const same = moment(time).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
            return (
              <li key={index + 1}>
                <NavLink onClick={dataFiltering} data-id={id} to={match.path + '/' + id}>
                  <img src={require('../../../static/img/avatar/NoPath (2).png')} alt="" />
                  <BlockSpan>
                    {groupName}
                    <span style={{ float: 'right' }}>
                      {same ? moment(time).format('hh:mm A') : moment(time).format('LL')}
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
    filterSinglepageGroup: paramsId => dispatch(filterSinglepageGroup(paramsId)),
  };
};

const mapStateToProps = state => {
  return {
    chat: state.groupChat.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupChat);
