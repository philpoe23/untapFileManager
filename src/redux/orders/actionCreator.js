import initialState from '../../config/dataService/orders.json';
import actions from './actions';

const { filterOrderBegin, filterOrderSuccess, filterOrderErr } = actions;

const orderFilter = (column, value) => {
  return async dispatch => {
    try {
      dispatch(filterOrderBegin());

      const data = initialState.filter(item => {
        if (value !== '') {
          return item[column] === value;
        }
        return item;
      });

      dispatch(filterOrderSuccess(data));
    } catch (err) {
      dispatch(filterOrderErr(err));
    }
  };
};

export { orderFilter };
