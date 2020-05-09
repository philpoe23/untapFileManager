import React from 'react';
import EmailContent from './Content';
import { useSelector } from 'react-redux';

const Sent = () => {
  const [searchData, email] = useSelector(state => [state.searchData, state.email.allMessage]);
  return (
    <EmailContent
      email={email.filter(email => {
        return email.type === 'sent';
      })}
      searchData={searchData}
    />
  );
};

export default Sent;
