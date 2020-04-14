import Styled from 'styled-components';

const UL = Styled.ul`
  list-style-type: none;
  li {
    display: inline-block;
    padding: 5px;
  }
`;

const Content = Styled.div`

`;

const BlockSpan = Styled.span`
  display: block;
`;

const MessageList = Styled.li`
  display: block;  
  max-width: 400px;
  padding: 10px;
  list-style-type: none;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme['border-color-light']};
  margin-bottom : 20px;
`;

const Footer = Styled.div`
  
`;

export { UL, Content, BlockSpan, MessageList, Footer };
