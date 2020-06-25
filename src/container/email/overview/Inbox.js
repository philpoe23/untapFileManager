import React from 'react';
import Content from './Content';
import { useSelector } from 'react-redux';

const Inbox = () => {
  const [searchData, email] = useSelector(state => [state.headerSearchData, state.email.allMessage]);
  return (
    <Content
      email={email.filter(email => {
        return email.type === 'inbox';
      })}
      searchData={searchData}
    />
  );
};

export default Inbox;
