import Styled from 'styled-components';

const Aside = Styled.aside`
    .ant-picker{
        visibility: hidden;
    }
    .ant-picker .ant-picker-input{
        display: none;
    }
    .listHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .eventList{
        li{
            a{
                display: block;
                line-height: 36px;
            }
        }
    }
    
`;

const CalendarWrapper = Styled.div`
   
    .primary{
        background: #5F63F2;
    }
    .secondary{
        background: #FF69A5;
    }
    .success{
        background: #20C997;
    }
    .info{
        background: #2C99FF;
    }
    .warning{
        background: #FA8B0C;
    }

    .bullet{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')} : 12px;
    }

    .calenderHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        ul{
            li{
                display: inline-block;
                a{
                    display: block;
                    padding: 4px 4px;
                }
            }
        }
    }
    
`;

export { CalendarWrapper, Aside };
