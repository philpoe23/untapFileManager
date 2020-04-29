import initialState from '../../config/dataService/projectData.json';
import actions from './actions';

const {
  singleProjectBegin,
  singleProjectSuccess,
  singleProjectErr,

  filterProjectBegin,
  filterProjectSuccess,
  filterProjectErr,

  sortingProjectBegin,
  sortingProjectSuccess,
  sortingProjectErr,
} = actions;

const filterSinglepage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleProjectBegin());
      const data = initialState.filter(project => {
        return project.id === parseInt(paramsId);
      });
      dispatch(singleProjectSuccess(data));
    } catch (err) {
      dispatch(singleProjectErr(err));
    }
  };
};

const filterProjectByStatus = status => {
  return async dispatch => {
    try {
      dispatch(filterProjectBegin());
      const data = initialState.filter(project => {
        if (status !== 'all') {
          return project.status === status;
        } else {
          return initialState;
        }
      });
      dispatch(filterProjectSuccess(data));
    } catch (err) {
      dispatch(filterProjectErr(err));
    }
  };
};

const sortingProjectByCategory = sortBy => {
  return async dispatch => {
    try {
      dispatch(sortingProjectBegin());
      const data = initialState.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });
      dispatch(sortingProjectSuccess(data));
    } catch (err) {
      dispatch(sortingProjectErr(err));
    }
  };
};

export { filterSinglepage, filterProjectByStatus, sortingProjectByCategory };
