import Styled from 'styled-components';

const PricingCard = Styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 20px #9299B830;
  padding: 30px;
`;

const ListGroup = Styled.div`

`;

const Badge = Styled.span`
  padding: 8px 22px;
  border-radius: 16px;  
  background: ${({ type, theme }) => theme[type + '-color']}20
  color: ${({ type, theme }) => theme[type + '-color']}
`;

const GalleryNav = Styled.nav`
  background: #fff;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 5px;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;    
    li {
      display: inline-block;
      a {
        display: block;
        padding: 8px;
      }
      a.active {
        color: #000;
      }
    }
  }
`;
export { PricingCard, ListGroup, Badge, GalleryNav };
