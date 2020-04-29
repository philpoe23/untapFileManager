import React, { useState, useEffect, Fragment } from 'react';
import { Row, Col, Rate, Pagination } from 'antd';
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

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    console.log(current, pageSize);
  };
  return (
    <Row gutter={15}>
      {products.length ? (
        products.map(({ id, name, rate, price, oldPrice, popular, img }) => {
          return (
            <Col md={6} key={id}>
              <figure>
                <img src={require(`../../../../${img}`)} alt={'img' + id} />
                <figcaption>
                  <NavLink to="#">
                    <FeatherIcon
                      icon="heart"
                      size={14}
                      color={popular ? '#FF4D4F' : '#9299B8'}
                      fill={popular ? '#FF4D4F' : 'none'}
                    />
                  </NavLink>
                  <Heading as="h5">
                    <NavLink to={`/ecommerce/productDetails/${id}`}>{name}</NavLink>
                  </Heading>
                  <p>
                    <span>${price} </span>
                    {oldPrice && (
                      <Fragment>
                        <del> ${oldPrice} </del>
                        <span> 60% Off</span>
                      </Fragment>
                    )}
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
        })
      ) : (
        <Col md={24}>
          <Heading as="h1">Data Not Found</Heading>
        </Col>
      )}
      <Col md={24}>
        {products.length ? (
          <Pagination
            onChange={onHandleChange}
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            pageSize={10}
            defaultCurrent={1}
            total={40}
          />
        ) : null}
      </Col>
    </Row>
  );
};
const mapStateToProps = state => {
  return {
    productsAll: state.products,
  };
};

export default connect(mapStateToProps)(Grid);
