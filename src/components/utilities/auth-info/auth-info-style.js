import Styled from 'styled-components';

const InfoWraper = Styled.div`
    float: right;
    display: flex;  
    .head-example{
        text-decoration: none;
        color: ${({ theme }) => theme['text-color-secondary']};
        box-shadow: none;
        padding: 0px 8px;     
    }
    .message .ant-badge-dot{
        background: green
    }
`;

export { InfoWraper };
