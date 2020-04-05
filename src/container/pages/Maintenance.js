import React from 'react';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';

const Maintenance = () => {
  return (
    <Main>
      <img src={require(`../../static/img/pages/maintenance.svg`)} alt="maintenance" />
      <Heading as="h3">We are currently performing maintenance</Heading>
      <p>
        We're making the system more awesome. <br />
        We'll be back shortly.
      </p>
    </Main>
  );
};

export default Maintenance;
