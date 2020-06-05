import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Row, Col, Table } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';
import { InvoiceHeader, InvoiceLetterBox, ProductTable } from './Style';
import FeatherIcon from 'feather-icons-react';

const Invoice = () => {
  const dataSource = [
    {
      key: '1',
      row: '1',
      details: (
        <Fragment>
          <p>Fiber Base Chair</p>
          <p>Size: Large Color: Brown</p>
        </Fragment>
      ),
      unit: '$248.66',
      quantity: 3,
      total: '$943.30',
    },
    {
      key: '2',
      row: '2',
      details: (
        <Fragment>
          <p>Panton Tunior Chair</p>
          <p>Size: Large Color: Brown</p>
        </Fragment>
      ),
      unit: '$248.66',
      quantity: 2,
      total: '$943.30',
    },
  ];

  const columns = [
    {
      title: '#',
      dataIndex: 'row',
      key: 'row',
    },
    {
      title: 'Product Details',
      dataIndex: 'details',
      key: 'details',
    },
    {
      title: 'Price Per Unit',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Order Total',
      dataIndex: 'total',
      key: 'total',
    },
  ];

  return (
    <Fragment>
      <PageHeader ghost title="Invoice" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <InvoiceHeader>
                <Row style={{alignItems: 'center'}}>
                  <Col xs={12}>
                    <figure>
                      <img src={require('../../static/img/logo.png')} alt="logo" />
                    </figure>
                  </Col>
                  <Col xs={12}>
                    <div>
                      <address className="invoice-info" style={{ textAlign: 'right' }}>
                        Admin Company <br />
                        795 Folsom Ave, Suite 600 <br />
                        San Francisco, CA 94107, USA <br />
                        Reg. number : 245000003513
                      </address>
                    </div>
                  </Col>
                </Row>
              </InvoiceHeader>
              <InvoiceLetterBox>
                <div style={{ background: '#F8F9FB', padding: '30px 50px', borderRadius: '20px' }}>
                  <Row>
                    <Col sm={8}>
                      <article className="invoice-author">
                        <Heading className="invoice-author__title" as="h3">Invoice</Heading>
                        <p>No : #642678</p>
                        <p>Date : Jan 17, 2020</p>
                      </article>
                    </Col>
                    <Col sm={8}>
                      <div className="invoice-barcode">
                        <Cards headless>
                            <img style={{ width: '100%' }} src={require('../../static/img/barcode.png')} alt="barcode" />
                            <p>8364297359912267</p>
                        </Cards>
                      </div>
                    </Col>
                    <Col sm={8}>
                      <address className="invoice-customer">
                        <Heading className="invoice-customer__title" as="h5">Invoice To:</Heading>
                        <p>
                          Stanley Jones <br />
                          795 Folsom Ave, Suite 600 <br />
                          San Francisco, CA 94107, USA
                        </p>
                      </address>
                    </Col>
                  </Row>
                </div>
              </InvoiceLetterBox>
              
              <br />
              <br />
              <ProductTable>

                <div className="table-invoice">
                  <Table dataSource={dataSource} columns={columns} pagination={false} />
                </div>

              </ProductTable>
              
              <Row>
                <Col md={4} offset={20}>
                  <article>
                    <p>Subtotal : $1,690.26</p>
                    <p>Discount : -$126.30</p>
                    <p>Shipping Charge : $46.30</p>
                    <Heading as="h4">Total : $1738.60</Heading>
                  </article>
                </Col>
              </Row>
              <Row>
                <Col md={6} offset={18}>
                  <Button shape="round" type="default">
                    <FeatherIcon icon="printer" size={14} />
                    Print
                  </Button>
                  <Button shape="round" type="default">
                    <FeatherIcon icon="send" size={14} />
                    Send Invoice
                  </Button>
                  <Button shape="round" type="primary">
                    <FeatherIcon icon="download" size={14} />
                    Download
                  </Button>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Invoice;
