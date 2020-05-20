import Styled from 'styled-components';

const DropdownStyle = Styled.div`
  .ant-card-body .ant-btn {
      margin-right: 8px;
      margin-bottom: 8px;
  }
`;

const SpinerWraperStyle = Styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`;

const CarouselStyleWraper = Styled.div`
  .ant-carousel .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;

const AvatarWraperStyle = Styled.div`
  .ant-avatar {
    margin: 5px;
  }
`;

const BadgeWraperStyle = Styled.div`
  .head-example {
    width: 42px;
    height: 42px;
    margin: 9px 15px;
    display: block;
    background: #ddd;
    border-radius: 3px;
  }
  .ant-badge-count{
    top: 10px;
    right: 15px;
    font-size: 10px;
    font-weight: 600;
    min-width: 20px;
    padding: 0;
    height: 20px;
    line-height: 14px;
    border: 3px solid #fff
  }
  .ant-scroll-number-custom-component{
    top: 10px !important;
    right: 15px !important;
  }
`;

const BadgeStandAloneStyle = Styled.div`
  .ant-badge-count{
    left: 0;
    border: 0;
    font-size: 12px !important;
    font-weight: 500;
    margin: 0 5px;
    line-height: 20px;
    padding: 0 8.6px !important;
  }
`;

const BadgeOverflowStyle = Styled.div`
  .ant-badge-count{
    font-size: 11px;
    border-width: 2px;
    padding: 0 7.2px;
    line-height: 16px;
  }
`;

const BreadcrumbWrapperStyle = Styled.div`
  .ant-breadcrumb{
    color: #5A5F7D;
  }
  .ant-breadcrumb span:first-child .ant-breadcrumb-link,
  .ant-breadcrumb span:first-child .ant-breadcrumb-link svg,
  .ant-breadcrumb span:first-child .ant-breadcrumb-link a{
    color: #5F63F2;
  }
  .ant-breadcrumb span:last-child .ant-breadcrumb-link{
    color: #9299B8;
  }
`;

export { DropdownStyle, SpinerWraperStyle, CarouselStyleWraper, AvatarWraperStyle, BadgeWraperStyle , BadgeStandAloneStyle , BadgeOverflowStyle , BreadcrumbWrapperStyle };
