import React from 'react';
import { useSelector } from 'react-redux';
import Content from './Content';

const Draft = () => {
  const [searchData, email] = useSelector(state => [state.searchData, state.email.allMessage]);
  return (
    <Content
      email={email.filter(value => {
        return value.type === 'draft';
      })}
      searchData={searchData}
    />
  );
};

export default Draft;
