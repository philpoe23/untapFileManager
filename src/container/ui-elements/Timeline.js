import React from 'react';
import { Row, Col, Timeline } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import {
  SwRocket,
  SwShieldCheck,
  SwPenTool,
  SwNotification,
  SwUsers,
  SwLayers,
  SwPicture,
  SwClock,
  SwEllipse,
} from '../../components/utilities/icons';

const Timelines = () => {
  return (
    <>
      <PageHeader
        title="Timelines"
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
          <Col md={12} sm={24} xs={24}>
            <Cards title="Basic" caption="The simplest use of Timelines">
              <Timeline>
                <Timeline.Item dot={<SwRocket size={20} color="#5F63F2" />}>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p>HTML,CSS,VueJS</p>
                </Timeline.Item>
                <Timeline.Item dot={<SwShieldCheck size={20} color="#2C99FF" />}>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p>HTML,CSS,VueJS</p>
                </Timeline.Item>
                <Timeline.Item dot={<SwPenTool size={24} color="#fa8b0c" />}>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p>HTML,CSS,VueJS</p>
                </Timeline.Item>
                <Timeline.Item dot={<SwNotification size={17} color="#FF69A5" />}>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p>HTML,CSS,VueJS</p>
                </Timeline.Item>
                <Timeline.Item dot={<SwUsers size={21} color="#20c997" />}>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p>HTML,CSS,VueJS</p>
                </Timeline.Item>
                <Timeline.Item dot={<SwLayers size={21} color="#ff4d4f" />}>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p>HTML,CSS,VueJS</p>
                </Timeline.Item>
                <Timeline.Item dot={<SwPicture size={21} color="#5f63f2" />}>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p>HTML,CSS,VueJS</p>
                </Timeline.Item>
                <Timeline.Item dot={<SwClock size={21} color="#ff69a5" />}>
                  <h3>02:30 PM</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p>HTML,CSS,VueJS</p>
                </Timeline.Item>
              </Timeline>
            </Cards>
            <Cards title="Basic" caption="The simplest use of Timelines">
              <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
              </Timeline>
            </Cards>
            <Cards title="Alternate" caption="The simplest use of Timelines">
              <Timeline mode="alternate">
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </Timeline.Item>
                <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                  Technical testing 2015-09-01
                </Timeline.Item>
              </Timeline>
            </Cards>
            <Cards title="Custom" caption="The simplest use of Timelines">
              <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="red">
                  Technical testing 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
              </Timeline>
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Timeline 1" caption="The simplest use of Timelines">
              <Timeline>
                <Timeline.Item dot={<SwEllipse size={10} color="#ADB4D2" />}>
                  <Row gutter={10}>
                    <Col md={20}>
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </Col>
                    <Col md={4}>6:00 am</Col>
                  </Row>
                </Timeline.Item>
                <Timeline.Item dot={<SwEllipse size={10} color="#5F63F2" />}>
                  <Row gutter={10}>
                    <Col md={20}>
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </Col>
                    <Col md={4}>1 hrs</Col>
                  </Row>
                </Timeline.Item>
                <Timeline.Item dot={<SwEllipse size={10} color="#2C99FF" />}>
                  <Row gutter={10}>
                    <Col md={20}>
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </Col>
                    <Col md={4}>2 days</Col>
                  </Row>
                </Timeline.Item>
                <Timeline.Item dot={<SwEllipse size={10} color="#20C997" />}>
                  <Row gutter={10}>
                    <Col md={20}>
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </Col>
                    <Col md={4}>3 week</Col>
                  </Row>
                </Timeline.Item>
                <Timeline.Item dot={<SwEllipse size={10} color="#FA8B0C" />}>
                  <Row gutter={10}>
                    <Col md={20}>
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </Col>
                    <Col md={4}>2 month</Col>
                  </Row>
                </Timeline.Item>
              </Timeline>
            </Cards>
            <Cards title="Timeline 2" caption="The simplest use of Timelines">
              <Timeline mode="alternate">
                <Timeline.Item dot={<SwEllipse size={10} color="#ADB4D2" />}>
                  <h2>10:00 AM</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the,
                  </p>
                </Timeline.Item>
                <Timeline.Item dot={<SwEllipse size={10} color="#5F63F2" />}>
                  <h2>10:00 AM</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the,
                  </p>
                </Timeline.Item>
                <Timeline.Item dot={<SwEllipse size={10} color="#2C99FF" />}>
                  <h2>10:00 AM</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the,
                  </p>
                </Timeline.Item>
                <Timeline.Item dot={<SwEllipse size={10} color="#20C997" />}>
                  <h2>10:00 AM</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the,
                  </p>
                </Timeline.Item>
                <Timeline.Item dot={<SwEllipse size={10} color="#FA8B0C" />}>
                  <h2>10:00 AM</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the,
                  </p>
                </Timeline.Item>
              </Timeline>
            </Cards>
            <Cards title="Color" caption="The simplest use of Timelines">
              <Timeline>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="red">
                  <p>Solve initial network problems 1</p>
                  <p>Solve initial network problems 2</p>
                  <p>Solve initial network problems 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item color="gray">
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item color="gray">
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
              </Timeline>
            </Cards>
            <Cards title="Right alternate" caption="The simplest use of Timelines">
              <Timeline mode="right">
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="red">
                  Technical testing 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
              </Timeline>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Timelines;
