import React from 'react';
import { Input, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Div } from './header-search-style';
import { headerSearchAction } from '../../redux/headerSearch/actionCreator';
import { Popover } from '../popup/popup';

const HeaderSearch = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.headerSearchData);

  const search = e => {
    dispatch(headerSearchAction(e.target.value));
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
    <>
      <Div className="certain-category-search-wrapper" style={{ width: '100%' }}>
        <Row>
          <Col md={2} className="text-right">
            {/* <Icon type="search" className="certain-category-icon" /> */}
          </Col>
          <Col md={22} xs={24}>
            <Popover placement="bottomLeft" content={content} title="Search List" trigger="focus">
              <Input placeholder="Search..." onInput={search} />
            </Popover>
          </Col>
        </Row>
      </Div>
    </>
  );
};

export default HeaderSearch;
