import React, { Fragment, lazy, Suspense } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Row, Col, Table, Form, Input, Select, Spin } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import FeatherIcon from 'feather-icons-react';
import { Link, Switch, Route } from 'react-router-dom';
import Heading from '../../components/heading/heading';
import { FigureCart, ProductTable, CouponForm, OrderSummary } from './Style';
import { Button } from '../../components/buttons/buttons';

const Checkout = lazy(() => import('./overview/CheckOut'));

const ShoppingCart = ({ match }) => {
  const [form] = Form.useForm();

  const dataSource = [
    {
      key: '1',
      product: (
        <div className="cart-single">
          <FigureCart>
            <img style={{ width: 80 }} src={require('../../static/img/products/1.png')} alt="" />
            <figcaption>
              <div className="cart-single__info">
                <Heading as="h6">Fiber Base Chair</Heading>
                <ul className="info-list">
                  <li>
                    <span className="info-title">Size :</span>
                    <span>Large</span>
                  </li>
                  <li>
                    <span className="info-title"> Color :</span>
                    <span>Brown</span>
                  </li>
                </ul>
              </div>
            </figcaption>
          </FigureCart>
        </div>
      ),
      price: (
        <span className="cart-single-price">'$' + 248.66</span>
      ),
      quantity: (
        <div className="cart-single-quantity">
          <Button className="btn-dec" type="default">
            <FeatherIcon icon="minus" size={12} />
          </Button>
          1
          <Button className="btn-inc" type="default">
            <FeatherIcon icon="plus" size={12} />
          </Button>
        </div>
      ),
      total: (
        <span className="cart-single-t-price">'$' + 248.66</span>
      ),
      action: (
        <div className="table-action">
          <Button className="btn-icon" to="#" size="default" type="danger" shape="circle" transparented>
            <FeatherIcon icon="trash-2" size={16} />
          </Button>
        </div>
      ),
    },
    {
      key: '1',
      product: (
        <div className="cart-single">
          <FigureCart>
            <img style={{ width: 80 }} src={require('../../static/img/products/1.png')} alt="" />
            <figcaption>
              <div className="cart-single__info">
                <Heading as="h6">Fiber Base Chair</Heading>
                <ul className="info-list">
                  <li>
                    <span className="info-title">Size :</span>
                    <span>Large</span>
                  </li>
                  <li>
                    <span className="info-title"> Color :</span>
                    <span>Brown</span>
                  </li>
                </ul>
              </div>
            </figcaption>
          </FigureCart>
        </div>
      ),
      price: (
        <span className="cart-single-price">'$' + 248.66</span>
      ),
      quantity: (
        <div className="cart-single-quantity">
          <Button className="btn-dec" type="default">
            <FeatherIcon icon="minus" size={12} />
          </Button>
          1
          <Button className="btn-inc" type="default">
            <FeatherIcon icon="plus" size={12} />
          </Button>
        </div>
      ),
      total: (
        <span className="cart-single-t-price">'$' + 248.66</span>
      ),
      action: (
        <div className="table-action">
          <Button className="btn-icon" to="#" size="default" type="danger" shape="circle" transparented>
            <FeatherIcon icon="trash-2" size={16} />
          </Button>
        </div>
      ),
    },
  ];

  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const submitCoupon = values => {
    console.log('Received values of form: ', values);
  };

  const submitPromo = values => {
    console.log('Received values of form: ', values);
  };

  const { Option } = Select;

  return (
    <Fragment>
      <PageHeader ghost title="Shopping Cart" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <Row gutter={30}>
                <Col md={17}>
                  <Switch>
                    <Suspense
                      fallback={
                        <div className="spin">
                          <Spin />
                        </div>
                      }
                    >
                      <Route
                        exact
                        path={match.path}
                        component={() => {
                          return (
                            <Fragment>
                              <ProductTable>
                                <div className="table-cart">
                                  <Table pagination={false} dataSource={dataSource} columns={columns} />
                                </div>
                              </ProductTable>
                              
                              <CouponForm>
                                <Form form={form} name="submitcoupon" onFinish={submitCoupon}>
                                  <Row gutter={15}>
                                    <Col md={4}>
                                      <Form.Item name="coupon" label="">
                                        <Input placeholder="Coupon Code" />
                                      </Form.Item>
                                    </Col>
                                    <Col md={4}>
                                      <Button htmlType="submit" size="default" type="primary">
                                        Apply Coupon
                                      </Button>
                                    </Col>
                                  </Row>
                                </Form>
                              </CouponForm>
                            </Fragment>
                          );
                        }}
                      />
                      <Route path={match.path + '/checkout'} component={Checkout} />
                    </Suspense>
                  </Switch>
                </Col>
                <Col md={7}>
                  <Cards
                    bodyStyle={{
                      backgroundColor: '#F8F9FB',
                      borderRadius: '20px'
                    }}
                    headless
                  >
                    <OrderSummary>
                      <Heading className="summary-table-title" as="h4">Order Summary</Heading>
                      <Cards 
                        bodyStyle={{
                          backgroundColor: '#ffffff',
                          borderRadius: '20px'
                        }}
                        headless
                      
                      >
                        <div className="order-summary-inner">
                          <ul className="summary-list">
                            <li>
                              <span className="summary-list-title">Subtotal :</span>
                              <span className="summary-list-text">{'$' + 497.32}</span>
                            </li>
                            <li>
                              <span className="summary-list-title">Descount :</span>
                              <span className="summary-list-text">{'$' + -20}</span>
                            </li>
                            <li>
                              <span className="summary-list-title">Shipping Charge :</span>
                              <span className="summary-list-text">{'$' + 30}</span>
                            </li>
                          </ul>
                          <Form form={form} name="promo" onFinish={submitPromo}>
                            <Form.Item name="couponType" initialValue="" label="">
                              <Select style={{ width: '100%' }}>
                                <Option value="">% Select Coupon</Option>
                                <Option value="one">% Coupon one</Option>
                                <Option value="tow">% Coupon tow</Option>
                              </Select>
                            </Form.Item>
                            <div className="promo-apply-form">
                              <Form.Item name="promo" label="Promo Code">
                                <Input style={{ width: '72%' }} placeholder="Promo Code" />
                                <Button htmlType="submit" size="default" type="success" outlined>
                                  Apply
                                </Button>
                              </Form.Item>
                            </div>
                          </Form>
                          <Heading className="summary-total" as="h4">
                            <span className="summary-total-label">Total : </span>
                            <span className="summary-total-amount">{'$' + 507.32}</span>
                          </Heading>
                          <Button className="btn-proceed" to={match.path + '/checkout'} type="secondary" size="large">
                            Proceed To Checkout <FeatherIcon icon="arrow-right" size={14} />
                          </Button>
                        </div>
                      </Cards>
                    </OrderSummary>
                  </Cards>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default ShoppingCart;
