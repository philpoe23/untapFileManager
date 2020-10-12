import actions from './actions';
import events from '../../demoData/event.json';

const initialState = {
  events,
  loading: false,
  error: null,
};

const {
  CALENDAR_READ_BEGIN,
  CALENDAR_READ_SUCCESS,
  CALENDAR_READ_ERR,
  CALENDAR_STAR_UPDATE_BEGIN,
  CALENDAR_STAR_UPDATE_SUCCESS,
  CALENDAR_STAR_UPDATE_ERR,
  CALENDAR_LABEL_UPDATE_BEGIN,
  CALENDAR_LABEL_UPDATE_SUCCESS,
  CALENDAR_LABEL_UPDATE_ERR,
} = actions;

const CalenderReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CALENDAR_STAR_UPDATE_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    case CALENDAR_STAR_UPDATE_SUCCESS:
      return {
        ...state,
        events: data,
        sLoading: false,
      };
    case CALENDAR_STAR_UPDATE_ERR:
      return {
        ...state,
        error: err,
        sLoading: false,
      };
    case CALENDAR_LABEL_UPDATE_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    case CALENDAR_LABEL_UPDATE_SUCCESS:
      return {
        ...state,
        events: data,
        sLoading: false,
      };
    case CALENDAR_LABEL_UPDATE_ERR:
      return {
        ...state,
        error: err,
        sLoading: false,
      };
    case CALENDAR_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CALENDAR_READ_SUCCESS:
      return {
        ...state,
        events: data,
        loading: false,
      };
    case CALENDAR_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default CalenderReducer;
