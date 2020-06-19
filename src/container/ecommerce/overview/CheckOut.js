import React, { Fragment, useState } from 'react';
import { Steps } from '../../../components/steps/steps';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { Form, Input, Select, Radio, Table } from 'antd';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { FigureCart } from '../Style';

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
        <FigureCart>
          <img style={{ width: 70 }} src={require('../../../static/img/products/1.png')} alt="" />
          <figcaption>
            <Heading as="h4">Fiber Base Chair</Heading>
            <p>Size : Large &nbsp;&nbsp; Color : Brown</p>
          </figcaption>
        </FigureCart>
      ),
      price: '$' + 248.66,
      quantity: (
        <div>
          <Button>
            <FeatherIcon icon="minus" size={14} />
          </Button>
          1
          <Button>
            <FeatherIcon icon="plus" size={14} />
          </Button>
        </div>
      ),
      total: '$' + 248.66,
      action: (
        <Link to="#">
          <FeatherIcon icon="trash-2" size={16} />
        </Link>
      ),
    },
    {
      key: '2',
      product: (
        <FigureCart>
          <img style={{ width: 70 }} src={require('../../../static/img/products/2.png')} alt="" />
          <figcaption>
            <Heading as="h4">Fiber Base Chair</Heading>
            <p>Size : Large &nbsp;&nbsp; Color : Brown</p>
          </figcaption>
        </FigureCart>
      ),
      price: '$' + 248.66,
      quantity: (
        <div>
          <Button>
            <FeatherIcon icon="minus" size={14} />
          </Button>
          1
          <Button>
            <FeatherIcon icon="plus" size={14} />
          </Button>
        </div>
      ),
      total: '$' + 248.66,
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
    <Steps
      isswitch
      current={0}
      height={400}
      status={status}
      steps={[
        {
          title: 'Create Account',
          content: (
            <div>
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
                </Form.Item>
              </Form>
            </div>
          ),
        },
        {
          title: 'Shipping Address',
          content: (
            <div>
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
          ),
        },
        {
          title: 'Payment Method',
          content: (
            <div>
              <Heading as="h4">3. Please Please Select Your Payment Method</Heading>
              <Radio.Group style={{ width: '100%' }}>
                <Radio style={{ width: '100%' }} value="card">
                  <Cards
                    headless
                    bodyStyle={{
                      backgroundColor: '#F8F9FB',
                    }}
                  >
                    <div>
                      <span>Credit/Debit Card</span>
                      <img
                        style={{ width: '40px' }}
                        src="https://www.mastercard.us/content/dam/mccom/et-ee/logos/logo-mastercard-mobile.svg"
                        alt=""
                      />
                      <img
                        style={{ width: '40px' }}
                        src="https://img.favpng.com/21/5/13/american-express-logo-credit-card-payment-png-favpng-8tx6epUgjhQeNcJFzp5fhKgZQ.jpg"
                        alt=""
                      />
                      <img
                        style={{ width: '40px' }}
                        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/363_Visa_Credit_Card_logo-512.png"
                        alt=""
                      />
                    </div>
                    <Cards headless>
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
                          <Link to="#"> What is this?</Link>
                        </Form.Item>
                      </Form>
                    </Cards>
                  </Cards>
                </Radio>
                <Radio value="payPal" style={{ width: '100%' }}>
                  Pay With PayPal
                </Radio>
                <Radio value="cash" style={{ width: '100%' }}>
                  Cash on delivery
                </Radio>
              </Radio.Group>
            </div>
          ),
        },
        {
          title: 'Review Order',
          content:
            status !== 'finish' ? (
              <div style={{ width: '100%' }}>
                <Heading as="h4">4. Review and confirme Order</Heading>
                <Cards bodyStyle={{ backgroundColor: '#F8F9FB' }} headless>
                  <Cards headless>
                    <div>
                      <Heading as="h5">
                        Shipping Information
                        <Link to="#">
                          <FeatherIcon icon="edit" />
                          Edit
                        </Link>
                      </Heading>
                    </div>
                    <article>
                      <Heading as="h6">Ibn Adam</Heading>
                      <Heading as="h6">Phone: +61412345678</Heading>
                      <p>
                        795 Folsom Ave, Suite 600 <br />
                        San Francisco, CA 94107 <br />
                        United States
                      </p>
                      <Link to="#">+ Add New Address</Link>
                    </article>
                  </Cards>
                  <Cards headless>
                    <div>
                      <Heading as="h5">Payment Method</Heading>
                    </div>
                    <img
                      style={{ width: '40px' }}
                      src="https://www.mastercard.us/content/dam/mccom/et-ee/logos/logo-mastercard-mobile.svg"
                      alt=""
                    />
                    **** **** **** 2597 <br />
                    <Link to="#">+ Add New Card</Link>
                  </Cards>
                  <Cards headless>
                    <Fragment>
                      <Table pagination={false} dataSource={dataSource} columns={columns} />
                    </Fragment>
                  </Cards>
                </Cards>
              </div>
            ) : (
              <div style={{ width: '100%' }}>
                <Cards headless bodyStyle={{ backgroundColor: '#FFFFFF' }}>
                  <Cards headless>
                    <FeatherIcon icon="check" />
                    <Heading as="h3">Payment Successful</Heading>
                    <p>Thank you! We have received your Payment</p>
                  </Cards>
                </Cards>
              </div>
            ),
        },
      ]}
      onNext={next}
      onPrev={prev}
      onDone={done}
      isfinished={isfinished}
    />
  );
};

export default CheckOut;
