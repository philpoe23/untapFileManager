import initialState from '../../config/dataService/products.json';

const sorting = sortBy => {
  return async dispatch => {
    try {
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });
      dispatch({
        type: 'SORTING_SUCCESS',
        data: data,
      });
    } catch (err) {
      dispatch({
        type: 'SORTING_ERR',
        err,
      });
    }
  };
};

const priceRange = range => {
  return async dispatch => {
    try {
      const data = initialState.filter(product => {
        return product.price >= range[0] && product.price <= range[1];
      });
      dispatch({
        type: 'FILTER_SUCCESS',
        data: data,
      });
    } catch (err) {
      dispatch({
        type: 'FILTER_ERR',
        err,
      });
    }
  };
};

const filterByRating = range => {
  return async dispatch => {
    try {
      const data = initialState.filter(product => {
        return range[0].includes(product.rate);
      });
      dispatch({
        type: 'FILTER_SUCCESS',
        data: range[0].length ? data : initialState,
      });
    } catch (err) {
      dispatch({
        type: 'FILTER_ERR',
        err,
      });
    }
  };
};

const filterByBrand = brand => {
  return async dispatch => {
    try {
      const data = initialState.filter(product => {
        return brand[0].includes(product.brand);
      });
      dispatch({
        type: 'FILTER_SUCCESS',
        data: brand[0].length ? data : initialState,
      });
    } catch (err) {
      dispatch({
        type: 'FILTER_ERR',
        err,
      });
    }
  };
};

const filterByCategory = category => {
  return async dispatch => {
    try {
      const data = initialState.filter(product => {
        return product.category === category;
      });
      dispatch({
        type: 'FILTER_SUCCESS',
        data: category !== 'all' ? data : initialState,
      });
    } catch (err) {
      dispatch({
        type: 'FILTER_ERR',
        err,
      });
    }
  };
};

export { sorting, priceRange, filterByRating, filterByBrand, filterByCategory };
