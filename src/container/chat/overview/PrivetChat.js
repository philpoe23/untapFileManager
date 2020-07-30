import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { BlockSpan } from '../style';
import { textRefactor } from '../../../components/utilities/utilities';
import { filterSinglePage } from '../../../redux/chat/actionCreator';

const PrivateChat = ({ match }) => {
  const dispatch = useDispatch();
  const chatData = useSelector(state => state.chat.data);

  const dataFiltering = email => {
    dispatch(filterSinglePage(email));
  };

  return (
    <ul>
      {chatData &&
        chatData
          .sort((a, b) => {
            return b.time - a.time;
          })
          .map(user => {
            const { userName, content, email } = user;
            const id = content[content.length - 1].time;
            const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
            return (
              <li key={id} className="chat-link-signle">
                <NavLink onClick={() => dataFiltering(email)} to={`${match.path}/${email}`}>
                  <div className="author-figure">
                    <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
                  </div>
                  <div className="author-info">
                    <BlockSpan className="author-name">{userName}</BlockSpan>

                    <BlockSpan className="author-chatText">
                      {textRefactor(content[content.length - 1].content, 5)}
                    </BlockSpan>
                  </div>
                  <div className="author-chatMeta">
                    <BlockSpan>{same ? moment(id).format('hh:mm A') : moment(id).format('LL')}</BlockSpan>
                  </div>
                </NavLink>
              </li>
            );
          })}
    </ul>
  );
};
PrivateChat.propTypes = {
  match: PropTypes.shape(PropTypes.object),
};
export default PrivateChat;
