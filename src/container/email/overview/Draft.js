import React from 'react';
import EmailContent from './EmailContent';
import { connect } from 'react-redux';

const Draft = ({ searchData, email }) => {
  return (
    <EmailContent
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
