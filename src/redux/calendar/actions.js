const actions = {
  CALENDAR_READ_BEGIN: 'CALENDAR_READ_BEGIN',
  CALENDAR_READ_SUCCESS: 'CALENDAR_READ_SUCCESS',
  CALENDAR_READ_ERR: 'CALENDAR_READ_ERR',

  CALENDAR_STAR_UPDATE_BEGIN: 'CALENDAR_STAR_UPDATE_BEGIN',
  CALENDAR_STAR_UPDATE_SUCCESS: 'CALENDAR_STAR_UPDATE_SUCCESS',
  CALENDAR_STAR_UPDATE_ERR: 'CALENDAR_STAR_UPDATE_ERR',

  CALENDAR_LABEL_UPDATE_BEGIN: 'CALENDAR_LABEL_UPDATE_BEGIN',
  CALENDAR_LABEL_UPDATE_SUCCESS: 'CALENDAR_LABEL_UPDATE_SUCCESS',
  CALENDAR_LABEL_UPDATE_ERR: 'CALENDAR_LABEL_UPDATE_ERR',

  starUpdateBegin: () => {
    return {
      type: actions.CALENDAR_STAR_UPDATE_BEGIN,
    };
  },

  starUpdateSuccess: data => {
    return {
      type: actions.CALENDAR_STAR_UPDATE_SUCCESS,
      data,
    };
  },

  starUpdateErr: err => {
    return {
      type: actions.CALENDAR_STAR_UPDATE_ERR,
      err,
    };
  },

  labelUpdateBegin: () => {
    return {
      type: actions.CALENDAR_LABEL_UPDATE_BEGIN,
    };
  },

  labelUpdateSuccess: data => {
    return {
      type: actions.CALENDAR_LABEL_UPDATE_SUCCESS,
      data,
    };
  },

  labelUpdateErr: err => {
    return {
      type: actions.CALENDAR_LABEL_UPDATE_ERR,
      err,
    };
  },

  calendarReadBegin: () => {
    return {
      type: actions.CALENDAR_READ_BEGIN,
    };
  },

  calendarReadSuccess: data => {
    return {
      type: actions.CALENDAR_READ_SUCCESS,
      data,
    };
  },

  calendarReadErr: err => {
    return {
      type: actions.CALENDAR_READ_ERR,
      err,
    };
  },
};

export default actions;
