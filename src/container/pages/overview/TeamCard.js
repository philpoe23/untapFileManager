import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { UserCard } from '../style';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';

const TeamCard = ({ user }) => {
  const { name, designation, img } = user;
  const actions = (
    <>
      <Link to="#">
        <FeatherIcon size={14} icon="eye" />
        <span>View</span>
      </Link>
      <Link to="#">
        <FeatherIcon size={14} icon="edit" />
        <span>Edit</span>
      </Link>
      <Link to="#">
        <FeatherIcon size={14} icon="trash-2" />
        <span>Delete</span>
      </Link>
    </>
  );

  return (
    <UserCard>
      <div className="card team-card">
        <Cards headless>
          <figure>
            <img src={require(`../../../${img}`)} alt="" />
            <figcaption>
              <div className="edit">
                <Dropdown content={actions}>
                  <Link className="card__more_actions" to="#">
                    <FeatherIcon icon="more-horizontal" size={16} />
                  </Link>
                </Dropdown>
              </div>
              <Heading className="card__name" as="h6">
                <Link to="#">{name}</Link>
              </Heading>
              <span className="card__designation">{designation}</span>
              <div className="card__social">
                <Link className="btn-icon facebook" to="#">
                  <FontAwesome name="facebook" />
                </Link>
                <Link className="btn-icon twitter" to="#">
                  <FontAwesome name="twitter" />
                </Link>
                <Link className="btn-icon dribble" to="#">
                  <FontAwesome name="dribbble" />
                </Link>
                <Link className="btn-icon instagram" to="#">
                  <FontAwesome name="instagram" />
                </Link>
              </div>
            </figcaption>
          </figure>
        </Cards>
      </div>
    </UserCard>
  );
};

TeamCard.propTypes = {
  user: PropTypes.object,
};

export default TeamCard;
