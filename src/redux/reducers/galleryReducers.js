import initialState from '../../config/dataService/gallery.json';

const galleryReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case 'GALLERY_FILTER_SUCCESS':
      return [...data];
    case 'GALLERY_FILTER_ERR':
      return err;
    default:
      return state;
  }
};
export default galleryReducer;
