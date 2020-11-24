/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import actions from './actions';
import initialState from '../../demoData/fileManager.json';

const {
  fmDataBegin,
  fmDataSuccess,
  fmDataErr,
  fmDataReceivedBegin,
  fmDataReceivedSuccess,
  fmDataReceivedErr,
} = actions;

const fmGetData = () => {
  return async dispatch => {
    try {
      dispatch(fmDataBegin());
      dispatch(fmDataSuccess(initialState));
    } catch (err) {
      dispatch(fmDataErr(err));
    }
  };
};

const Folder = (folders, paths) => {
  return folders.map(item => {
    if (item.path === paths) {
      item.className = item.className === 'active' ? '' : 'active';
    }
    return item.folder.length && SubFolder(item.folder, paths);
  });
};

const SubFolder = (folders, paths) => {
  return folders.map(item => {
    if (item.path === paths) {
      item.className = item.className === 'active' ? '' : 'active';
    }
    return item.folder.length && Folder(item.folder, paths);
  });
};

const fmAddActiveClass = paths => {
  return async dispatch => {
    try {
      dispatch(fmDataBegin());
      initialState.map(value => {
        if (value.path === paths) {
          value.className = value.className === 'active' ? '' : 'active';
        }
        return value.folder.length && Folder(value.folder, paths);
      });

      dispatch(fmDataSuccess(initialState));
    } catch (err) {
      dispatch(fmDataErr(err));
    }
  };
};

const GetFolderData = (folders, paths, dispatch) => {
  return folders.filter(item => {
    if (item.path === paths) {
      return dispatch(fmDataReceivedSuccess([item]));
    }
    return item.folder.length && GetSubFolderData(item.folder, paths, dispatch);
  });
  // return dispatch(fmDataReceivedSuccess(filterData));
};

const GetSubFolderData = (folders, paths, dispatch) => {
  return folders.filter(item => {
    if (item.path === paths) {
      return dispatch(fmDataReceivedSuccess([item]));
    }
    return item.folder.length && Folder(item.folder, paths, dispatch);
  });
  // return dispatch(fmDataReceivedSuccess(filterData));
};

const fmReadAllFileFolder = paths => {
  return async dispatch => {
    try {
      dispatch(fmDataReceivedBegin());
      return initialState.filter(value => {
        if (value.path === paths) {
          return dispatch(fmDataReceivedSuccess([value]));
        }
        return value.folder.length && GetFolderData(value.folder, paths, dispatch);
      });

      // return dispatch(fmDataReceivedSuccess(filterData));
    } catch (err) {
      dispatch(fmDataReceivedErr(err));
    }
  };
};

export { fmGetData, fmAddActiveClass, fmReadAllFileFolder };
