import React from 'react';
import Content from './Content';
import { useSelector } from 'react-redux';

const Spam = () => {
  const [searchData, email] = useSelector(state => [state.searchData, state.email.allMessage]);
  return (
    <Content
      email={email.filter(email => {
        return email.type === 'spam';
      })}
      searchData={searchData}
    />
  );
};

export default Spam;
