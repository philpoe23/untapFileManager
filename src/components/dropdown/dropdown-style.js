import Styled from 'styled-components';
import { Dropdown } from 'antd';
const Content = Styled.div`
    background: #ffffff;
    box-shadow: 0px 0px 2px #888;
    a {
        display: block;
        color: #888;
        padding: 6px 12px;
        span {
            padding-left: 12px;
        }
    }
    a:hover {
        background: ${({ theme }) => theme['primary-color']}10;
        color: ${({ theme }) => theme['primary-color']}
    }
`;

const DropdownStyle = Styled(Dropdown)`

`;

export { Content, DropdownStyle };
