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

export { PricingCard, ListGroup, Badge };
