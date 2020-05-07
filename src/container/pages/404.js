import React from 'react';
import { Main } from '../styled';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Heading from '../../components/heading/heading';

const NotFound = () => {
  return (
    <Main>
      <img src={require(`../../static/img/pages/404.svg`)} alt="404" />
      <Heading as="h3">404</Heading>
      <p>Sorry! the page you are looking for doesn't exist.</p>
      <Link to="/">Return Home</Link>
    </Main>
  );
};

export default NotFound;
