const actions = {
  PROFILE_FRIENDS_BEGIN: 'PROFILE_FRIENDS_BEGIN',
  PROFILE_FRIENDS_SUCCESS: 'PROFILE_FRIENDS_SUCCESS',
  PROFILE_FRIENDS_ERR: 'PROFILE_FRIENDS_ERR',

  profileFriendsBegin: () => {
    return {
      type: actions.PROFILE_FRIENDS_BEGIN,
    };
  },

  profileFriendsSuccess: data => {
    return {
      type: actions.PROFILE_FRIENDS_SUCCESS,
      data,
    };
  },

  profileFriendsErr: err => {
    return {
      type: actions.PROFILE_FRIENDS_ERR,
      err,
    };
  },
};

export default actions;
