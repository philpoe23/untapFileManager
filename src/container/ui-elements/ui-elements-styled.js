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
    width: 30px;
    height: 30px;
    margin: 9px 5px;
    display: block;
    background: #ddd;
    border-radius: 3px;

  }
`;

export { DropdownStyle, SpinerWraperStyle, CarouselStyleWraper, AvatarWraperStyle, BadgeWraperStyle };
