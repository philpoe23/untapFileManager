import React, { Fragment, useState, useEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { Row, Col, Rate } from 'antd';
import FeatherIcon from 'feather-icons-react';
import Heading from '../../components/heading/heading';
import { filterSinglepage } from '../../redux/actions/products';
import { NavLink } from 'react-router-dom';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';

const ProductDetails = props => {
  const { filterSinglepage, match, products, product } = props;
  const [state, setState] = useState({
    quantity: 1,
  });
  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      filterSinglepage(parseInt(match.params.id));
    }
    return () => {
      unmounted = true;
    };
  }, [match.params.id, filterSinglepage]);
  const { name, rate, price, oldPrice, description, img, category, brand } = product[0];
  const { quantity } = state;
  const incrementQuantity = e => {
    e.preventDefault();
    quantity !== 5 &&
      setState({
        ...state,
        quantity: quantity + 1,
      });
  };
  const decrementQuantity = e => {
    e.preventDefault();
    quantity !== 1 &&
      setState({
        ...state,
        quantity: quantity - 1,
      });
  };
  return (
    <Fragment>
      <PageHeader ghost title="Product Details" />
      <Main>
        <Cards headless>
          <Row gutter={30}>
            <Col md={10}>
              <figure>
                <img style={{ width: '100%' }} src={require(`../../../${img}`)} alt="" />
              </figure>
              <Row gutter={15}>
                {products.length
                  ? products
                      .filter(product => {
                        return product.category === category;
                      })
                      .map((product, index) => {
                        return (
                          index <= 3 && (
                            <Col md={6} key={product.id}>
                              <figure>
                                <NavLink to={`/ecommerce/productDetails/${product.id}`}>
                                  <img style={{ width: '100%' }} src={require(`../../../${product.img}`)} alt="" />
                                </NavLink>
                              </figure>
                            </Col>
                          )
                        );
                      })
                  : null}
              </Row>
            </Col>
            <Col md={10}>
              <Heading as="h2">{name}</Heading>
              <Rate allowHalf defaultValue={rate} disabled /> {rate}
              <span> 778 Reviews</span>
              <p>Brand : {brand}</p>
              <br />
              <Heading as="h3">${price}</Heading>
              {oldPrice && (
                <Heading as="h6">
                  <del>${oldPrice}</del> <sub>30% Off</sub>
                </Heading>
              )}
              <br />
              <p>{description}</p>
              <br />
              <p>Available: In Stock</p>
              <p>Shipping:: Free</p>
              <p>
                Quantity:
                <Button onClick={decrementQuantity} type="default">
                  -
                </Button>
                {quantity}
                <Button onClick={incrementQuantity} type="default">
                  +
                </Button>
                540 pieces available
              </p>
              <Button type="primary">Buy Now</Button>
              <Button type="secondary">
                <FeatherIcon icon="shopping-bag" size={14} /> Add To Cart
              </Button>
              <NavLink to="#">
                <FeatherIcon icon="heart" size={14} />
              </NavLink>
              <NavLink to="#">
                <FeatherIcon icon="share-2" size={14} />
              </NavLink>
              <FeatherIcon icon="facebook" size={14} />
              <FeatherIcon icon="twitter" size={14} />
              <FeatherIcon icon="linkedin" size={14} />
              <FeatherIcon icon="send" size={14} />
              <hr />
              <p>Category: {category}</p>
              <p>Tags: Blue, Green, Light</p>
            </Col>
          </Row>
        </Cards>
      </Main>
    </Fragment>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    filterSinglepage: id => dispatch(filterSinglepage(id)),
  };
};

const mapStateToProps = state => {
  return {
    product: state.product,
    products: state.products,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
