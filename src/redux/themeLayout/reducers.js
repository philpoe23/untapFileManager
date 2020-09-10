import actions from './actions';
import staticData from '../../config/config';

const initialState = {
  data: staticData.darkMode,
  loading: false,
  error: null,
};

const { CHANGE_LAYOUT_MODE_BEGIN, CHANGE_LAYOUT_MODE_SUCCESS, CHANGE_LAYOUT_MODE_ERR } = actions;

const LayoutChangeReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CHANGE_LAYOUT_MODE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_LAYOUT_MODE_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case CHANGE_LAYOUT_MODE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default LayoutChangeReducer;
