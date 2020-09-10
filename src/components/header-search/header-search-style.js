import Styled from 'styled-components';

const Div = Styled.div`
    .ant-input{
        border: none;
    }
    .ant-input:focus{
        border: none;
        outline: 0;
        box-shadow: none;
    }
    .certain-category-icon{
        font-size: 16px;
        color: ${({ theme }) => theme['gray-color']}
    }
`;

export { Div };
