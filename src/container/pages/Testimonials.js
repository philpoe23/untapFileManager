import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import { TestimonialStyleWrapper } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

// import 'swiper/components/pagination/pagination.scss';

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
            <TestimonialStyleWrapper>
              <Cards headless>
                <div className="testimonial-block theme-1">
                  <h2 className="testimonial-title">Testimonial 1</h2>
                  <Swiper
                    centeredSlides
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={swiper => console.log(swiper)}
                  >
                    {users.map((user, index) => {
                      return (
                        <SwiperSlide key={user.id} index={index}>
                          <div className="testimonial-box">
                            <figure>
                              <img src={require(`../../${user.img}`)} alt="" />
                              <figcaption>
                                <h2>{user.name}</h2>
                                <p>{user.designation}</p>
                                <p>{user.content}</p>
                              </figcaption>
                            </figure>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </Cards>
            </TestimonialStyleWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Testimonials;
