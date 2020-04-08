import React, { useState, useEffect } from 'react';
import { Row, Col, Rate } from 'antd';
import Heading from '../../../../components/heading/heading';
import { Button } from '../../../../components/buttons/buttons';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';

const Grid = ({ productsAll }) => {
  const [state, setState] = useState({
    products: productsAll,
  });
  const { products } = state;
  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        products: productsAll,
      });
    }
    return () => {
      unmounted = true;
    };
  }, [productsAll]);

  return (
    <Row gutter={15}>
      {products.map(({ id, name, rate }) => {
        return (
          <Col md={6} key={id}>
            <figure>
              <img src={require(`../../../../static/img/products/${id}.png`)} alt="" />
              <figcaption>
                <NavLink to="#">
                  <FeatherIcon icon="heart" size={14} />
                </NavLink>
                <Heading as="h5">{name}</Heading>
                <p>
                  <span>$250 </span>
                  <del> $650 </del>
                  <span> 60% Off</span>
                </p>
                <Rate allowHalf defaultValue={rate} disabled /> rate<span> 778 Reviews</span>
                <Button type="default">
                  <FeatherIcon icon="shopping-bag" size={14} />
                  Add To Cart
                </Button>
                <Button type="primary">Buy Now</Button>
              </figcaption>
            </figure>
          </Col>
        );
      })}
    </Row>
  );
};
const mapStateToProps = state => {
  return {
    productsAll: state.products,
  };
};

export default connect(mapStateToProps)(Grid);
