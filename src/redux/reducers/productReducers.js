import initialState from '../../config/dataService/products.json';

const productReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case 'SORTING_SUCCESS':
      return [...data];
    case 'SORTING_ERR':
      return err;
    case 'FILTER_SUCCESS':
      return [...data];
    case 'FILTER_ERR':
      return err;
    default:
      return state;
  }
};

const productSingleReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case 'FILTER_SINGLE_SUCCESS':
      return [...data];
    case 'FILTER_SINGLE_ERR':
      return err;
    default:
      return state;
  }
};

export { productReducer, productSingleReducer };
