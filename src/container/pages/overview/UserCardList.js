import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserCard } from '../style';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';

const UserCardList = ({ user }) => {
  const { name, designation, img, content } = user;
  return (
    <UserCard>
      <div className="card user-card">
        <Cards headless>
          <figure
            style={{
              marginBottom: 0,
              display: 'flex',
              alignItems: 'center',
              textAlign: 'left',
              justifyContent: 'space-between',
            }}
          >
            <img src={require(`../../../${img}`)} alt="" />

            <figcaption
              style={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'left',
                justifyContent: 'space-between',
              }}
            >
              <div className="card__content">
                <Heading className="card__name" as="h6">
                  <Link to="#">{name}</Link>
                </Heading>
                <p className="card__designation">{designation}</p>
                <p>{content}</p>
                <p>
                  <span>$25/hr</span>
                  <span>$88K earned</span>
                </p>
              </div>

              <div className="card__actions">
                <Button size="default" type="white">
                  View Profile
                </Button>
                <Button size="default" type="white">
                  Message
                </Button>
              </div>
            </figcaption>
          </figure>
        </Cards>
      </div>
    </UserCard>
  );
};

UserCardList.propTypes = {
  user: PropTypes.object,
};

export default UserCardList;
