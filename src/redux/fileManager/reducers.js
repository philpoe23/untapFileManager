import actions from './actions';
import fmData from '../../demoData/fileManager.json';

const initialState = {
  data: fmData,
  loading: false,
  error: null,
};

const { FM_DATA_BEGIN, FM_DATA_SUCCESS, FM_DATA_ERR } = actions;

const FmReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FM_DATA_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FM_DATA_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case FM_DATA_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default FmReducer;
