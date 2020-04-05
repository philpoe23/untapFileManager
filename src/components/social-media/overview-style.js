import Styled from 'styled-components';

const MainWraper = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 15px 0;
`;

const SocialIcon = Styled.div`
  width: 50px;
  height: 50px;
  background: ${({ bgColor }) => bgColor};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export { MainWraper, SocialIcon };
