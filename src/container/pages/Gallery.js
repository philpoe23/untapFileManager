import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { GalleryNav, GalleryCard } from './style';
import Heading from '../../components/heading/heading';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { galleryFilter } from '../../redux/gallary/actionCreator';

const Gallery = () => {
  const dispatch = useDispatch();
  const { gallery, isloading } = useSelector(state => {
    return {
      gallery: state.gallery.data,
      isloading: state.gallery.loading,
    };
  });

  const [state, setState] = useState({
    activeClass: '',
  });

  const handleChange = value => {
    dispatch(galleryFilter('category', value));
    setState({
      ...state,
      activeClass: value,
    });
  };

  return (
    <>
      <PageHeader ghost title="Gallery" />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <GalleryNav>
              <ul>
                <li>
                  <Link
                    className={state.activeClass === '' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('')}
                    to="#"
                  >
                    All
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'webDesign' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('webDesign')}
                    to="#"
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'uiDesign' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('uiDesign')}
                    to="#"
                  >
                    UI Design
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'wireframe' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('wireframe')}
                    to="#"
                  >
                    Wireframe
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'Presentation' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('Presentation')}
                    to="#"
                  >
                    Presentation
                  </Link>
                </li>
              </ul>
            </GalleryNav>
          </Col>
          {isloading ? (
            <Col xs={24}>
              <div className="spin">
                <Spin />
              </div>
            </Col>
          ) : (
            gallery.map(item => {
              const { id, name, img, category } = item;
              return (
                <Col key={id} xxl={6} lg={8} sm={12} xs={24}>
                  <GalleryCard style={{ marginBottom: '25px' }}>
                    <figure>
                      <img style={{ width: '100%' }} src={require(`../../${img}`)} alt="" />
                      <figcaption>
                        <div className="gallery-single-content">
                          <Heading className="gallery-single-title" as="h4">
                            {name}
                          </Heading>
                          <p>{category}</p>
                        </div>
                      </figcaption>
                    </figure>
                  </GalleryCard>
                </Col>
              );
            })
          )}
        </Row>
      </Main>
    </>
  );
};

export default Gallery;
