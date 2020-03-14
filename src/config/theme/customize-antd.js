const primaryColor = '#5F63F2',
  primaryHover = '#4347D9',
  secondaryColor = '#FF69A5',
  secondaryHover = '#E34A87',
  linkColor = '#1890ff',
  linkHover = '#0D79DF',
  textColor = 'rgba(0, 0, 0, 0.65)',
  headingColor = 'rgba(0, 0, 0, 0.85)',
  textColorSecondary = 'rgba(0, 0, 0, 0.45)',
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
  lightColor = '#9299B8',
  extraLightColor = '#ADB4D2',
  dangerColor = '#FF4D4F',
  dangerHover = '#E30D0F';

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
  'gray-Hover': grayHover, // info state color
  'light-color': lightColor, // info state color
  'extra-light-color': extraLightColor, // info state color
  'danger-color': dangerColor,
  'danger-hover': dangerHover,
  'font-size-base': '14px', // major text font size
  'heading-color': headingColor, // heading text color
  'text-color': textColor, // major text color
  'text-color-secondary': textColorSecondary, // secondary text color
  'disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
  'border-radius-base': '4px', // major border radius
  'border-color-base': '#d9d9d9', // major border color
  'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // major shadow for layers
  // cards
  'card-head-background': '#ffffff',
  'card-head-color': textColor,
  'card-background': '#ffffff',
  'card-head-padding': '16px',
  'card-padding-base': '12px',
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
  'popover-color': textColor,

  // slider
  'slider-track-background-color': primaryColor + '70',
  'slider-track-background-color-hover': primaryColor + '90',

  // alert

  'alert-success-border-color': successColor,
  'alert-success-bg-color': successColor,
  'alert-error-bg-color': errorColor,
  'alert-warning-bg-color': warningColor,
  'alert-info-bg-color': infoColor,
};

module.exports = theme;
