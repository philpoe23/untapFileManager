import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import TeamCard from '../pages/overview/TeamCard';
import UserCards from '../pages/overview/UserCard';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { ChartjsBarChartTransparent } from '../../components/charts/chartjs';
import FacebookOverview from '../dashboard/overview/index/FacebookOverview';
import YoutubeSubscribers from '../dashboard/overview/index/YoutubeSubscribers';
import SocialMediaOverview from '../dashboard/overview/index/SocialMediaOverview';
import TwitterOverview from '../dashboard/overview/index/TwitterOverview';
import CardGroup from '../dashboard/overview/business/CardGroup';
import CashFlow from '../dashboard/overview/business/CashFlow';
import IncomeAndExpenses from '../dashboard/overview/business/IncomeAndExpenses';
import AccountGroup from '../dashboard/overview/business/AccountGroup';
import DailyOverview from '../dashboard/overview/performance/DailyOverview';
import SessionsByDevice from '../dashboard/overview/performance/SessionsByDevice';
import { CardBarChart2, EChartCard } from '../dashboard/style';
import Heading from '../../components/heading/heading';
import TotalRevenue from '../dashboard/overview/ecommerce/TotalRevenue';
import RevenueByDevice from '../dashboard/overview/ecommerce/RevenueByDevice';
import SalesByLocation from '../dashboard/overview/ecommerce/SalesByLocation';
import GridCard from '../project/overview/GridCard';
import ProductCards from '../ecommerce/product/overview/ProductCards';
import ProductCardsList from '../ecommerce/product/overview/ProductCardList';
import Ordersummary from '../ecommerce/overview/Ordersummary';
import MailComposer from '../email/overview/MailComposer';
import GalleryCards from '../pages/overview/GalleryCard';

const chartOptions = {
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        barPercentage: 1,
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};

const actions = (
  <>
    <Link to="#">
      <FeatherIcon size={14} icon="eye" />
      <span>View</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={14} icon="edit" />
      <span>Edit</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={14} icon="trash-2" />
      <span>Delete</span>
    </Link>
  </>
);

const WidgetsCard = () => {
  return (
    <>
      <PageHeader
        title="Widgets"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xs={16}>
            <FacebookOverview />
          </Col>
          <Col xs={8}>
            <SocialMediaOverview />
          </Col>
          <Col xs={8}>
            <YoutubeSubscribers />
          </Col>
          <Col xs={8}>
            <TwitterOverview />
          </Col>
          <Col xs={8}>
            <SessionsByDevice />
          </Col>
          <Col xs={12}>
            <CardGroup />
          </Col>
          <Col xs={12}>
            <CashFlow />
          </Col>
          <Col xs={24}>
            <IncomeAndExpenses />
          </Col>
          <AccountGroup />
          <Col md={8}>
            <DailyOverview />
          </Col>
          <Col md={16}>
            <TotalRevenue />
          </Col>
          <Col md={15}>
            <Row gutter={25}>
              <Col md={12} sm={12} xs={24}>
                <Cards headless>
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <Heading as="h1">7,461</Heading>
                        <span>Orders</span>
                        <p>
                          <span className="growth-upward">
                            <FeatherIcon icon="arrow-up" /> 25%
                          </span>
                          <span>Since last week</span>
                        </p>
                      </CardBarChart2>
                    </div>
                    <div className="card-chunk">
                      <ChartjsBarChartTransparent
                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                        datasets={[
                          {
                            data: [20, 60, 50, 45, 50, 60, 70],
                            backgroundColor: '#EFEFFE',
                            hoverBackgroundColor: '#5F63F2',
                            label: 'Orders',
                          },
                        ]}
                        options={chartOptions}
                      />
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
              <Col md={12} sm={12} xs={24}>
                <Cards headless>
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <Heading as="h1">$28,947</Heading>
                        <span>Revenue</span>
                        <p>
                          <span className="growth-downward">
                            <FeatherIcon icon="arrow-down" /> 25%
                          </span>
                          <span>Since last week</span>
                        </p>
                      </CardBarChart2>
                    </div>
                    <div className="card-chunk">
                      <ChartjsBarChartTransparent
                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                        datasets={[
                          {
                            data: [20, 60, 50, 45, 50, 60, 70],
                            backgroundColor: '#FFF0F6',
                            hoverBackgroundColor: '#FF69A5',
                            label: 'Revenue',
                          },
                        ]}
                        options={chartOptions}
                      />
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
              <Col md={12} sm={12} xs={24}>
                <Cards headless>
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <Heading as="h1">$3,241</Heading>
                        <span>Avg. order value</span>
                        <p>
                          <span className="growth-upward">
                            <FeatherIcon icon="arrow-up" /> 25%
                          </span>
                          <span>Since last week</span>
                        </p>
                      </CardBarChart2>
                    </div>
                    <div className="card-chunk">
                      <ChartjsBarChartTransparent
                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                        datasets={[
                          {
                            data: [20, 60, 50, 45, 50, 60, 70],
                            backgroundColor: '#E8FAF4',
                            hoverBackgroundColor: '#20C997',
                            label: 'Avg Orders',
                          },
                        ]}
                        options={chartOptions}
                      />
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
              <Col md={12} sm={12} xs={24}>
                <Cards headless>
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <Heading as="h1">45.2k</Heading>
                        <span>Unique visitors</span>
                        <p>
                          <span className="growth-upward">
                            <FeatherIcon icon="arrow-up" /> 25%
                          </span>
                          <span>Since last week</span>
                        </p>
                      </CardBarChart2>
                    </div>
                    <div className="card-chunk">
                      <ChartjsBarChartTransparent
                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                        datasets={[
                          {
                            data: [20, 60, 50, 45, 50, 60, 70],
                            backgroundColor: '#E9F5FF',
                            hoverBackgroundColor: '#2C99FF',
                            label: 'Visitors',
                          },
                        ]}
                        options={chartOptions}
                      />
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
            </Row>
          </Col>
          <Col md={9}>
            <GridCard
              value={{
                id: 1,
                title: 'Dashboard UI Project',
                status: 'early',
                content:
                  'Adipisicing eu magna velit est exercitation et consequat Lorem laboris nulla. Laborum exercitation minim id ea ea. Minim cillum magna excepteur laboris duis labore pariatur Lorem aute cupidatat velit sunt non. Est laborum anim aliqua in elit consequat elit elit cupidatat. Nulla excepteur laborum voluptate nisi eiusmod nostrud sit. Aute aliquip sit non consectetur laborum velit in exercitation laboris officia adipisicing deserunt. Sint laboris aute minim aliqua aute culpa laboris ad amet dolor ea Lorem sit.',
                category: 'Web Design',
                rate: 5,
                popular: 1,
                percentage: 85,
              }}
            />
          </Col>

          <Col md={8}>
            <RevenueByDevice />
          </Col>
          <Col md={9}>
            <SalesByLocation />
          </Col>
          <Col md={7}>
            <UserCards
              user={{
                id: 1,
                time: 1587041636455,
                name: 'Duran Clayton',
                designation: 'UI/UX Designer',
                img: 'static/img/users/1.png',
              }}
            />
          </Col>
          <Col md={6}>
            <ProductCards
              product={{
                id: 1,
                name: 'Montes Scelerisque',
                rate: 5,
                time: 1586372610052,
                price: 250,
                oldPrice: 650,
                popular: 105,
                brand: 'chair',
                category: 'furniture',
                img: 'static/img/products/1.png',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
              }}
            />
          </Col>
          <Col md={18}>
            <ProductCardsList
              product={{
                id: 1,
                name: 'Montes Scelerisque',
                rate: 5,
                time: 1586372610052,
                price: 250,
                oldPrice: 650,
                popular: 105,
                brand: 'chair',
                category: 'furniture',
                img: 'static/img/products/1.png',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
              }}
            />
            <ProductCardsList
              product={{
                id: 1,
                name: 'Montes Scelerisque',
                rate: 5,
                time: 1586372610052,
                price: 250,
                oldPrice: 650,
                popular: 105,
                brand: 'chair',
                category: 'furniture',
                img: 'static/img/products/1.png',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
              }}
            />
          </Col>
          <Col md={6}>
            <Cards headless>
              <Ordersummary subtotal={1200} />
            </Cards>
          </Col>
          <Col md={12}>
            <MailComposer />
          </Col>
          <Col md={6}>
            <TeamCard
              actions={actions}
              user={{
                id: 1,
                time: 1587041636455,
                name: 'Duran Clayton',
                designation: 'UI/UX Designer',
                img: 'static/img/users/1.png',
              }}
            />
          </Col>

          <Col md={6}>
            <GalleryCards
              actions={actions}
              item={{
                "id": 1,
                "name": "Snow Covered Mountain",
                "category": "Presentation",
                "img": "static/img/gallery/1.png"
              }}
            />
          </Col>          
        </Row>
      </Main>
    </>
  );
};

export default WidgetsCard;
