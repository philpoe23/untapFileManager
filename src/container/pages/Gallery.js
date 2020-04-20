import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Heading from '../../components/heading/heading';
import { Link } from 'react-router-dom';
import { GalleryNav } from './style';
import { galleryFilter } from '../../redux/actions/gallery';

const Gallery = ({ gallery, galleryFilter }) => {
  const handleChange = e => {
    e.preventDefault();
    galleryFilter('category', e.target.getAttribute('data-filter'));
    e.target
      .closest('ul')
      .querySelector('a.active')
      .classList.remove('active');
    e.target.classList.add('active');
  };

  return (
    <Fragment>
      <PageHeader ghost title="Gallery" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <GalleryNav>
              <ul>
                <li>
                  <Link className="active" onClick={handleChange} data-filter="" to="#">
                    All
                  </Link>
                </li>
                <li>
                  <Link onClick={handleChange} data-filter="webDesign" to="#">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link onClick={handleChange} data-filter="uiDesign" to="#">
                    UI Design
                  </Link>
                </li>
                <li>
                  <Link onClick={handleChange} data-filter="wireframe" to="#">
                    Wireframe
                  </Link>
                </li>
                <li>
                  <Link onClick={handleChange} data-filter="Presentation" to="#">
                    Presentation
                  </Link>
                </li>
              </ul>
            </GalleryNav>
          </Col>
          {gallery.map(item => {
            const { id, name, img, category } = item;
            return (
              <Col key={id} md={6}>
                <figure>
                  <img style={{ width: '100%' }} src={require('../../' + img)} alt="" />
                  <figcaption>
                    <Heading as="h4">{name}</Heading>
                    <p>{category}</p>
                  </figcaption>
                </figure>
              </Col>
            );
          })}
        </Row>
      </Main>
    </Fragment>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    galleryFilter: (column, value) => dispatch(galleryFilter(column, value)),
  };
};
const mapStateToProps = state => {
  return {
    gallery: state.gallery,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
