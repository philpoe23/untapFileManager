import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import { useSelector } from 'react-redux';
import { TestimonialWrapper } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Testimonials = () => {
  const { users } = useSelector(state => {
    return {
      users: state.users,
    };
  });
  return (
    <>
      <PageHeader
        title="Testimonials"
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
          <Col sm={24} xs={24}>
            <Cards headless>
              <CarouselProvider
                visibleSlides={3}
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={users.length}
              >
                <TestimonialWrapper>
                  <Slider>
                    {users.map((user, index) => {
                      return (
                        <Slide key={user.id} index={index}>
                          <figure>
                            <img src={require(`../../${user.img}`)} alt="" />
                            <figcaption>
                              <h2>{user.name}</h2>
                              <p>{user.designation}</p>
                              <p>{user.content}</p>
                            </figcaption>
                          </figure>
                        </Slide>
                      );
                    })}
                  </Slider>
                  <div className="button-group">
                    <ButtonBack>
                      <FeatherIcon icon="arrow-left" />
                    </ButtonBack>
                    <ButtonNext>
                      <FeatherIcon icon="arrow-right" />
                    </ButtonNext>
                  </div>
                  <DotGroup />
                </TestimonialWrapper>
              </CarouselProvider>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Testimonials;
