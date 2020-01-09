import initialState from '../../config/dataService/header-search.json';

const headerSearchAction = searchData => {
  return async dispatch => {
    try {
      const data = initialState.filter(item => {
        return item.title.startsWith(searchData);
      });

      dispatch({
        type: 'HEADER_SEARCH_SUCCESS',
        data: data,
      });
    } catch (err) {
      dispatch({
        type: 'HEADER_SEARCH_ERR',
        err,
      });
    }
  };
};

export { headerSearchAction };
