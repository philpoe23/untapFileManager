import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Row, Col, Collapse, Icon } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Link } from 'react-router-dom';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';
import FeatherIcon from 'feather-icons-react';

const { Panel } = Collapse;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

const Faq = () => {
  const handleChange = e => {
    e.preventDefault();
    e.target
      .closest('ul')
      .querySelector('a.active')
      .classList.remove('active');
    e.target.classList.add('active');
  };

  return (
    <Fragment>
      <PageHeader ghost title="Frequently Asked Questions" />
      <Main>
        <Row gutter={15}>
          <Col md={5}>
            <Row>
              <Col md={24}>
                <Cards headless>
                  <p>Browse by Topic</p>
                  <ul>
                    <li>
                      <Link className="active" onClick={handleChange} to="#">
                        Using Applications
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleChange} to="#">
                        UI Elements
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleChange} to="#">
                        Components
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleChange} to="#">
                        Build Process
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleChange} to="#">
                        Support Policy
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleChange} to="#">
                        Accounts & Billing
                      </Link>
                    </li>
                  </ul>
                </Cards>
              </Col>

              <Col md={24}>
                <Cards headless>
                  <figure>
                    <img src={require('../../static/img/pages/support.svg')} alt="" />
                    <figcaption>
                      <Heading as="h5">Not finding the help you need?</Heading>
                      <Button type="primary">Contact Support</Button>
                    </figcaption>
                  </figure>
                </Cards>
              </Col>
            </Row>
          </Col>

          <Col md={19}>
            <Cards headless title="Using Applications">
              <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <FeatherIcon icon={isActive ? 'minus' : 'plus'} size={14} />}
              >
                <Panel header="How long does it take to download updates?" key="1" style={customPanelStyle}>
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ's and comments from previous buyers. Anim pariatur cliche reprehenderit, enim eiusmod
                    high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                    a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    <Heading as="h4">Was this article helpful?</Heading>
                    <Button outlined type="success">
                      <Icon type="smile" />
                      Yes
                    </Button>
                    <Button outlined type="warning">
                      <Icon type="smile" />
                      No
                    </Button>
                  </p>
                </Panel>
                <Panel header="How to use SCSS variables to build custom color?" key="2" style={customPanelStyle}>
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ's and comments from previous buyers. Anim pariatur cliche reprehenderit, enim eiusmod
                    high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                    a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    <Heading as="h4">Was this article helpful?</Heading>
                    <Button outlined type="success">
                      <Icon type="smile" />
                      Yes
                    </Button>
                    <Button outlined type="warning">
                      <Icon type="smile" />
                      No
                    </Button>
                  </p>
                </Panel>
                <Panel header="How long does it take to download updates?" key="3" style={customPanelStyle}>
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ's and comments from previous buyers. Anim pariatur cliche reprehenderit, enim eiusmod
                    high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                    a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    <Heading as="h4">Was this article helpful?</Heading>
                    <Button outlined type="success">
                      <Icon type="smile" />
                      Yes
                    </Button>
                    <Button outlined type="warning">
                      <Icon type="smile" />
                      No
                    </Button>
                  </p>
                </Panel>
                <Panel header="What is the flex layout?" key="4" style={customPanelStyle}>
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ's and comments from previous buyers. Anim pariatur cliche reprehenderit, enim eiusmod
                    high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                    a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    <Heading as="h4">Was this article helpful?</Heading>
                    <Button outlined type="success">
                      <Icon type="smile" />
                      Yes
                    </Button>
                    <Button outlined type="warning">
                      <Icon type="smile" />
                      No
                    </Button>
                  </p>
                </Panel>
                <Panel header="How long does it take to download updates?" key="5" style={customPanelStyle}>
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ's and comments from previous buyers. Anim pariatur cliche reprehenderit, enim eiusmod
                    high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                    a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    <Heading as="h4">Was this article helpful?</Heading>
                    <Button outlined type="success">
                      <Icon type="smile" />
                      Yes
                    </Button>
                    <Button outlined type="warning">
                      <Icon type="smile" />
                      No
                    </Button>
                  </p>
                </Panel>
                <Panel header="Where to buy this UI dashboard?" key="6" style={customPanelStyle}>
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ's and comments from previous buyers. Anim pariatur cliche reprehenderit, enim eiusmod
                    high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                    a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    <Heading as="h4">Was this article helpful?</Heading>
                    <Button outlined type="success">
                      <Icon type="smile" />
                      Yes
                    </Button>
                    <Button outlined type="warning">
                      <Icon type="smile" />
                      No
                    </Button>
                  </p>
                </Panel>
                <Panel header="How long does it take to download updates?" key="7" style={customPanelStyle}>
                  <p>
                    Many support queries and technical questions will already be answered in supporting documentation
                    such as FAQ's and comments from previous buyers. Anim pariatur cliche reprehenderit, enim eiusmod
                    high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                    a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    <Heading as="h4">Was this article helpful?</Heading>
                    <Button outlined type="success">
                      <Icon type="smile" />
                      Yes
                    </Button>
                    <Button outlined type="warning">
                      <Icon type="smile" />
                      No
                    </Button>
                  </p>
                </Panel>
              </Collapse>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Faq;
