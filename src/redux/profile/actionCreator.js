import actions from './actions';
import initialState from '../../demoData/friends.json';

const { profileFriendsBegin, profileFriendsSuccess, profileFriendsErr } = actions;

const profileFriendsChangeStatus = key => {
  return async dispatch => {
    try {
      dispatch(profileFriendsBegin());
      initialState.map(friend => {
        if (friend.key === key) {
          return friend.status ? (friend.status = false) : (friend.status = true);
        }
        return dispatch(profileFriendsSuccess(initialState));
      });
    } catch (err) {
      dispatch(profileFriendsErr(err));
    }
  };
};

export { profileFriendsChangeStatus };
