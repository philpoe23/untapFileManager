import React from 'react';
import Content from './Content';
import { connect } from 'react-redux';

const Draft = ({ searchData, email }) => {
  return (
    <Content
      email={email.filter(email => {
        return email.type === 'draft';
      })}
      searchData={searchData}
    />
  );
};

const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
    email: state.email.allMessage,
  };
};

export default connect(mapStateToProps)(Draft);
