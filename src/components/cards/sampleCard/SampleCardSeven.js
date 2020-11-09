import React from 'react';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { Dropdown } from '../../dropdown/dropdown';
import { Button } from '../../buttons/buttons';
import { Checkbox } from '../../checkbox/checkbox';

const CardWrapper = styled.figure`
  background: #fff;
  border-radius: 10px;
  padding: 25px;
  overflow: hidden;
  position: relative;
  .card-short{
    .card-short__title{
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 18px;
      img{
        max-width: 50px;
        margin-right: 20px;
      }
    }
    .card-short__bottom {
      .card-short-actions{
        .ant-btn-circle{
          border-radius: 42px;
        }
        .content-action{
          display: flex;
          align-items: center;
        }
      }
      &.installed{
        display: flex;
        justify-content: space-between;
        .content-not-installed{
          display: none;
        }
      }
    }
  }
`;

const SampleCardSeven = ({ item }) => {
  const { installed, content, title, img } = item;
  return (
    <CardWrapper>
      <div className="card-short">
        <h4 className="card-short__title align-v-center">
          <img src={require(`../../../${img}`)} alt="" />
          <span>{title}</span>
        </h4>
        <div className="card-short__content">
          <p>{content}</p>
        </div>
        <div className={installed ? "card-short__bottom installed" : "card-short__bottom"}>
          <div className="card-short-checkbox">
            <Checkbox>Installed</Checkbox>
          </div>
          <div className="card-short-actions">
            <div className="content-installed content-action">
              <Button type="primary" size="small" shape="circle" outlined rounded>
                Open
              </Button>
              <div className="more">
                  <Dropdown
                  content={
                      <>
                      <Link to="#">Edit</Link>
                      <Link to="#">Delete</Link>
                      <Link to="#">View</Link>
                      </>
                  }
                  >
                  <Link to="#">
                      <FeatherIcon icon="more-horizontal" />
                  </Link>
                  </Dropdown>
              </div>
            </div>
            <div className="content-not-installed content-action">
              <Button type="primary" size="small" shape="circle" raised rounded>
                Open
              </Button>
              <div className="more">
                  <Dropdown
                  content={
                      <>
                      <Link to="#">Edit</Link>
                      <Link to="#">Delete</Link>
                      <Link to="#">View</Link>
                      </>
                  }
                  >
                  <Link to="#">
                      <FeatherIcon icon="more-horizontal" />
                  </Link>
                  </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

SampleCardSeven.propTypes = {
  item: propTypes.object,
};

SampleCardSeven.defaultProps = {
  item: {
    id: 1,
    title: 'Adobe CC',
    installed: true,
    content: 'Lorem Ipsum is simply dummy text of the and the ',
    img: 'static/img/icon/adobe.svg',
  },
};

export default SampleCardSeven;
