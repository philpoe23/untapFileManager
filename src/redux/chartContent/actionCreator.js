import actions from './actions';
import {
  forcastOverview,
  youtubeSubscribe,
  SocialTrafficMetrics,
  twitterOverview,
  instagramOverview,
  linkdinOverview,
  cashFlow,
} from '../../demoData/dashboardChartContent.json';

const {
  forcastOverviewBegin,
  forcastOverviewSuccess,
  forcastOverviewErr,

  twitterOverviewBegin,
  twitterOverviewSuccess,
  twitterOverviewErr,

  linkdinOverviewBegin,
  linkdinOverviewSuccess,
  linkdinOverviewErr,

  instagramOverviewBegin,
  instagramOverviewSuccess,
  instagramOverviewErr,

  youtubeSubscribeBegin,
  youtubeSubscribeSuccess,
  youtubeSubscribeErr,

  socialTrafficBegin,
  socialTrafficSuccess,
  socialTrafficErr,

  cashFlowBegin,
  cashFlowSuccess,
  cashFlowErr,
} = actions;

const forcastOverviewGetData = () => {
  return async dispatch => {
    const { today } = forcastOverview;
    try {
      dispatch(forcastOverviewBegin());
      dispatch(forcastOverviewSuccess(today));
    } catch (err) {
      dispatch(forcastOverviewErr(err));
    }
  };
};

const forcastOverviewFilterData = value => {
  return async dispatch => {
    try {
      dispatch(forcastOverviewBegin());
      setTimeout(() => {
        dispatch(forcastOverviewSuccess(forcastOverview[value]));
      }, 100);
    } catch (err) {
      dispatch(forcastOverviewErr(err));
    }
  };
};

const youtubeSubscribeGetData = () => {
  return async dispatch => {
    const { year } = youtubeSubscribe;
    try {
      dispatch(youtubeSubscribeBegin());
      dispatch(youtubeSubscribeSuccess(year));
    } catch (err) {
      dispatch(youtubeSubscribeErr(err));
    }
  };
};

const youtubeSubscribeFilterData = value => {
  return async dispatch => {
    try {
      dispatch(youtubeSubscribeBegin());
      setTimeout(() => {
        dispatch(youtubeSubscribeSuccess(youtubeSubscribe[value]));
      }, 100);
    } catch (err) {
      dispatch(youtubeSubscribeErr(err));
    }
  };
};

const socialTrafficGetData = () => {
  return async dispatch => {
    const { today } = SocialTrafficMetrics;
    try {
      dispatch(socialTrafficBegin());
      dispatch(socialTrafficSuccess(today));
    } catch (err) {
      dispatch(socialTrafficErr(err));
    }
  };
};

const socialTrafficFilterData = value => {
  return async dispatch => {
    try {
      dispatch(socialTrafficBegin());
      setTimeout(() => {
        dispatch(socialTrafficSuccess(SocialTrafficMetrics[value]));
      }, 100);
    } catch (err) {
      dispatch(socialTrafficErr(err));
    }
  };
};

const twitterOverviewGetData = () => {
  return async dispatch => {
    const { month } = twitterOverview;
    try {
      dispatch(twitterOverviewBegin());
      dispatch(twitterOverviewSuccess(month));
    } catch (err) {
      dispatch(twitterOverviewErr(err));
    }
  };
};

const twitterOverviewFilterData = value => {
  return async dispatch => {
    try {
      dispatch(twitterOverviewBegin());
      setTimeout(() => {
        dispatch(twitterOverviewSuccess(twitterOverview[value]));
      }, 100);
    } catch (err) {
      dispatch(twitterOverviewErr(err));
    }
  };
};

const instagramOverviewGetData = () => {
  return async dispatch => {
    const { month } = instagramOverview;
    try {
      dispatch(instagramOverviewBegin());
      dispatch(instagramOverviewSuccess(month));
    } catch (err) {
      dispatch(instagramOverviewErr(err));
    }
  };
};

const instagramOverviewFilterData = value => {
  return async dispatch => {
    try {
      dispatch(instagramOverviewBegin());
      setTimeout(() => {
        dispatch(instagramOverviewSuccess(instagramOverview[value]));
      }, 100);
    } catch (err) {
      dispatch(instagramOverviewErr(err));
    }
  };
};

const linkdinOverviewGetData = () => {
  return async dispatch => {
    const { month } = linkdinOverview;
    try {
      dispatch(linkdinOverviewBegin());
      dispatch(linkdinOverviewSuccess(month));
    } catch (err) {
      dispatch(linkdinOverviewErr(err));
    }
  };
};

const linkdinOverviewFilterData = value => {
  return async dispatch => {
    try {
      dispatch(linkdinOverviewBegin());
      setTimeout(() => {
        dispatch(linkdinOverviewSuccess(linkdinOverview[value]));
      }, 100);
    } catch (err) {
      dispatch(linkdinOverviewErr(err));
    }
  };
};

const cashFlowGetData = () => {
  return async dispatch => {
    const { month } = cashFlow;
    try {
      dispatch(cashFlowBegin());
      dispatch(cashFlowSuccess(month));
    } catch (err) {
      dispatch(cashFlowErr(err));
    }
  };
};

const cashFlowFilterData = value => {
  return async dispatch => {
    try {
      dispatch(cashFlowBegin());
      setTimeout(() => {
        dispatch(cashFlowSuccess(cashFlow[value]));
      }, 100);
    } catch (err) {
      dispatch(cashFlowErr(err));
    }
  };
};

export {
  forcastOverviewGetData,
  forcastOverviewFilterData,
  twitterOverviewGetData,
  twitterOverviewFilterData,
  youtubeSubscribeFilterData,
  youtubeSubscribeGetData,
  socialTrafficFilterData,
  socialTrafficGetData,
  instagramOverviewGetData,
  instagramOverviewFilterData,
  linkdinOverviewGetData,
  linkdinOverviewFilterData,
  cashFlowGetData,
  cashFlowFilterData,
};
