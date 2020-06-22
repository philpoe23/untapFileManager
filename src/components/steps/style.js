import Styled from 'styled-components';
import { Steps } from 'antd';

const StepsStyle = Styled(Steps)`
    .steps-action{
        margin-top: 40px;
        button{
            height: 44px;
        }
    }
`;

const ActionWrapper = Styled.div`
    width: 100%;
    .steps-action{
        margin-top: 38px;
        width: 100%;
        float: right
        display: flex;
        justify-content: space-between;
        button{
            display: flex;
            align-items: center;
            height: 44px;
            padding: 0 20px;
            &.ant-btn-light{
                border: 1px solid ${({theme})=>theme['border-color-light']};
            }
            &.btn-next{
                svg{
                    margin-left: 10px;
                }
            }
            &.btn-prev{
                svg{
                    margin-right: 10px;
                }
            }
        }
    }
`;

export { StepsStyle, ActionWrapper };
