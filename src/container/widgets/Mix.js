import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import SocialMediaOverview from '../dashboard/overview/index/SocialMediaOverview';
import CardGroup from '../dashboard/overview/business/CardGroup';
import DailyOverview from '../dashboard/overview/performance/DailyOverview';
import SalesByLocation from '../dashboard/overview/ecommerce/SalesByLocation';
import Ordersummary from '../ecommerce/overview/Ordersummary';

const WidgetsCard = () => {
  return (
    <>
      <PageHeader
        title="Widgets Mixed"
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
          <Col xxl={8} xl={12}>
            <SocialMediaOverview />
          </Col> 
          <Col xxl={8} xl={12}>
            <SocialMediaOverview />
          </Col> 
          <Col xxl={8} xl={12}>
            <SocialMediaOverview />
          </Col> 
          
          <Col xxl={8} xl={12}>
            <SalesByLocation />
          </Col>
          <Col xxl={8} xl={12}>
            <SalesByLocation />
          </Col> 
          <Col xxl={8} xl={12}>
            <SalesByLocation />
          </Col> 

          <Col xxl={8}>
            <DailyOverview />
          </Col>  
          <Col md={8}>
            <DailyOverview />
          </Col>  
          <Col md={8}>
            <DailyOverview />
          </Col>  

          <Col md={6}>
            <Cards headless>
              <Ordersummary subtotal={1200} />
            </Cards>
          </Col> 
          <Col md={6}>
            <Cards headless>
              <Ordersummary subtotal={1200} />
            </Cards>
          </Col>       
          <Col xs={12}>
            <CardGroup />
          </Col>              
        </Row>
      </Main>
    </>
  );
};

export default WidgetsCard;
