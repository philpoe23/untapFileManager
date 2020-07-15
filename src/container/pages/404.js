import React from 'react';
import { ErrorWrapper } from './style';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';

const NotFound = () => {
  return (
    <Main>
      <ErrorWrapper>
        <img src={require(`../../static/img/pages/404.svg`)} alt="404" />
        <Heading className="error-text" as="h3">
          404
        </Heading>
        <p>Sorry! the page you are looking for doesn&apost exist.</p>
        <Button size="default" type="primary" to="/">
          Return Home
        </Button>
      </ErrorWrapper>
    </Main>
  );
};

export default NotFound;
