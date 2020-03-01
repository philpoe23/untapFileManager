const primaryColor = '#5F63F2',
  secondaryColor = '#137D82',
  linkColor = '#1890ff',
  textColor = 'rgba(0, 0, 0, 0.65)',
  headingColor = 'rgba(0, 0, 0, 0.85)',
  textColorSecondary = 'rgba(0, 0, 0, 0.45)',
  successColor = '#52c41a',
  warningColor = '#faad14',
  errorColor = '#f5222d',
  infoColor = '#91d5ff',
  dangerColor = '#ff4d4f';

const theme = {
  'primary-color': primaryColor, // primary color for all components
  'secondary-color': secondaryColor, // secondary color for all components
  'link-color': linkColor, // link color
  'success-color': successColor, // success state color
  'warning-color': warningColor, // warning state color
  'error-color': errorColor, // error state color
  'info-color': infoColor, // info state color
  'danger-color': dangerColor,
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
  'alert-success-bg-color': '#52c41a',
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
