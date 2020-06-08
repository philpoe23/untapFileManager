import React from 'react';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { MaintananceWrapper } from './style';

const Maintenance = () => {
  return (
    <Main>
      <MaintananceWrapper>
        <div className="maintanace-content">
          <img src={require(`../../static/img/pages/maintenance.svg`)} alt="maintenance" />
          <Heading as="h3">We are currently performing maintenance</Heading>
          <p>
            We're making the system more awesome. <br />
            We'll be back shortly.
          </p>
        </div>
      </MaintananceWrapper>
    </Main>
  );
};

export default Maintenance;
