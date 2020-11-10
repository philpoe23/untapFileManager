import React from 'react';
import { Row, Col, Collapse } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ChangelogWrapper, VersionHistoryList  } from './style';
import versions from '../../demoData/changelog.json';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const { Panel } = Collapse;
const ChangeLog = () => {
  // versions.map(item => {
  //     return console.log(item)
  // })
  console.log(versions[0]);
  return (
    <>
      <PageHeader
        title="Changelog"
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
          <Col xs={19}>
            <ChangelogWrapper>
              <Cards title={<><span className="v-num">Version {versions[0].version} </span> <span className="sign">-</span> <span className="rl-date">{versions[0].date}</span></>}>
                <div className="changelog-featured">
                  <div className="version-list">
                    {/* {versions[0].changes.map(vData => {
                      return (
                        <div className="version-list__single">
                          <div className="version-list__top">
                            <span className={`badge badge-lg badge-${vData.type}`}>{vData.title}</span>
                          </div>
                          <ul className="version-success">
                            {vData.content.map(list =>{
                              return (
                                <li>{list.content}</li>
                              )
                            })}
                          </ul>
                        </div>
                      );
                    })} */}
                    <div className="version-list__single">
                      <div className="version-list__top">
                        <span className="badge badge-lg badge-success">New</span>
                      </div>
                      <ul className="version-success">
                        <li>Add – Option to set custom redirection after login</li>
                        <li>Add – Option to set custom redirection after login</li>
                        <li>Add – Option to set custom redirection after login</li>
                        <li>Add – Option to set custom redirection after login</li>
                      </ul>
                    </div>
                    <div className="version-list__single">
                      <div className="version-list__top">
                        <span className="badge badge-lg badge-info">Fixed</span>
                      </div>
                      <ul className="version-info">
                        <li>Add – Option to set custom redirection after login</li>
                        <li>Add – Option to set custom redirection after login</li>
                        <li>Add – Option to set custom redirection after login</li>
                        <li>Add – Option to set custom redirection after login</li>
                      </ul>
                    </div>
                    <div className="version-list__single">
                      <div className="version-list__top">
                        <span className="badge badge-lg badge-primary">Updated</span>
                      </div>
                      <ul className="version-primary">
                        <li>Add – Option to set custom redirection after login</li>
                        <li>Add – Option to set custom redirection after login</li>
                        <li>Add – Option to set custom redirection after login</li>
                        <li>Add – Option to set custom redirection after login</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="changelog-accordion">
                  <Collapse accordion>
                    <Panel header={<><span className="v-num">6.4.2 -</span> <span className="rl-date">Jun 12, 2020</span></>} key="1">
                      <div className="version-list">
                        <div className="version-list__single">
                          <div className="version-list__top">
                            <span className="badge badge-lg badge-success">New</span>
                          </div>
                          <ul className="version-success">
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                          </ul>
                        </div>
                        <div className="version-list__single">
                          <div className="version-list__top">
                            <span className="badge badge-lg badge-info">Fixed</span>
                          </div>
                          <ul className="version-info">
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                          </ul>
                        </div>
                        <div className="version-list__single">
                          <div className="version-list__top">
                            <span className="badge badge-lg badge-primary">Updated</span>
                          </div>
                          <ul className="version-primary">
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                          </ul>
                        </div>
                      </div>
                    </Panel>
                    <Panel header={<><span className="v-num">6.4.2 -</span> <span className="rl-date">Jun 12, 2020</span></>} key="2">
                      <div className="version-list">
                        <div className="version-list__single">
                          <div className="version-list__top">
                            <span className="badge badge-lg badge-success">New</span>
                          </div>
                          <ul className="version-success">
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                          </ul>
                        </div>
                        <div className="version-list__single">
                          <div className="version-list__top">
                            <span className="badge badge-lg badge-info">Fixed</span>
                          </div>
                          <ul className="version-info">
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                          </ul>
                        </div>
                        <div className="version-list__single">
                          <div className="version-list__top">
                            <span className="badge badge-lg badge-primary">Updated</span>
                          </div>
                          <ul className="version-primary">
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                            <li>Add – Option to set custom redirection after login</li>
                          </ul>
                        </div>
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </Cards>
            </ChangelogWrapper>
          </Col>
          <Col xs={5}>
            <VersionHistoryList>
              <Cards title="CHANGELOG">
                <h4 className="history-title">VERSION HISTORY</h4>
                <ul className="v-history-list">
                  <li>
                    <span className="version-name">Version 1.4.0</span>
                    <span className="version-date">15.10.2020</span>
                  </li>
                  <li>
                    <span className="version-name">Version 1.4.0</span>
                    <span className="version-date">15.10.2020</span>
                  </li>
                  <li>
                    <span className="version-name">Version 1.4.0</span>
                    <span className="version-date">15.10.2020</span>
                  </li>
                  <li>
                    <span className="version-name">Version 1.4.0</span>
                    <span className="version-date">15.10.2020</span>
                  </li>
                </ul>
              </Cards>
            </VersionHistoryList>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ChangeLog;
