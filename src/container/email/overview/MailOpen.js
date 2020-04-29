import React, { useEffect, Fragment, lazy, Suspense } from 'react';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { filterSinglepage } from '../../../redux/email/actionCreator';
import { connect } from 'react-redux';
import Heading from '../../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import { Tooltip, Row, Col, Spin, Pagination } from 'antd';
import { Dropdown } from '../../../components/dropdown/dropdown';
import moment from 'moment';

const ReplyMessage = lazy(() => import('./replyMessage'));
const MailOpen = props => {
  const { filterSinglepage, match, email, history } = props;

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      filterSinglepage(parseInt(match.params.id));
    }
    return () => {
      unmounted = true;
    };
  }, [match.params.id, filterSinglepage]);
  const onChange = pageNumber => {
    console.log('Page: ', pageNumber);
  };
  return (
    <Cards
      title={
        <Fragment>
          <Link onClick={() => history.goBack()} to="#">
            <FeatherIcon icon="arrow-left" size={14} />
          </Link>
          <Tooltip placement="bottom" title="Archive">
            <FeatherIcon icon="archive" size={18} />
          </Tooltip>
          <Tooltip placement="bottom" title="Info">
            <FeatherIcon icon="alert-octagon" size={18} />
          </Tooltip>
          <Tooltip placement="bottom" title="Delete">
            <FeatherIcon icon="trash" size={18} />
          </Tooltip>
          <Tooltip placement="bottom" title="Read">
            <FeatherIcon icon="book-open" size={18} />
          </Tooltip>
          <Tooltip placement="bottom" title="Folder">
            <FeatherIcon icon="folder" size={18} />
          </Tooltip>
        </Fragment>
      }
      isbutton={
        <div>
          <span>1 - 50 of 235</span>
          <Pagination onChange={onChange} defaultCurrent={1} total={50} />
        </div>
      }
    >
      <Row gutter={15}>
        <Col md={22}>
          <Heading as="h2">
            {email.subject}
            <span> {email.type}</span>
          </Heading>
        </Col>
        <Col md={2}>
          <Link to="#">
            <FeatherIcon icon="code" size={14} />
          </Link>
          <Link to="#">
            <FeatherIcon icon="printer" size={14} />
          </Link>
        </Col>
        <Col md={14}>
          <img style={{ width: '60px', borderRadius: '50%' }} src={email.img} alt="" />
          <Heading as="h4">{email.userName}</Heading>
          <Dropdown
            content={
              <div>
                <p>From : {email.type === 'inbox' ? email.email : email.type === 'sent' ? 'me' : 'Unknown'}</p>
                <p>To : {email.type === 'inbox' ? 'me' : email.type === 'sent' ? email.email : 'Unknown'}</p>
                <p>CC : example@gamil.com</p>
                <p>Date : {moment(email.id).format('LLL')}</p>
                <p>Subject : {email.subject}</p>
              </div>
            }
          >
            <Link to="#">
              To {email.type === 'inbox' ? 'me' : email.type === 'sent' ? email.email : 'Unknown'}
              <FeatherIcon icon="chevron-down" size={14} />
            </Link>
          </Dropdown>
        </Col>
        <Col md={10}>
          <FeatherIcon icon="paperclip" size={14} />
          <span> {moment(email.id).format('LLL')} </span>
          <FeatherIcon icon="star" size={14} /> <FeatherIcon icon="corner-up-left" size={14} />{' '}
          <FeatherIcon icon="more-vertical" size={14} />
        </Col>
        <Col md={24}>
          <p>{email.body}</p>
          {email.type === 'inbox' && (
            <Heading as={'h6'}>
              Best Regurds <br /> {email.userName}
            </Heading>
          )}
        </Col>

        <Col md={4}>
          <figure>
            <img src={require('../../../static/img/email/2.png')} alt="" />
            <figcaption>
              <Heading as="h4">Attached.jpg</Heading>
              <p>256.5 KB</p>
            </figcaption>
          </figure>
        </Col>
        <Col md={6}>
          <figure>
            <img src={require('../../../static/img/email/1.png')} alt="" />
            <figcaption>
              <Heading as="h4">Attached.jpg</Heading>
              <p>256.5 KB</p>
            </figcaption>
          </figure>
        </Col>
      </Row>
      <hr />
      <Row gutter={15}>
        <Col md={24}>
          <nav>
            <ul>
              <li>
                <FeatherIcon icon="corner-up-left" size={14} />
                <NavLink to={match.url + '/replay'}>Reply</NavLink>
              </li>
              <li>
                <FeatherIcon icon="corner-up-right" size={14} />
                <NavLink to={match.url + '/forward'}>Forward</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Suspense
              fallback={
                <div className="spin">
                  <Spin />
                </div>
              }
            >
              <Route path={match.url + '/replay'} component={ReplyMessage} />
            </Suspense>
          </Switch>
        </Col>
      </Row>
    </Cards>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    filterSinglepage: id => dispatch(filterSinglepage(id)),
  };
};

const mapStateToProps = state => {
  return {
    email: state.emailSingle.data[0],
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MailOpen);
