import React, { lazy, useState, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin, Select } from 'antd';
import { Switch, NavLink, Route, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { ArrowRightOutlined } from '@ant-design/icons';
import GeneralKnowledgeTop from './overview/GeneralKnowledgeTop';
import KnowledgebaseArticle from './overview/Knowledgebase/KnowledgebaseArticle';
import { KnowledgebaseArticleWrap, ArticleTabWrap, PopularArticleWrap, CtaWrap } from './style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

const AllArticle = () => {
  return (
    <>
      <PageHeader
        title="All Article"
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
        <GeneralKnowledgeTop />
      </Main>
    </>
  );
};

AllArticle.propTypes = {
  match: propTypes.object,
};

export default AllArticle;
