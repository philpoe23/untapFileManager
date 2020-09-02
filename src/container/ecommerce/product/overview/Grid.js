import React, { useState, useEffect } from 'react';
import { Row, Col, Rate, Pagination, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import Heading from '../../../../components/heading/heading';
import { Button } from '../../../../components/buttons/buttons';
import { ProductCard, PaginationWrapper } from '../../Style';

const Grid = () => {
  const { productsAll, isLoader } = useSelector(state => {
    return {
      productsAll: state.products.data,
      isLoader: state.products.loading,
    };
  });

  const [state, setState] = useState({
    products: productsAll,
    current: 0,
    pageSize: 0,
  });

  const { products } = state;

  useEffect(() => {
    if (productsAll) {
      setState({
        products: productsAll,
      });
    }
  }, [productsAll]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };
  // @Todo Nested Ternary
  return (
    <Row gutter={30}>
      {isLoader ? (
        <div className="spin">
          <Spin />
        </div>
      ) : products.length ? (
        products.map(({ id, name, rate, price, oldPrice, popular, img }) => {
          return (
            <Col xxl={6} lg={12} xs={24} key={id}>
              <ProductCard style={{ marginBottom: 30 }}>
                <figure>
                  <img src={require(`../../../../${img}`)} alt={`img${id}`} />
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
                    <NavLink to={`/admin/ecommerce/productDetails/${id}`}>{name}</NavLink>
                  </Heading>
                  <p className="product-single-price">
                    <span className="product-single-price__new">${price} </span>
                    {oldPrice && (
                      <>
                        <del className="product-single-price__old"> ${oldPrice} </del>
                        <span className="product-single-price__offer"> 60% Off</span>
                      </>
                    )}
                  </p>
                  <div className="product-single-rating">
                    <Rate allowHalf defaultValue={rate} disabled /> 4.9
                    <span className="total-reviews"> 778 Reviews</span>
                  </div>

                  <div className="product-single-action">
                    <Button size="small" type="white" className="btn-cart" outlined>
                      <FeatherIcon icon="shopping-bag" size={14} />
                      Add To Cart
                    </Button>
                    <Button size="small" type="primary">
                      Buy Now
                    </Button>
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
      <Col xs={24} className="pb-30">
        <PaginationWrapper style={{ marginTop: 10 }}>
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

export default Grid;
