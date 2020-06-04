import React, { useState, useEffect, Fragment } from 'react';
import { Row, Col, Rate, Pagination, Spin } from 'antd';
import Heading from '../../../../components/heading/heading';
import { Button } from '../../../../components/buttons/buttons';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { ProductCard, PaginationWrapper } from '../../Style';
import { connect } from 'react-redux';

const List = ({ productsAll, isloader }) => {
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
      {isloader ? (
        <div className="spin">
          <Spin />
        </div>
      ) : products.length ? (
        products.map(({ id, name, rate, price, oldPrice, popular, description, img }) => {
          return (
            <ProductCard style={{marginBottom: 20}}>
              <div className="product-list">
                <Col md={24} key={id}>
                  <Row gutter={15}>
                    <Col sm={6}>
                      <figure>
                        <img style={{ width: '100%' }} src={require(`../../../../${img}`)} alt="" />
                      </figure>
                    </Col>
                    <Col sm={12}>
                      <div className="product-single-description">
                        <Heading className="product-single-title" as="h5">
                          <NavLink to={`/ecommerce/productDetails/${id}`}>{name}</NavLink>
                        </Heading>
                        <p>{description}</p>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="product-single-info">
                        <NavLink className="btn-heart" to="#">
                          <FeatherIcon
                            icon="heart"
                            size={14}
                            color={popular ? '#FF4D4F' : '#9299B8'}
                            fill={popular ? '#FF4D4F' : 'none'}
                          />
                        </NavLink>
                        <p className="product-single-price">
                          <span className="product-single-price__new">${price} </span>
                          {oldPrice && (
                            <Fragment>
                              <del> ${oldPrice} </del>
                              <span className="product-single-price__offer"> 60% Off</span>
                            </Fragment>
                          )}
                        </p>
                        <div className="product-single-rating">
                          <Rate allowHalf defaultValue={rate} disabled /> 4.9<span className="total-reviews"> 778 Reviews</span>
                        </div>
                        <div className="product-single-action">
                          <Button className="btn-cart" size="small" type="default">
                            <FeatherIcon icon="shopping-bag" size={14} />
                            Add To Cart
                          </Button>
                          <Button size="small" type="primary">Buy Now</Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </div>
            </ProductCard>
          );
        })
      ) : (
        <Col md={24}>
          <Heading as="h1">Data Not Found</Heading>
        </Col>
      )}
      <Col md={24}>
        {products.length ? (
          <PaginationWrapper style={{marginTop: 20}}>
              <Pagination
              onChange={onHandleChange}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={10}
              defaultCurrent={1}
              total={100}
            />
          </PaginationWrapper>
        ) : null}
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

export default connect(mapStateToProps)(List);
