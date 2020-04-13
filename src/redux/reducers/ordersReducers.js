import initialState from '../../config/dataService/orders.json';

const orderReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case 'ORDER_FILTER_SUCCESS':
      return [...data];
    case 'ORDER_FILTER_ERR':
      return err;
    default:
      return state;
  }
};
export default orderReducer;
