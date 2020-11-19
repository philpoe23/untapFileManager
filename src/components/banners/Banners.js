import React from 'react';
import { Figure2, Figure3, Figure6, Figure7, BannerNormal } from './Style';
import { Button } from '../buttons/buttons';
import { Cards } from '../cards/frame/cards-frame';

const Banner1 = () => {
  return (
    <BannerNormal>
      <Cards headless>
        <h2>15 Days Free Trail</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
        <Button className="btn-outlined" size="small" outlined type="primary">
          Start
        </Button>
      </Cards>
    </BannerNormal>
  );
};

const Banner2 = () => {
  return (
    <Cards bodyStyle={{ background: '#5F63F2', borderRadius: '10px' }} headless>
      <Figure2>
        <img src={require('../../static/img/banner/1.png')} alt="" />
        <figcaption>
          <h2>Upgrade your plan</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <Button size="large" type="white">
            Upgrade
          </Button>
        </figcaption>
      </Figure2>
    </Cards>
  );
};

const Banner3 = () => {
  return (
    <Cards bodyStyle={{ background: '#2C99FF', borderRadius: '10px' }} headless>
      <Figure3>
        <img src={require('../../static/img/banner/2.png')} alt="" />
        <figcaption>
          <h2>Earn More Money</h2>
          <Button size="large" type="white">
            Learn More
          </Button>
        </figcaption>
      </Figure3>
    </Cards>
  );
};

const Banner4 = () => {
  return (
    <Cards bodyStyle={{ background: '#272B41', borderRadius: '10px' }} headless>
      <Figure3>
        <img src={require('../../static/img/banner/3.png')} alt="" />
        <figcaption>
          <h2>Earn More Money</h2>
          <p>Weekly performance bonus</p>
          <Button size="large" type="white">
            Learn More
          </Button>
        </figcaption>
      </Figure3>
    </Cards>
  );
};

const Banner5 = () => {
  return (
    <Cards bodyStyle={{ background: '#2C99FF', borderRadius: '10px' }} headless>
      <Figure3>
        <img src={require('../../static/img/banner/4.png')} alt="" />
        <figcaption>
          <h2>Congratulations Jhon!</h2>
          <p>Best Seller on the last month.</p>
          <Button size="large" type="white">
            Learn More
          </Button>
        </figcaption>
      </Figure3>
    </Cards>
  );
};

const Banner6 = () => {
  return (
    <Cards
      bodyStyle={{ background: `url(${require('../../static/img/banner/5.png')})`, borderRadius: '10px' }}
      headless
    >
      <Figure6>
        <img src={require('../../static/img/banner/badge.svg')} alt="" />
        <figcaption>
          <h2>Up to 50 OFF</h2>
          <Button className="btn-outlined" size="small" outlined type="light">
            Buy Now
          </Button>
        </figcaption>
      </Figure6>
    </Cards>
  );
};

const Banner7 = () => {
  return (
    <Cards headless>
      <Figure7>
        <img src={require('../../static/img/banner/6.png')} alt="" />
        <figcaption>
          <h2>Subscribe to our newsletter</h2>
          <p>Lorem ipsum dolor sit amet, consetetur </p>
          <Button className="btn-outlined" size="small" outlined type="light">
            Subscribe Now
          </Button>
        </figcaption>
      </Figure7>
    </Cards>
  );
};

export { Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7 };
