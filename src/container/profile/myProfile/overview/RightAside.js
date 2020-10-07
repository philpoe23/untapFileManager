import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import ModalVideo from 'react-modal-video';
import { RightAsideWrapper } from './style';
import { Button } from '../../../../components/buttons/buttons';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { profileFriendsChangeStatus } from '../../../../redux/profile/actionCreator';
import './video-modal.css';

const RightAside = () => {
  const dispatch = useDispatch();
  const { friends, gallery } = useSelector(state => {
    return {
      friends: state.Profile.friends,
      gallery: state.gallery.data,
    };
  });

  const [isOpen, setOpen] = useState(false);

  return (
    <RightAsideWrapper>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
      <Cards title="Friends">
        <ul>
          {friends.map(({ name, key, designation, status, img }) => {
            return (
              <li key={key}>
                <div>
                  <img src={require(`../../../../${img}`)} alt="" />
                  <p>
                    {name} <span>{designation}</span>
                  </p>
                </div>
                <Button
                  onClick={() => dispatch(profileFriendsChangeStatus(key))}
                  outlined={!status}
                  type={status ? 'primary' : 'white'}
                >
                  {!status ? (
                    'Follow'
                  ) : (
                    <>
                      <FeatherIcon icon="check" />
                      Following
                    </>
                  )}
                </Button>
              </li>
            );
          })}

          <Link to="#">Load more friends</Link>
        </ul>
      </Cards>
      <Cards isbutton={<Link to="/admin/pages/gallery">See All</Link>} title="Photos">
        <Row gutter={10}>
          {gallery.map(({ img, id }) => {
            return (
              id <= 6 && (
                <Col key={id} md={8} sm={12} xs={12}>
                  <img style={{ width: '100%' }} src={require(`../../../../${img}`)} alt="" />
                </Col>
              )
            );
          })}
        </Row>
      </Cards>
      <Cards isbutton={<Link to="#">See All</Link>} title="Videos">
        <Row gutter={10}>
          {gallery.map(({ img, id }) => {
            return (
              id <= 6 && (
                <Col key={id} md={8} sm={12} xs={12}>
                  <Link onClick={() => setOpen(true)} className="video" to="#">
                    <img style={{ width: '100%' }} src={require(`../../../../${img}`)} alt="" />
                    <span>
                      <FeatherIcon icon="play" />
                    </span>
                  </Link>
                </Col>
              )
            );
          })}
        </Row>
      </Cards>
    </RightAsideWrapper>
  );
};

export default RightAside;
