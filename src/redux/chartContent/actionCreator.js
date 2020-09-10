import actions from './actions';
import {
  forcastOverview,
  youtubeSubscribe,
  SocialTrafficMetrics,
  twitterOverview,
  instagramOverview,
  linkdinOverview,
  cashFlow,
  income,
  performance,
  trafficChanel,
  device,
  region,
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

  incomeBegin,
  incomeSuccess,
  incomeErr,

  performanceBegin,
  performanceSuccess,
  performanceErr,

  updateLoadingBegin,
  updateLoadingSuccess,
  updateLoadingErr,

  trafficChanelBegin,
  trafficChanelSuccess,
  trafficChanelErr,

  deviceBegin,
  deviceSuccess,
  deviceErr,

  landingPageBegin,
  landingPageSuccess,
  landingPageErr,

  regionBegin,
  regionSuccess,
  regionErr,
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
    const { year } = cashFlow;
    try {
      dispatch(cashFlowBegin());
      dispatch(cashFlowSuccess(year));
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

const incomeGetData = () => {
  return async dispatch => {
    const { year } = income;
    try {
      dispatch(incomeBegin());
      dispatch(incomeSuccess(year));
    } catch (err) {
      dispatch(incomeErr(err));
    }
  };
};

const incomeFilterData = value => {
  return async dispatch => {
    try {
      dispatch(incomeBegin());
      setTimeout(() => {
        dispatch(incomeSuccess(income[value]));
      }, 100);
    } catch (err) {
      dispatch(incomeErr(err));
    }
  };
};

const performanceGetData = () => {
  return async dispatch => {
    const { year } = performance;
    try {
      dispatch(performanceBegin());
      dispatch(performanceSuccess(year));
    } catch (err) {
      dispatch(performanceErr(err));
    }
  };
};

const performanceFilterData = value => {
  return async dispatch => {
    try {
      dispatch(performanceBegin());
      setTimeout(() => {
        dispatch(performanceSuccess(performance[value]));
      }, 100);
    } catch (err) {
      dispatch(performanceErr(err));
    }
  };
};

const trafficChanelGetData = () => {
  return async dispatch => {
    const { year } = trafficChanel;
    try {
      dispatch(trafficChanelBegin());
      dispatch(trafficChanelSuccess(year));
    } catch (err) {
      dispatch(trafficChanelErr(err));
    }
  };
};

const trafficChanelFilterData = value => {
  return async dispatch => {
    try {
      dispatch(trafficChanelBegin());
      setTimeout(() => {
        dispatch(trafficChanelSuccess(trafficChanel[value]));
      }, 100);
    } catch (err) {
      dispatch(trafficChanelErr(err));
    }
  };
};

const deviceGetData = () => {
  return async dispatch => {
    const { year } = device;
    try {
      dispatch(deviceBegin());
      dispatch(deviceSuccess(year));
    } catch (err) {
      dispatch(deviceErr(err));
    }
  };
};

const deviceFilterData = value => {
  return async dispatch => {
    try {
      dispatch(deviceBegin());
      setTimeout(() => {
        dispatch(deviceSuccess(device[value]));
      }, 100);
    } catch (err) {
      dispatch(deviceErr(err));
    }
  };
};

const setIsLoading = () => {
  return async dispatch => {
    try {
      dispatch(updateLoadingBegin());
      setTimeout(() => {
        dispatch(updateLoadingSuccess());
      }, 100);
    } catch (err) {
      dispatch(updateLoadingErr(err));
    }
  };
};

const landingPageGetData = () => {
  return async dispatch => {
    const { year } = trafficChanel;
    try {
      dispatch(landingPageBegin());
      dispatch(landingPageSuccess(year));
    } catch (err) {
      dispatch(landingPageErr(err));
    }
  };
};

const landingPageFilterData = value => {
  return async dispatch => {
    try {
      dispatch(landingPageBegin());
      setTimeout(() => {
        dispatch(landingPageSuccess(trafficChanel[value]));
      }, 100);
    } catch (err) {
      dispatch(landingPageErr(err));
    }
  };
};

const regionGetData = () => {
  return async dispatch => {
    const { year } = region;
    try {
      dispatch(regionBegin());
      dispatch(regionSuccess(year));
    } catch (err) {
      dispatch(regionErr(err));
    }
  };
};

const regionFilterData = value => {
  return async dispatch => {
    try {
      dispatch(regionBegin());
      setTimeout(() => {
        dispatch(regionSuccess(region[value]));
      }, 100);
    } catch (err) {
      dispatch(regionErr(err));
    }
  };
};

export {
  regionGetData,
  regionFilterData,
  landingPageFilterData,
  landingPageGetData,
  deviceFilterData,
  deviceGetData,
  trafficChanelGetData,
  trafficChanelFilterData,
  setIsLoading,
  performanceFilterData,
  performanceGetData,
  incomeGetData,
  incomeFilterData,
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
