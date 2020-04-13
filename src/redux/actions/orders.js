import initialState from '../../config/dataService/orders.json';

const orderFilter = (column, value) => {
  return async dispatch => {
    try {
      const data = initialState.filter(item => {
        if (value !== '') {
          return item[column] === value;
        }
        return item;
      });
      dispatch({
        type: 'ORDER_FILTER_SUCCESS',
        data: data,
      });
    } catch (err) {
      dispatch({
        type: 'ORDER_FILTER_ERR',
        err,
      });
    }
  };
};

export { orderFilter };
