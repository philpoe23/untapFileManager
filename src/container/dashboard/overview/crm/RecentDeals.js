import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { recentDealGetData, recentDealFilterData } from '../../../../redux/chartContent/actionCreator';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const RecentDeals = () => {
  const dispatch = useDispatch();
  const { recentDealState } = useSelector(state => {
    return {
      recentDealState: state.chartContent.recentDealData,
    };
  });
  const [state, setState] = useState({
    products: 'year',
  });
  useEffect(() => {
    if (recentDealGetData) {
      dispatch(recentDealGetData());
    }
  }, [dispatch]);

  const handleActiveChangeProducts = value => {
    setState({
      ...state,
      products: value,
    });
    dispatch(recentDealFilterData(value));
  };

  const sellingData = [];
  if (recentDealState !== null) {
    recentDealState.map(value => {
      const { key, name, date, price, img } = value;
      return sellingData.push({
        key,
        name: (
          <>
            <img src={require(`../../../../${img}`)} alt="" />
            <h4>{name}</h4>
            <p>{date}</p>
          </>
        ),
        amount: price,
      });
    });
  }

  const sellingColumns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  return (
    <div className="full-width-table">
      <Cards
        isbutton={
          <div className="card-nav">
            <ul>
              <li className={state.products === 'today' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeProducts('today')} to="#">
                  Today
                </Link>
              </li>
              <li className={state.products === 'week' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeProducts('week')} to="#">
                  Week
                </Link>
              </li>
              <li className={state.products === 'month' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeProducts('month')} to="#">
                  Month
                </Link>
              </li>
              <li className={state.products === 'year' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeProducts('year')} to="#">
                  Year
                </Link>
              </li>
            </ul>
          </div>
        }
        title="Top Selling Products"
        size="large"
        bodypadding="0px"
      >
        <div className="table-bordered top-seller-table table-responsive">
          <Table columns={sellingColumns} dataSource={sellingData} pagination={false} />
        </div>
      </Cards>
    </div>
  );
};

export default RecentDeals;
