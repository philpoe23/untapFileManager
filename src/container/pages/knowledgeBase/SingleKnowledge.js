import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import SideNav from './overview/SingleKnowledge/SideNav';
import SingleKnowledgeDetails from './overview/SingleKnowledge/SingleKnowledgeDetails';
import GeneralKnowledgeTop from './overview/GeneralKnowledgeTop';
import { KnowledgebaseArticleWrap, SingleKnowledgeContent } from './style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

const SingleKnowledge = () => {
  const [state, setState] = useState({
    responsive: 0,
    collapsed: false,
  });
  const { responsive, collapsed } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const toggleCollapsed = () => {
    setState({
      ...state,
      collapsed: !collapsed,
    });
  };

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
        <KnowledgebaseArticleWrap>
          <div className="knowledgebase-article-container">
            <div className="sDash_paginaion">
              <ul>
                <li>
                  <Link className="active" to="#">
                    Doc Home
                  </Link>
                </li>
                <li>
                  <Link className="active" to="#">
                    Switch between accounts
                  </Link>
                </li>
                <li>
                  <Link className="active" to="#">
                    Introduction to Plugin
                  </Link>
                </li>
                <li>
                  <span>Plugins</span>
                </li>
              </ul>
              {responsive <= 991 && (
                <Button type="primary" className="knowledge-sidebar-trigger" onClick={toggleCollapsed}>
                  <FeatherIcon icon={collapsed ? 'align-left' : 'align-right'} />
                </Button>
              )}
            </div>
            <SingleKnowledgeContent>
              {responsive > 991 ? (
                <SideNav />
              ) : (
                <div className={collapsed ? 'knowledge-sidebar-wrap show' : 'knowledge-sidebar-wrap hide'}>
                  <Button
                    type="link"
                    className="mail-sidebar-trigger trigger-close"
                    style={{ marginTop: 0 }}
                    onClick={toggleCollapsed}
                  >
                    <FeatherIcon icon="x" />
                  </Button>
                  <SideNav />
                </div>
              )}

              <SingleKnowledgeDetails />
            </SingleKnowledgeContent>
          </div>
        </KnowledgebaseArticleWrap>
      </Main>
    </>
  );
};

export default SingleKnowledge;
