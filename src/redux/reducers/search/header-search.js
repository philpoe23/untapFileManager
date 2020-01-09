import initialState from '../../../config/dataService/header-search.json';

const headerSearchReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case 'HEADER_SEARCH_SUCCESS':
      return data;
    case 'HEADER_SEARCH_ERR':
      return err;
    default:
      return state;
  }
};
export default headerSearchReducer;
