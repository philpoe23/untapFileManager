import React, { lazy, Suspense, useState } from 'react';
import { Row, Col, Table, Form, Input, Select, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FigureCart, ProductTable, CouponForm, OrderSummary } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Checkout = lazy(() => import('./overview/CheckOut'));

const ShoppingCart = ({ match }) => {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    coupon: 0,
    promo: 0,
  });

  const productTableData = [
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
      price: <span className="cart-single-price">$248.66</span>,
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
      total: <span className="cart-single-t-price">$248.66</span>,
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
      price: <span className="cart-single-price">$248.66</span>,
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
      total: <span className="cart-single-t-price">$248.66</span>,
      action: (
        <div className="table-action">
          <Button className="btn-icon" to="#" size="default" type="danger" shape="circle" transparented>
            <FeatherIcon icon="trash-2" size={16} />
          </Button>
        </div>
      ),
    },
  ];

  const productTableColumns = [
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
    setState({ ...state, coupon: values });
  };

  const submitPromo = values => {
    setState({ ...state, promo: values });
  };

  const { Option } = Select;

  return (
    <>
      <PageHeader
        ghost
        title="Shopping Cart"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <Row gutter={30}>
                <Col xxl={17} xs={24}>
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
                            <>
                              <ProductTable>
                                <div className="table-cart table-responsive">
                                  <Table
                                    pagination={false}
                                    dataSource={productTableData}
                                    columns={productTableColumns}
                                  />
                                </div>
                              </ProductTable>

                              <CouponForm>
                                <Form form={form} name="submitcoupon" onFinish={submitCoupon}>
                                  <Row gutter={15}>
                                    <Col lg={4} sm={8} xs={12}>
                                      <Form.Item name="coupon" label="">
                                        <Input placeholder="Coupon Code" />
                                      </Form.Item>
                                    </Col>
                                    <Col lg={4} sm={8} xs={12}>
                                      <Button htmlType="submit" size="default" type="primary">
                                        Apply Coupon
                                      </Button>
                                    </Col>
                                  </Row>
                                </Form>
                              </CouponForm>
                            </>
                          );
                        }}
                      />
                      <Route path={`${match.path}/checkout`} component={Checkout} />
                    </Suspense>
                  </Switch>
                </Col>
                <Col xxl={7} xs={24}>
                  <Cards
                    bodyStyle={{
                      backgroundColor: '#F8F9FB',
                      borderRadius: '20px',
                    }}
                    headless
                  >
                    <OrderSummary>
                      <Heading className="summary-table-title" as="h4">
                        Order Summary
                      </Heading>
                      <Cards
                        bodyStyle={{
                          backgroundColor: '#ffffff',
                          borderRadius: '20px',
                        }}
                        headless
                      >
                        <div className="order-summary-inner">
                          <ul className="summary-list">
                            <li>
                              <span className="summary-list-title">Subtotal :</span>
                              <span className="summary-list-text">{`$${497.32}`}</span>
                            </li>
                            <li>
                              <span className="summary-list-title">Descount :</span>
                              <span className="summary-list-text">{`$${-20}`}</span>
                            </li>
                            <li>
                              <span className="summary-list-title">Shipping Charge :</span>
                              <span className="summary-list-text">{`$${30}`}</span>
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
                              <Form.Item name="promoCode" label="Promo Code">
                                <Input style={{ width: '72%' }} placeholder="Promo Code" />
                                <Button htmlType="submit" size="default" type="success" outlined>
                                  Apply
                                </Button>
                              </Form.Item>
                            </div>
                          </Form>
                          <Heading className="summary-total" as="h4">
                            <span className="summary-total-label">Total : </span>
                            <span className="summary-total-amount">{`$${507.32}`}</span>
                          </Heading>
                          <Button className="btn-proceed" type="secondary" size="large">
                            <Link to={`${match.path}/checkout`}>
                              Proceed To Checkout <FeatherIcon icon="arrow-right" size={14} />
                            </Link>
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
    </>
  );
};
ShoppingCart.propTypes = {
  match: PropTypes.shape(PropTypes.object).isRequired,
};
export default ShoppingCart;
