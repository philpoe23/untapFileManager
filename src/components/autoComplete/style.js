import Styled from 'styled-components';
import { AutoComplete } from 'antd';

const AutoCompleteStyled = Styled(AutoComplete)`
    display: block !important;
    .ant-select-selector{
        display: flex;
        align-items: center;
        height: 37px !important;
    }
    .ant-select-selector input{
        height: 35px !important;
    }
`;

export { AutoCompleteStyled };
