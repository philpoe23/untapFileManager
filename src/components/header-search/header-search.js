import React, { Fragment, useLayoutEffect, useState } from 'react';
import { Icon, Input, Row, Col } from 'antd';
import { Div } from './header-search-style';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { headerSearchAction } from '../../redux/headerSearch/actionCreator';
import PropTypes from 'prop-types';
import { Popover } from '../popup/popup';
import { Button } from '../buttons/buttons';
import FeatherIcon from 'feather-icons-react';

const HeaderSearch = props => {
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.headerSearchData);

  const [state, setState] = useState({
    size: 0,
    hide: false,
  });

  const { size, hide } = state;

  useLayoutEffect(() => {
    function updateSize() {
      setState({ hide: window.innerWidth <= 600 ? true : false, size: window.innerWidth });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const search = e => {
    dispatch(headerSearchAction(e.target.value));
  };

  const handleHide = e => {
    e.preventDefault();
    setState({
      ...state,
      hide: hide ? false : true,
    });
  };

  const content = (
    <div>
      {searchData.length ? (
        searchData.map(group => {
          const { title, count, id } = group;
          return (
            <NavLink key={id} to="#">
              {title}
              <span className="certain-search-item-count">{count} people</span>
            </NavLink>
          );
        })
      ) : (
        <NavLink to="#">Data Not found....</NavLink>
      )}
    </div>
  );

  return (
    <Fragment>
      {!hide && (
        <Div className="certain-category-search-wrapper" style={{ width: '100%' }}>
          <Row>
            <Col xs={2} className="text-right">
              <Icon type="search" className="certain-category-icon" />
            </Col>
            <Col xs={22}>
              <Popover placement="bottomLeft" content={content} title="Search List" trigger="focus">
                <Input placeholder="Search..." onInput={search} />
              </Popover>
            </Col>
          </Row>
        </Div>
      )}
      {size <= 600 && (
        <Link onClick={handleHide} to="#">
          {hide ? <FeatherIcon icon="search" /> : <FeatherIcon icon="x" />}
        </Link>
      )}
    </Fragment>
  );
};

HeaderSearch.propTypes = {
  searchData: PropTypes.array,
  headerSearch: PropTypes.func,
};

export default HeaderSearch;
