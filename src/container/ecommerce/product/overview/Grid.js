import React, { useState, useEffect, Fragment } from 'react';
import { Row, Col, Rate, Pagination, Spin } from 'antd';
import Heading from '../../../../components/heading/heading';
import { Button } from '../../../../components/buttons/buttons';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { ProductCard, PaginationWrapper } from '../../Style';
import { connect } from 'react-redux';

const Grid = ({ productsAll, isloader }) => {
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
    <Row gutter={30}>
      {isloader ? (
        <div className="spin">
          <Spin />
        </div>
      ) : products.length ? (
        products.map(({ id, name, rate, price, oldPrice, popular, img }) => {
          return (
            <Col xxl={6} lg={12} xs={24} key={id}>
              <ProductCard style={{marginBottom: 30}}>
                <figure>
                  <img src={require(`../../../../${img}`)} alt={'img' + id} />
                </figure>
                <figcaption>
                  <NavLink className="btn-heart" to="#">
                    <FeatherIcon
                      icon="heart"
                      size={14}
                      color={popular ? '#FF4D4F' : '#9299B8'}
                      fill={popular ? '#FF4D4F' : 'none'}
                    />
                  </NavLink>
                  <Heading className="product-single-title" as="h5">
                    <NavLink to={`/ecommerce/productDetails/${id}`}>{name}</NavLink>
                  </Heading>
                  <p className="product-single-price">
                    <span className="product-single-price__new">${price} </span>
                    {oldPrice && (
                      <Fragment>
                        <del className="product-single-price__old"> ${oldPrice} </del>
                        <span className="product-single-price__offer"> 60% Off</span>
                      </Fragment>
                    )}
                  </p>
                  <div className="product-single-rating">
                    <Rate allowHalf defaultValue={rate} disabled /> 4.9<span className="total-reviews"> 778 Reviews</span>
                  </div>
                  
                  <div className="product-single-action">
                    <Button size="small" type="light" className="btn-cart" outlined>
                      <FeatherIcon icon="shopping-bag" size={14} />
                      Add To Cart
                    </Button>
                    <Button size="small" type="primary">Buy Now</Button>
                  </div>
                </figcaption>
              </ProductCard>
            </Col>
          );
        })
      ) : (
        <Col md={24}>
          <Heading as="h1">Data Not Found</Heading>
        </Col>
      )}
      <Col md={24}>
        <PaginationWrapper style={{marginTop: 10}}>
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
        </PaginationWrapper>
      </Col>
    </Row>
  );
};
const mapStateToProps = state => {
  return {
    productsAll: state.products.data,
    isloader: state.products.loading,
  };
};

export default connect(mapStateToProps)(Grid);
