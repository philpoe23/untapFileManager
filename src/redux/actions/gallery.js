import initialState from '../../config/dataService/gallery.json';

const galleryFilter = (column, value) => {
  return async dispatch => {
    try {
      const data = initialState.filter(item => {
        if (value !== '') {
          return item[column] === value;
        }
        return item;
      });
      dispatch({
        type: 'GALLERY_FILTER_SUCCESS',
        data: data,
      });
    } catch (err) {
      dispatch({
        type: 'GALLERY_FILTER_ERR',
        err,
      });
    }
  };
};

export { galleryFilter };
