import React, { Fragment, useState } from 'react';
import { Steps } from '../../../components/steps/steps';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { Row, Col, Form, Input, Select, Radio, Table } from 'antd';
import { BasicFormWrapper  } from '../../styled';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { FigureCart, CheckoutWrapper, ProductTable, OrderSummary } from '../Style';

const { Option } = Select;
const CheckOut = () => {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isfinished: false,
  });

  const { status, isfinished } = state;

  const next = current => {
    console.log('onChange:', current);
    setState({
      ...state,
      status: 'process',
    });
  };

  const prev = current => {
    console.log('onChange:', current);
    setState({
      ...state,
      status: 'process',
    });
  };

  const done = () => {
    setState({
      ...state,
      status: 'finish',
      isfinished: true,
    });
  };

  const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  const dataSource = [
    {
      key: '1',
      product: (
        <div className="cart-single">
          <FigureCart>
            <img style={{ width: 80 }} src={require('../../../static/img/products/1.png')} alt="" />
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
      key: '2',
      product: (
        <div className="cart-single">
          <FigureCart>
            <img style={{ width: 80 }} src={require('../../../static/img/products/1.png')} alt="" />
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
  ];

  return (
    <CheckoutWrapper>
      <Steps
      isswitch
      current={0}
      height={400}
      status={status}
      steps={[
        {
          title: 'Create Account',
          content: (
            <BasicFormWrapper>

              <div className="atbd-form-checkout">
                <Heading as="h4">1. Please Create Your Account</Heading>
                <Form form={form} name="account">
                  <Form.Item name="username" label="Username">
                    <Input placeholder="Username" />
                  </Form.Item>
                  <Form.Item name="email" rules={[{ type: 'email' }]} label="Email Address">
                    <Input placeholder="name@gmail.com" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        min: 6,
                        message: 'Enter a valid password. Min 6 charecters long.',
                      },
                    ]}
                    label="Password"
                  >
                    <Input.Password placeholder="Password" />
                    <span className="input-message">Enter a valid password. Min 6 characters long</span>
                  </Form.Item>
                </Form>
              </div>

            </BasicFormWrapper>
          ),
        },
        {
          title: 'Shipping Address',
          content: (
            <BasicFormWrapper>
              <div className="atbd-form-checkout">
                <Heading as="h4">2. Please Fill in Your Shipping Address</Heading>
                <Form form={form} name="address">
                  <Form.Item name="name" label="Contact Name">
                    <Input placeholder="Ibn adam" />
                  </Form.Item>
                  <Form.Item name="company" label="Company Name (Optional)">
                    <Input placeholder="adam" />
                  </Form.Item>
                  <Form.Item name="phone" label="Phone Number">
                    <Input placeholder="+880" />
                  </Form.Item>
                  <Form.Item name="country" initialValue="" label="Country/Region">
                    <Select style={{ width: '100%' }}>
                      <Option value="">Please Select</Option>
                      <Option value="bangladesh">Bangladesh</Option>
                      <Option value="india">India</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="street" label="Street Address">
                    <Input placeholder="House Number and Street Name" />
                  </Form.Item>
                  <Form.Item name="street2" label="">
                    <Input placeholder="Apartment, Suite, Unit etc." />
                  </Form.Item>
                  <Form.Item name="city" label="City">
                    <Input placeholder="Enter City" />
                  </Form.Item>
                  <Form.Item name="zip" label="Zip/Postal Code">
                    <Input placeholder="Enter Zip" />
                  </Form.Item>
                </Form>
              </div>
            </BasicFormWrapper>
          ),
        },
        {
          title: 'Payment Method',
          content: (
            <BasicFormWrapper>
              <div className="atbd-form-checkout">
                <Heading as="h4">3. Please Please Select Your Payment Method</Heading>
                <div className="shipping-selection">
                  <Radio.Group style={{ width: '100%' }}>
                    <div className="shipping-selection__card">
                      <Radio style={{ width: '100%' }} value="card">
                        <Cards
                          headless
                          bodyStyle={{
                            backgroundColor: '#F8F9FB',
                            borderRadius: '20px'
                          }}
                        >
                          <div className="supported-card d-flex">
                            <span>Credit/Debit Card</span>
                            <div className="supported-card_logos">
                              <img
                                style={{ width: '50px' }}
                                src={require('../../../static/img/cards-logo/ms.png')}
                                alt=""
                              />
                              <img
                                style={{ width: '50px' }}
                                src={require('../../../static/img/cards-logo/american-express.png')}
                                alt=""
                              />
                              <img
                                style={{ width: '50px' }}
                                src={require('../../../static/img/cards-logo/visa.png')}
                                alt=""
                              />
                            </div>
                          </div>
                          <Cards headless style={{marginBottom: 0}}>
                            <Form form={form} name="info">
                              <Form.Item name="number" label="Card Number">
                                <Input placeholder="6547-8702-6987-2527" />
                              </Form.Item>
                              <Form.Item name="name" label="Name on Card">
                                <Input placeholder="Full name" />
                              </Form.Item>
                              <Form.Item name="month" initialValue="" label="Expiration Date">
                                <Select style={{ width: '100%' }}>
                                  <Option value="">MM</Option>
                                  {month.map((month, key) => (
                                    <Option key={key} value={month}>
                                      {month}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                              <Form.Item name="year" initialValue="">
                                <Select style={{ width: '100%' }}>
                                  <Option value="">YY</Option>
                                  <Option value={new Date().getFullYear()}>{new Date().getFullYear()}</Option>
                                  {month.map((month, key) => (
                                    <Option key={key} value={parseInt(new Date().getFullYear()) + parseInt(month)}>
                                      {parseInt(new Date().getFullYear()) + parseInt(month)}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                              <Form.Item name="cvv" label="CVV">
                                <Input style={{ width: '60%' }} placeholder="XXX" />
                                <Link className="input-leftText" to="#"> What is this?</Link>
                              </Form.Item>
                            </Form>
                          </Cards>
                        </Cards>
                      </Radio>
                    </div>
                    <div className="shipping-selection__paypal">
                      <Radio value="payPal" style={{ width: '100%' }}>
                          Pay With PayPal
                        </Radio>
                    </div>
                    <div className="shipping-selection__cash">
                      <Radio value="cash" style={{ width: '100%' }}>
                        Cash on delivery
                      </Radio>
                    </div>
                  </Radio.Group>
                </div>
              </div>
            </BasicFormWrapper>
          ),
        },
        {
          title: 'Review Order',
          content:
            status !== 'finish' ? (
              <BasicFormWrapper style={{width: '100%'}}>
                <div className="atbd-review-order" style={{ width: '100%' }}>
                  <Heading as="h4">4. Review and confirme Order</Heading>
                  <Cards bodyStyle={{ backgroundColor: '#F8F9FB', borderRadius: 10 }} headless>
                    <div className="atbd-review-order__single">
                      <Cards headless>
                        <div className="atbd-review-order__shippingTitle">
                          <Heading as="h5">
                            Shipping Information
                            <Link to="#">
                              <FeatherIcon icon="edit" />
                              Edit
                            </Link>
                          </Heading>
                        </div>
                        <article className="atbd-review-order__shippingInfo">
                          <Radio.Group style={{ width: '100%' }}>
                            <Radio value="ms" style={{ width: '100%' }}>
                              <div className="shipping-info-text">
                                <Heading as="h6">Ibn Adam</Heading>
                                <Heading as="h6">Phone: +61412345678</Heading>
                                <p>
                                  795 Folsom Ave, Suite 600 <br />
                                  San Francisco, CA 94107 <br />
                                  United States
                                </p>
                              </div>
                            </Radio>
                          </Radio.Group>
                          <Link to="#">+ Add New Address</Link>
                        </article>
                      </Cards>
                    </div>
                    <div className="atbd-review-order__single">
                      <Cards headless>
                        <div>
                          <Heading as="h5">Payment Method</Heading>
                        </div>
                        <Radio.Group style={{ width: '100%' }}>
                          <Radio value="ms" style={{ width: '100%' }}>
                            <div className="method-info">
                              <img
                                style={{ width: '40px' }}
                                src="https://www.mastercard.us/content/dam/mccom/et-ee/logos/logo-mastercard-mobile.svg"
                                alt=""
                              />
                              **** **** **** 2597
                            </div>
                          </Radio>
                        </Radio.Group>
                        <Link className="btn-addCard" to="#">+ Add New Card</Link>
                      </Cards>
                    </div>
                    
                    <div className="atbd-review-order__single">
                      <Cards headless>
                        <Fragment>
                          <ProductTable>
                            <div className="table-cart table-responsive">
                              <Table pagination={false} dataSource={dataSource} columns={columns} />
                            </div>
                          </ProductTable>

                          <Row justify="end">
                            <Col xxl={8} xl={5} sm={8} xs={14} offset={10}>
                              <OrderSummary>
                                <div className="invoice-summary-inner">
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
                                  <Heading className="summary-total" as="h4">
                                    <span className="summary-total-label">Total : </span>
                                    <span className="summary-total-amount">{'$' + 507.32}</span>
                                  </Heading>
                                </div>
                              </OrderSummary>
                            </Col>
                          </Row>
                        </Fragment>
                      </Cards>
                    </div>
                  </Cards>
                </div>
              </BasicFormWrapper>
            ) : (
            
              <Row justify="start" style={{ width: '100%' }}>
                <Col xl={20} xs={24}>
                  <div className="checkout-successful">
                    <Cards 
                        headless 
                        bodyStyle=
                          {{
                            backgroundColor: '#F8F9FB',
                            borderRadius: '20px'
                          }}
                        >
                        <Cards headless>
                          <span className="icon-success">
                            <FeatherIcon icon="check" />
                          </span>
                          <Heading as="h3">Payment Successful</Heading>
                          <p>Thank you! We have received your Payment</p>
                        </Cards>
                      </Cards>
                  </div>
                </Col>
              </Row>
            ),
        },
      ]}
      onNext={next}
      onPrev={prev}
      onDone={done}
      isfinished={isfinished}
    />
    </CheckoutWrapper>
  );
};

export default CheckOut;
