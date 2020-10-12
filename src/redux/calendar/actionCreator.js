import actions from './actions';
import initialState from '../../demoData/event.json';

const {
  calenderReadBegin,
  calenderReadSuccess,
  calenderReadErr,
  starUpdateBegin,
  starUpdateSuccess,
  starUpdateErr,
  labelUpdateBegin,
  labelUpdateSuccess,
  labelUpdateErr,
} = actions;

const calenderGetData = () => {
  return async dispatch => {
    try {
      dispatch(calenderReadBegin());
      dispatch(calenderReadSuccess(initialState));
    } catch (err) {
      dispatch(calenderReadErr(err));
    }
  };
};

const calenderAddData = data => {
  return async dispatch => {
    try {
      dispatch(calenderReadBegin());
      dispatch(calenderReadSuccess(data));
    } catch (err) {
      dispatch(calenderReadErr(err));
    }
  };
};

const calenderDeleteData = data => {
  return async dispatch => {
    try {
      dispatch(calenderReadBegin());
      dispatch(calenderReadSuccess(data));
    } catch (err) {
      dispatch(calenderReadErr(err));
    }
  };
};

const onStarUpdate = (data, id) => {
  return async dispatch => {
    try {
      dispatch(starUpdateBegin());
      data.map(item => {
        if (item.key === id) {
          const fav = item;
          if (item.stared) {
            fav.stared = false;
          } else {
            fav.stared = true;
          }
        }
        return dispatch(starUpdateSuccess(data));
      });
    } catch (err) {
      dispatch(starUpdateErr(err));
    }
  };
};

const onLabelUpdate = (data, id, value) => {
  return async dispatch => {
    try {
      dispatch(labelUpdateBegin());
      data.map(item => {
        if (item.key === id) {
          const fav = item;
          fav.label = value;
        }
        return dispatch(labelUpdateSuccess(data));
      });
    } catch (err) {
      dispatch(labelUpdateErr(err));
    }
  };
};

const onLabelFilter = label => {
  return async dispatch => {
    try {
      dispatch(labelUpdateBegin());
      const data = initialState.filter(item => {
        return label === 'all' ? initialState : label === 'favorite' ? item.stared : item.label === label;
      });

      dispatch(labelUpdateSuccess(data));
    } catch (err) {
      dispatch(labelUpdateErr(err));
    }
  };
};

export { calenderGetData, calenderAddData, calenderDeleteData, onStarUpdate, onLabelUpdate, onLabelFilter };
