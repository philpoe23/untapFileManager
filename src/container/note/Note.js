import React from 'react';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { EmailNav, EmailWrapper, Bullet } from './style';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import NoteCard from '../../components/note/Card';
import { onLabelFilter } from '../../redux/note/actionCreator';

const Note = () => {
  const { noteData } = useSelector(state => {
    return {
      noteData: state.Note.data,
    };
  });
  const dispatch = useDispatch();

  const onFilterData = label => {
    dispatch(onLabelFilter(label));
  };

  return (
    <>
      <PageHeader
        ghost
        title="Note"
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
        <EmailWrapper>
          <Row gutter={30}>
            <Col xxl={5} xl={7} lg={10} xs={24}>
              <Cards headless>
                <div className="mail-sidebar-top">
                  <Button shape="round" type="primary" size="default" block>
                    <FeatherIcon icon="plus" size={18} /> Add Notes
                  </Button>
                </div>

                <div className="mail-sidebar-bottom">
                  <EmailNav>
                    <ul>
                      <li>
                        <Link onClick={() => onFilterData('all')} to="#">
                          <FeatherIcon icon="edit" size={18} />
                          <span className="nav-text">
                            <span>All</span>
                            {/* <span className="badge badge-primary">3</span> */}
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => onFilterData('favorite')} to="#">
                          <FeatherIcon icon="star" size={18} />
                          <span className="nav-text">
                            <span>Favorites</span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                    <div className="nav-labels">
                      <p>
                        <img src={require('../../static/img/icon/label.png')} alt="icon" /> Labels
                      </p>
                      <ul>
                        <li>
                          <Link onClick={() => onFilterData('personal')} to="#">
                            <Bullet className="personal" /> Personal
                          </Link>
                        </li>
                        <li>
                          <Link onClick={() => onFilterData('work')} to="#">
                            <Bullet className="work" /> Work
                          </Link>
                        </li>
                        <li>
                          <Link onClick={() => onFilterData('social')} to="#">
                            <Bullet className="social" /> Social
                          </Link>
                        </li>
                        <li>
                          <Link onClick={() => onFilterData('important')} to="#">
                            <Bullet className="important" /> Important
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </EmailNav>
                </div>
              </Cards>
            </Col>
            <Col md={19}>
              <Cards title="Task Lists">
                <Row gutter={15}>
                  {noteData.map(item => {
                    return (
                      <Col md={8} key={item.key}>
                        <NoteCard data={item} />
                      </Col>
                    );
                  })}
                </Row>
              </Cards>
            </Col>
          </Row>
        </EmailWrapper>
      </Main>
    </>
  );
};

Note.propTypes = {
  // match: PropTypes.shape(PropTypes.object),
};
export default Note;
