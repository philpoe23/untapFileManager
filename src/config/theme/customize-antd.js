const primaryColor = '#5F63F2',
  primaryHover = '#4347D9',
  secondaryColor = '#FF69A5',
  secondaryHover = '#E34A87',
  linkColor = '#1890ff',
  linkHover = '#0D79DF',
  headingColor = 'rgba(0, 0, 0, 0.85)',
  successColor = '#20C997',
  successHover = '#0CAB7C',
  warningColor = '#FA8B0C',
  warningHover = '#D47407',
  errorColor = '#f5222d',
  errorHover = '#E30D0F',
  infoColor = '#2C99FF',
  infoHover = '#0D79DF',
  darkColor = '#272B41',
  darkHover = '#131623',
  grayColor = '#5A5F7D',
  grayHover = '#363A51',
  lightColor = '#F4F5F7',
  lightHover = '#e2e6ea',
  whiteColor = '#ffffff',
  dashColor = '#E3E6EF',
  whiteHover = '#5A5F7D',
  extraLightColor = '#ADB4D2',
  dangerColor = '#FF4D4F',
  dangerHover = '#E30D0F',
  borderColorLight = '#F1F2F6',
  borderColorNormal = '#E3E6EF',
  borderColorDeep = '#C6D0DC',
  bgGrayColorDeep = '#EFF0F3',
  bgGrayColorLight = '#F8F9FB',
  bgGrayColorNormal = '#F4F5F7',
  lightGrayColor = '#868EAE',
  sliderRailColor = 'rgba(95,99,242,0.2)',
  btnlg = '48px',
  btnsm = '36px',
  btnxs = '29px';

const theme = {
  'primary-color': primaryColor, // primary color for all components
  'primary-hover': primaryHover, // primary color for all components
  'secondary-color': secondaryColor, // secondary color for all components
  'secondary-hover': secondaryHover, // secondary color for all components
  'link-color': linkColor, // link color
  'link-hover': linkHover, // link color
  'success-color': successColor, // success state color
  'success-hover': successHover, // success state color
  'warning-color': warningColor, // warning state color
  'warning-hover': warningHover, // warning state color
  'error-color': errorColor, // error state color
  'error-hover': errorHover, // error state color
  'info-color': infoColor, // info state color
  'info-hover': infoHover, // info state color
  'dark-color': darkColor, // info state color
  'dark-hover': darkHover, // info state color
  'gray-color': grayColor, // info state color
  'gray-hover': grayHover, // info state color
  'light-color': lightColor, // info state color
  'light-hover': lightHover, // info state color
  'white-color': whiteColor, // info state color
  'white-hover': whiteHover, // info state color
  'dash-color': dashColor, // info state color
  'extra-light-color': extraLightColor, // info state color
  'danger-color': dangerColor,
  'danger-hover': dangerHover,
  'font-size-base': '14px', // major text font size
  'heading-color': headingColor, // heading text color
  'text-color': darkColor, // major text color
  'text-color-secondary': grayColor, // secondary text color
  'disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
  'border-radius-base': '4px', // major border radius
  'border-color-base': '#d9d9d9', // major border color
  'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // major shadow for layers
  'border-color-light': borderColorLight,
  'border-color-normal': borderColorNormal,
  'border-color-deep': borderColorDeep,
  'bg-color-light': bgGrayColorLight,
  'bg-color-normal': bgGrayColorNormal,
  'bg-color-deep': bgGrayColorDeep,
  'light-gray-color': lightGrayColor,
  'btn-height-large': btnlg,
  'btn-height-small': btnsm,
  'btn-height-extra-small': btnxs,

  // cards
  'card-head-background': '#ffffff',
  'card-head-color': darkColor,
  'card-background': '#ffffff',
  'card-head-padding': '16px',
  'card-padding-base': '12px',
  'card-radius': '10px',
  'card-shadow': '0 5px 20px rgba(146,153,184,0.03)',

  // Layout
  'layout-body-background': '#F4F5F7',
  'layout-header-background': '#ffffff',
  'layout-footer-background': '#fafafa',
  'layout-header-height': '64px',
  'layout-header-padding': '0 15px',
  'layout-footer-padding': '24px 15px',
  'layout-sider-background': '#ffffff',
  'layout-trigger-height': '48px',
  'layout-trigger-background': '#002140',
  'layout-trigger-color': '#fff',
  'layout-zero-trigger-width': '36px',
  'layout-zero-trigger-height': '42px',
  // Layout light theme
  'layout-sider-background-light': '#fff',
  'layout-trigger-background-light': '#fff',
  'layout-trigger-color-light': 'rgba(0, 0, 0, 0.65)',

  // PageHeader
  // ---
  'page-header-padding': '24px',
  'page-header-padding-vertical': '16px',
  'page-header-padding-breadcrumb': '12px',
  'page-header-back-color': '#000',
  'page-header-ghost-bg': 'inherit',

  // Popover body background color
  'popover-color': darkColor,

  // alert
  'alert-success-border-color': successColor,
  'alert-success-bg-color': successColor+15,
  'alert-error-bg-color': errorColor+15,
  'alert-warning-bg-color': warningColor+15,
  'alert-info-bg-color': infoColor+15,

  //radio btn
  'radio-button-checked-bg': primaryColor,

  //gutter width
  'grid-gutter-width': 25,

  //skeleton
  'skeleton-color': borderColorLight,

  //slider
  'slider-rail-background-color': sliderRailColor,
  'slider-rail-background-color-hover': sliderRailColor,
  'slider-track-background-color': primaryColor,
  'slider-track-background-color-hover': primaryColor,
  'slider-handle-color': primaryColor,
  'slider-handle-size': '22px',
};

module.exports = theme;
